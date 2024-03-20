import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { useAuthState } from 'react-firebase-hooks/auth';

import viteLogo from '/vite.svg'
import './App.css'
import firebaseConfig from './firebaseConfig'
import { SignIn } from './SignIn';
import { SignOut } from './SignOut';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


function App() {
  const [user] = useAuthState(auth);
  if (!user) return <SignIn auth={auth} />
  return (
    <div>
      <p>Welcome, {user.displayName}</p>
      <SignOut auth={auth} />
    </div>
  )
}

export default App
