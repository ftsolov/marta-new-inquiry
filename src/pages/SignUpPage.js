import React, { useState } from "react";
import TextInput from "../components/TextInput";

const SignUpPage = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  let condition1 = "hey";
  let condition2 = false;

  if (condition1 !== undefined) {
    console.log("runs")
  } else {
    console.log("does not run")
  }

  return (
    <form>
      <img src="/preview.jpg" alt="" className={"w-full -mb-8"} />
      <div className={"p-4"}>
        <h1 className={"text-3xl text-navy font-semibold"}>
          We found some great caregivers for you.
        </h1>
        <p className={"text-slate-600 text-lg mt-4"}>
          Complete your free acount and join thousands of other families finding
          care on marta.
        </p>
        <div className={"w-full flex flex-col space-y-4 mt-6"}>
          <div className={"flex gap-2 items-end"}>
            <TextInput
              value={signUpInfo.firstName}
              label={"Name"}
              setStateFunction={setSignUpInfo}
              stateValue={signUpInfo}
              autoFocus={false}
              inputPlaceholder={"Vorname"}
              id={"firstName"}
            />
            <TextInput
              value={signUpInfo.lastName}
              setStateFunction={setSignUpInfo}
              stateValue={signUpInfo}
              autoFocus={false}
              inputPlaceholder={"Nachname"}
              id={"lastName"}
            />
          </div>
          <TextInput
            value={signUpInfo.email}
            type={"email"}
            label={"Email"}
            autoFocus={false}
            inputPlaceholder={"example@domain.de"}
            setStateFunction={setSignUpInfo}
            stateValue={signUpInfo}
            id={"email"}
          />
          <TextInput
            value={signUpInfo.phoneNumber}
            label={"Phone number"}
            setStateFunction={setSignUpInfo}
            stateValue={signUpInfo}
            autoFocus={false}
            id={"phoneNumber"}
          />
          <TextInput
            value={signUpInfo.password}
            type={"password"}
            autoFocus={false}
            label={"Password"}
            setStateFunction={setSignUpInfo}
            stateValue={signUpInfo}
            id={"password"}
          />
          <div className={'flex flex-row items-start'}>
            <input
              type="checkbox"
              id={"consent"}
              className="w-5 h-5 text-primary-400 bg-gray-100 mt-1 border-gray-300 rounded focus:ring-primary-400 focus:ring-2"
            />
            <label htmlFor="consent" className={"flex gap-2 items-start ml-2"}>
              I hereby consent (represented by my court-appointed carer if I am
              mentally impaired) to marta processing my personal data. Further
              information on data protection is available at link.
            </label>
          </div>

          <button
            className={
              "w-full text-center font-medium bg-primary-400 py-4 rounded-md text-xl disabled:bg-primary/60 text-white transition"
            }
          >
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpPage;
