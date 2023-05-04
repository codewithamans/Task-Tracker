import { Main, Navbar, Notask } from "@/components";
import { useEffect, useState } from "react";

import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Home() {
  const [state, setState] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setState(true);

        // console.log(user);
      }
    });
  });
  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("Sign Out Successfully");
        setState(false);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <Navbar mystate={state} />
      {/* <Main/> */}
      <div className="w-full  flex justify-center items-center ">
        {state ? <Main /> : <Notask />}
      </div>

      {state ? (
        <button type="text-white" className="text-white" onClick={logOut}>
          Sign Out
        </button>
      ) : (
        ""
      )}
    </>
  );
}
