import Head from "next/head";
import { useRecoilState } from "recoil";
import { loginAtom } from "../atoms/logInAtom";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const Login = () => {
  const [logIn, setLogIn] = useRecoilState(loginAtom);

  return (
    <div>
      <div className="bg-gray-50 w-screen h-screen flex items-center overflow-x-hidden">
        <Head>
          <title>Authentication</title>
          <meta name="description" content="Generated by create next app" />
    
        </Head>
        {logIn ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default Login;
