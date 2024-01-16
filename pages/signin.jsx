import EmailInput from "../components/Input/EmailInput";
import PasswordInput from "../components/Input/PasswordInput";
import LoginTitle from "../components/LoginTitle/LoginTitle";
import { Button } from "../components/Button/Button";
import ShareBox from "../components/ShareBox/shareBox";
import styles from "../styles/signin.module.css";
import Input from "../components/Input/Input";
function Signin() {
  return (
    <>
      <form className={styles["form-all"]}>
        <LoginTitle />
        <div className={styles["form-inputs"]}>
          <EmailInput />
          <PasswordInput />
        </div>
        <Button type="submit">로그인</Button>
        <ShareBox />
      </form>
    </>
  );
}

export default Signin;
