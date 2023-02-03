import { stat } from "fs";
import { useLocation } from "react-router-dom";
import SignInForm from "../components/SignInForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[30px]">Amazon</p>
      <SignInForm />
    </div>
  );
};

export default Login;
