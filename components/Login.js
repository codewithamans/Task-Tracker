import { useRouter } from "next/router";
import Link from "next/link";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errmessage, seterrmessage] = useState("");
  const login = () => {
    if (!values.email || !values.password) {
      seterrmessage(`Fill all the fields`);
    } else {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          console.log(userCredential);
          //   const user = userCredential.user;
          //   await updateProfile(user, {
          //     displayName: `${values.firstname} ${values.lastname}`,
          //   });
        })
        .catch((error) => {
          console.log(error);
          alert(error);
          // ..
          router.push("/");
        });
    }
  };
  const loginwithgoogle = async () => {
    const provider = await new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <div class="w-full  h-screen flex justify-center items-center">
        <div className=" md:w-2/5 px-12 py-32 rounded-2xl ">
          <div className=" text-center text-white font-bold text-3xl">
            Welcome !!
          </div>
          <div className="text-center text-white font-bold text-xl ">
            To Login Page
          </div>

          <div className="input-container ic2">
            <input
              id="email"
              className="input"
              type="text"
              placeholder=" "
              onChange={(event) => {
                setValues((prev) => ({ ...prev, email: event.target.value }));
              }}
            />
            <div className="cut "></div>
            <label for="email" className="placeholder">
              Email
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="password"
              className="input"
              type="text"
              placeholder=" "
              onChange={(event) => {
                setValues((prev) => ({
                  ...prev,
                  password: event.target.value,
                }));
              }}
            />
            <div className="cut "></div>
            <label for="password" className="placeholder">
              Password
            </label>
          </div>
          <h5 className="text-red-600 px-2 my-2 font-sans font-semibold">
            {errmessage}
          </h5>
          <button
            type="text"
            className="text-white font-bold mt-6 mb-1 bg-blue-600 w-full py-4 rounded-2xl"
            onClick={login}
          >
            Login
          </button>
          <button
            type="text"
            className="text-white font-bold mt-2 bg-blue-600 w-full py-4 rounded-2xl"
            onClick={loginwithgoogle}
          >
            Continue with Google
          </button>
          <div className="flex mt-6">
            <h4 className="text-white ">Create New Account ?</h4>
            <Link
              href="/signup "
              className="text-white px-2 underline underline-offset-2"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
