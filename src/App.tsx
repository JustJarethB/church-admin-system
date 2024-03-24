import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";
import firebaseConfig from "./firebaseConfig";
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";
import { Page } from "./components";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);
  if (!user) return <SignIn auth={auth} />;
  return (
    <Page className="flex flex-col justify-between h-full">
      <p>Welcome, {user.displayName}</p>
      <SignOut auth={auth} />
    </Page>
  );
}
export default App;
