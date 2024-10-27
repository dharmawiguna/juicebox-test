import { setEmail, setFirstName } from "@/app/store/formSlice";
import { RootState } from "@/app/store/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.scss";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);
  const form = useSelector((state: RootState) => state.form);

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleNextStep = () => {
    if (step === 1 && !form.firstName) {
      setError("First name is required.");
    } else if (step === 2 && !form.email) {
      setError("Email is required.");
    } else if (step === 2 && !validateEmail(form.email)) {
      setError("Please enter a valid email address.");
    } else {
      setError(null);
      setStep(step + 1);
    }
  };

  // const handlePrevStep = () => {
  //   if (step > 1) {
  //     setError(null);
  //     setStep(step - 1);
  //   }
  // };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFirstName(e.target.value));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  return (
    <div className={`${styles.wrapper} `}>
      {step === 1 && (
        <div>
          <p>Lets start with the basics. Type in your first name.</p>
          <div className={styles.wrapperInput}>
            <input
              type="text"
              value={form.firstName}
              onChange={handleFirstNameChange}
              placeholder="First name"
              required
            />

            {error && <span className={styles.error}>{error}</span>}

            <div className={styles.iconWrapper} onClick={handleNextStep}>
              <ArrowUpIcon className="size-4 icon" />
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <p>How should we contact you? Type in your email address.</p>
          <div className={styles.wrapperInput}>
            <input
              type="email"
              value={form.email}
              onChange={handleEmailChange}
              placeholder="Email address"
              className={styles.form}
              required
            />

            {error && <span className={styles.error}>{error}</span>}
            {/* <button onClick={handlePrevStep}>Back</button> */}
            <div className={styles.iconWrapper} onClick={handleNextStep}>
              <ArrowUpIcon className="size-4 icon" />
            </div>
            {/* <button onClick={handleNextStep}>Continue</button> */}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <p>Thanks, {form.firstName}! Now, its time to get a reality check.</p>
          <p>This will take 2-3 minutes.</p>
          <button className={styles.finish}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
