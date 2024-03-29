export interface User {
  email: string;
  password: string;
}

export interface UserTokenInfo {
  userInfo: UserInfo;
}

export interface UserInfo {
  lastName: string;
  firstName: string;
}
