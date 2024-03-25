import { getAuth } from "firebase/auth";
import {
  Timestamp,
  collection,
  doc,
  getFirestore,
  query,
  where,
  getCountFromServer,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

enum ProfilePermission {
  Standard = "Standard",
  TeamLeader = "TeamLeader",
  Admin = "Admin",
}

type Church = { created: Timestamp; logoUrl: string; displayName: string };
export type Profile = {
  churchId: string;
  userId: string;
  created: Timestamp;
  updated: Timestamp;
  permission: ProfilePermission;
};
export const useUserProfiles = () => {
  return useCollectionData<Profile>(
    // @ts-expect-error DocumentData is {[key:string]:string}
    query(
      collection(
        getFirestore(),
        "users",
        getAuth().currentUser?.uid ?? "-1",
        "profiles"
      )
    )
  );
};
export const useChurchs = () =>
  // @ts-expect-error DocumentData is {[key:string]:string}
  useCollectionData<Church>(collection(getFirestore(), "churches"));
export const useChurchFromProfile = (profile: Profile | undefined) => {
  return useDocumentData<Church>(
    // @ts-expect-error DocumentData is {[key:string]:string}
    doc(getFirestore(), "churches", profile?.churchId ?? "-1")
  );
};

export const useCurrentUser = () => useAuthState(getAuth());
type CreateProfileProps = {
  churchId: string;
  userId: string;
};
export const createProfile = async ({
  churchId,
  userId,
}: CreateProfileProps) => {
  const now = serverTimestamp() as Timestamp;
  const data: Profile = {
    churchId,
    created: now,
    userId,
    updated: now,
    permission: ProfilePermission.Standard,
  };
  return await setDoc(
    doc(getFirestore(), "users", userId, "profiles", churchId),
    data
  );
};

export const getUserHasProfile = async (userId: string): Promise<boolean> => {
  const count = await getCountFromServer(
    query(
      collection(getFirestore(), "users", userId, "profiles"),
      where("userId", "==", userId)
    )
  );
  return count.data().count > 0;
};
