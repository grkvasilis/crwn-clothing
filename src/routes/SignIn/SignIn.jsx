import SignUpForm from "../../components/SignUpForm/SignUpForm";
import {
  signInWithGooglePopUp,
  createuserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createuserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
