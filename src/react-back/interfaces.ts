export interface UserInfo {
  uid: string,
  email: string,
  username: string,
  emailVerified?: boolean,
  isAnonymous?: boolean,
  phoneNumber?: string,
  photoURL?: string,
  //the list is contained with organization uuid, 
  //it is also same the doc id in organizations collection
  orgs?: Array<string>,
}

//organization
export interface Organization {
  //the below is same the doc id in organizations collection
  uuid: string,
  name: string,
  //the list is contained with user uuid, 
  //it is also same the doc id in people collection
  owners: Array<string>,

  //if it is true, 
  //owners is only own user uid, no member
  personal: boolean,

  //the list is contained with user uuid, 
  //it is also same the doc id in people collection
  member?: Array<string>,
  //the list is contained with project uuid, 
  //it is also same the doc id in projects collection
  projects?: Array<string>,

  //when this organization is own, the below is false.
  deletable?: boolean,
}