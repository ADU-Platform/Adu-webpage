import React, { useCallback, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import {
  findPersonUsingEmail,
  getPerson,
  getUser,
  newOrganization,
  newPerson,
  reloadAuth,
  signInWithFirebase, signOutWithFirebase, signUpWithFirebase,
} from "./firebase/core";

//interfaces
import { User } from "firebase/auth";
import { Organization, UserInfo } from "./interfaces"

//util
import { v4 as uuidv4 } from 'uuid';
import { userInfo } from "os";

//normal function
export function useUser(
  options?: {
    checkAccount?: {
      //where did request it?,
      pastPagePath: string,
    }
  }
) {
  let active = true;
  const navigate = useNavigate();
  const [user, setUser] = useState<UserInfo>();

  useEffect(() => {
    getUser()
      .then((user) => {
        //console.log(user);

        //load the userInfo, when the page refresh
        getPerson(user.uid).then((userInfo) => {
          if (active) setUser(userInfo);
        });
      })
      .catch((error) => {
        //console.log(error);
        reloadAuth(
          //there is account!
          (user) => {
            //alter User class to UserInfo class
            getPerson(user.uid).then((userInfo) => {
              if (active) setUser(userInfo);
            });

          },
          //no account
          () => {
            //debug
            // console.log("no account!");

            //if no account, go to the sign in page
            if (options?.checkAccount?.pastPagePath)
              navigate("/signin", {
                state: {
                  pastPagePath: options?.checkAccount?.pastPagePath
                }
              });

          },
        );
      });




    //clean up function
    return () => {
      active = false;
    }
  }, [])

  return user;
}
export function useSignIn() {
  //get a state for redirent the past page
  const { state } = useLocation();
  //debug
  //console.log(state);
  //console.log(state.pastPagePath);

  let active = true;
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

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
      navigate(state.pastPagePath || "/");
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
      setLoading(false);
      return;
    }

    setLoading(true);
    signInWithFirebase(email, password, successFunc, failFunc);

  };

  useEffect(() => {
    //clean up function
    return () => {
      active = false;
    }
  }, [])

  return {
    registerEmail: {
      //it is normal attributes in html
      value: email, onChange: handleEmailInput, type: "text",
      //for material ui
      label: "Email"
    },
    registerPassword: {
      value: password, onChange: handlePasswordInput, type: "password",
      label: "Password"
    },
    registerSubmit: { onSubmit: handleSubmit },
    message, loading
  };
}
export function useSignUp() {
  let active = true;
  const navigate = useNavigate();

  //for submit
  const [loading, setLoading] = useState<boolean>(false);

  //input value state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  //after excuting sign up 
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
    //debug
    // console.log("submit");
    /*
    Required input
      email, password, username
    */
    //check empty about feilds
    if (
      email.length === 0 ||
      username.length === 0
    ) {
      setMessage("Please enter a valid email address or username.");
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

    setLoading(true);
    signUpWithFirebase(email, password, username, phoneNumber, successFunc, failFunc)
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    //clean up function
    return () => {
      active = false;
    }
  }, [])

  return {
    registerEmail: {
      //it is normal attributes in html
      value: email, onChange: handleEmailInput, type: "text",
      //for material ui
      label: "Email", required: true,
    },
    registerPassword: {
      value: password, onChange: handlePasswordInput, type: "password",
      label: "Password", required: true
    },
    registerConfirmPassword: {
      value: confirmPassword, onChange: handleConfirmPasswordInput, type: "password",
      label: "Confirm Password", required: true
    },
    registerUsername: {
      value: username, onChange: handleUsernameInput, type: "text",
      label: "Username", required: true
    },
    registerPhoneNumber: {
      value: phoneNumber, onChange: handlePhoneNumberInput, type: "text",
      label: "Phone Number"
    },
    registerSubmit: { onSubmit: handleSubmit },
    message, loading
  }
}
export function useSignOut() {
  const navigate = useNavigate();

  signOutWithFirebase(
    () => {
      navigate("/");
    }
  );
}

/*
function for physical computing

hooks 
-> useEditor

*/

export function useEditor() {
  const user = useUser({
    checkAccount: {
      pastPagePath: "/physicalcomputing/editor"
    }
  });


  return { user };
}

/*
function for workspace

hooks 
-> useOrganizations, useProjects
*/
export function useOrganizations() {
  const user = useUser();

  //get a organizations
  //const userInfo = getPerson(user?.uid);


  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  return {
    currentIndex, setCurrentIndex, organizations, setOrganizations
  }
}
export function useProjects() {
  const user = useUser();



  return {
    registerAddProject: {
    },
    registerAddingProject: {

    }
  }
}