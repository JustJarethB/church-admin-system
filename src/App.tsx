import { initializeApp } from "firebase/app";

import "./App.css";
import firebaseConfig from "./firebaseConfig";
import { useCurrentUser } from "@/api";
import { SignIn, ProfileSelection } from "@/pages";

const app = initializeApp(firebaseConfig);

function App() {
  const [user] = useCurrentUser();
  if (!user) return <SignIn />;
  return <ProfileSelection />;
}
export default App;
