import { UserInfo } from "../interfaces";

export const personConverter = {
  toFirestore: (data: any): UserInfo => {
    return {
      uid: data.uid,
      email: data.email,
      username: data.username,
      emailVerified: data.emailVerified,
      isAnonymous: data.isAnonymous,
      phoneNumber: data.phoneNumber,
      photoURL: data.photoURL,
      orgs: data.orgs
    };
  },
  fromFirestore: (snapshot: any, options: any): UserInfo => {
    const data = snapshot.data(options);
    return {
      uid: data.uid,
      email: data.email,
      username: data.username,
      emailVerified: data.emailVerified,
      isAnonymous: data.isAnonymous,
      phoneNumber: data.phoneNumber,
      photoURL: data.photoURL,
      orgs: data.orgs
    };
  }
};
