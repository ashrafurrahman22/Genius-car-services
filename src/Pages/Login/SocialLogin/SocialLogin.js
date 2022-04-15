import { fa0, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  if(loading || loading1){
    return <Loading></Loading>
  }

  if (user || user1) {
    navigate('/home');
  }

  if (error || error1) {
    errorElement =
      <div>
        <p className="text-danger">Error: {error?.message} {error1?.message} </p>
      </div>
  }

  

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>

      <div>
          {errorElement}
        <button
        onClick={() => signInWithGoogle()}
         className="btn btn-info p-2 w-100 my-2">
          <span>Google Sign In</span>
        </button>
        <button className="btn btn-primary p-2 w-100 my-2">
          <i class="fa-brands fa-google"></i> <span>Facebook Sign In</span>
        </button>
        <button onClick={() => signInWithGithub()} className="btn btn-dark p-2 w-100 my-2">
          <i class="fa-brands fa-google"></i> <span>Github sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
