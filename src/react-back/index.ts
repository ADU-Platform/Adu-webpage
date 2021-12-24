import React, { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import {
  newOrganization,
  newPerson,
  signInWithFirebase, signUpWithFirebase,
} from "./firebase/core";

//interfaces
import { UserInfo } from "./interfaces"

//util
import { v4 as uuidv4 } from 'uuid';

export function useUser() {
  const active = true;
  const [user, setUser] = useState<UserInfo>();

  return user;
}
interface UseSignIn {
  email: string,
  password: string,
  handleEmailInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handlePasswordInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (event: React.SyntheticEvent) => void,
  message?: string
}
export function useSignIn(): UseSignIn {
  let active = true;
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //for excuting sign in 
  const [message, setMessage] = useState<string>();

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    //check empty about email feild
    if (email.length === 0) {
      setMessage("Please enter a vaild email address");
      return;
    }
    //check empty about password feild
    if (password.length === 0) {
      setMessage("A password is required.");
      return;
    }
    //check the valid email
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(format)) {
      setMessage("You have entered an invalid email address.");
      return;
    }

    //if success about sign in with firebase, the below is excuting.
    const successFunc = (user: UserInfo) => {
      //for clean up function
      active = false;

      //go to the home
      navigate("/");
    }
    //if error about sign in with firebase, the below is excuting.
    const failFunc = (error: any) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/invalid-email") {
        if (active) //for cleanup function
          setMessage("The email address is not valid.");
      }
      else if (errorCode === "auth/user-disabled") {
        if (active)
          setMessage("The user corresponding to the given email has been disabled.");
      }
      else if (errorCode === "auth/user-not-found") {
        if (active)
          setMessage("There is no user corresponding to the given email.");
      }
      else if (errorCode === "auth/wrong-password") {
        if (active)
          setMessage("The password is invalid for the given email, or the account corresponding to the email does not have a password set.");
      }
      else {
        if (active)
          alert(errorMessage);
      }
      //exit
      return;
    }
    signInWithFirebase(email, password, successFunc, failFunc);

  };

  useEffect(() => {
    //clean up function
    return () => {
      active = false;
    }
  }, [])

  return {
    email,
    password,
    handleEmailInput,
    handlePasswordInput,
    handleSubmit,
    message
  };
}
interface UseSignUp {
  email: string,
  password: string,
  confirmPassword: string,
  username: string,
  phoneNumber: string,
  handleEmailInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handlePasswordInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleConfirmPasswordInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleUsernameInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handlePhoneNumberInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (event: React.SyntheticEvent) => void,
  message?: string
}
export function useSignUp(): UseSignUp {
  let active = true;
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  //for excuting sign up 
  const [message, setMessage] = useState<string>();

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }
  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }
  const handleConfirmPasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.currentTarget.value);
  }
  const handleUsernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  }
  const handlePhoneNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.currentTarget.value);
  }
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    /*
    Required input
      email, password, username
    */

    //check empty about feilds
    if (
      email.length === 0 ||
      username.length === 0
    ) {
      setMessage("Please enter a valid email address and username.");
      return;
    }
    //check the valid email
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(format)) {
      setMessage("You have entered an invalid email address.");
      return;
    }
    //check empty about password
    if (password.length === 0) {
      setMessage("A password is required.");
      return;
    }
    //check the same value between password and confirmPassword
    if (password !== confirmPassword) {
      setMessage("The confirm password is not valid.");
      return;
    }
    //check the valid phone number 

    //if success about sign in with firebase, the below is excuting.
    const successFunc = (user: UserInfo) => {
      //for clean up function
      active = false;

      //add the organization named as user email,
      //this org is not able to be deleted.
      const orgDocId = uuidv4();
      newOrganization({
        uuid: orgDocId,
        name: email,
        owners: [user.uid],
        personal: true,
        deletable: false
      });

      //add the person in people collection 
      //and add the info own organization in user doc
      newPerson({
        uid: user.uid,
        email: email,
        username: username,
        phoneNumber: phoneNumber,
        orgs: [orgDocId]
      });

      //go to the home
      navigate("/");
    }
    //if error about sign in with firebase, the below is excuting.
    const failFunc = (error: any) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/email-already-in-use") {
        if (active) //for cleanup function
          setMessage("There already exists an account with the given email address.");
      }
      else if (errorCode === "auth/invalid-email") {
        if (active)
          setMessage("The email address is not valid.");
      }
      else if (errorCode === "auth/operation-not-allowed-found") {
        if (active)
          setMessage("Email and password accounts are not enabled.");
      }
      else if (errorCode === "auth/weak-password") {
        if (active)
          setMessage("The password is not strong enough.");
      }
      else {
        if (active)
          alert(errorMessage);
      }
      //exit
      return;
    }

    signUpWithFirebase(email, password, username, phoneNumber, successFunc, failFunc);
  }

  useEffect(() => {
    //clean up function
    return () => {
      active = false;
    }
  }, [])

  return {
    email,
    password,
    confirmPassword,
    username,
    phoneNumber,
    handleEmailInput,
    handlePasswordInput,
    handleConfirmPasswordInput,
    handleUsernameInput,
    handlePhoneNumberInput,
    handleSubmit,
    message
  }
}