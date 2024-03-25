import { initializeApp } from "firebase/app";

import "./App.css";
import firebaseConfig from "./firebaseConfig";
import { SignIn } from "./SignIn";
import { useCurrentUser } from "./api";
import { ProfileSelection } from "./ProfileSelection";

const app = initializeApp(firebaseConfig);

function App() {
  const [user] = useCurrentUser();
  if (!user) return <SignIn />;
  return <ProfileSelection />;
}
export default App;
