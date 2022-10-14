import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "../firebase";

const useAuth = () => {
  const [user, setUser] = useState(false);
  return <div>useAuth</div>;
};

export default useAuth;
