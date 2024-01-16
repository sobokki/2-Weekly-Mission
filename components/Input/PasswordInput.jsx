import { useState } from "react";
import Image from "next/image";
import styles from "./PasswordInput.module.css";
import Input from "./Input";

function PasswordInput(value, onChange) {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState(null);
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  const handleError = (e) => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      setError("비밀번호를 입력해 주세요.");
    } else if (
      e.currentTarget.value.length < 8 ||
      !passwordRegex.test(e.currentTarget.value)
    ) {
      setError("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    } else {
      setError(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles["input-container"]}>
        <label htmlFor="password" className={styles["input-label"]}>
          비밀번호:
        </label>
        <Input
          required
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          value={password}
          onBlur={handleError}
          state={error ? "error" : null}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해 주세요"
        />
        <div className={styles["wrap-ImgContainer"]}>
          <div className={styles.ImgContainer}>
            {isPasswordVisible ? (
              <Image
                fill
                src="/eye-on.svg"
                alt="비밀번호 보이기"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <Image
                fill
                src="/eye-off.svg"
                alt="비밀번호 가리기"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </div>
        {error && <p className={styles["errorMessage"]}>{error}</p>}
      </div>
    </>
  );
}
export default PasswordInput;
