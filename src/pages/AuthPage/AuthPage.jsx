import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import SignUpFormFunc from "../../components/SignUpFormFunc/SignUpFormFunc";
import LoginForm from "../../components/LoginForm/LoginForm";
export default function AuthPage({setUser}) {
  return (
    <main>
      <h1 className="sign-up-header">Sign Up</h1>
      <SignUpForm setUser={setUser}/>
      <h1 className="log-in-header">Log In</h1>
      <LoginForm setUser={setUser}/>
    </main>
  );
}