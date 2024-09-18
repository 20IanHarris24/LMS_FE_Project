export interface IAuthContext {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface ICompany {
  id: string;
  name: string;
  address: string;
  employees: any[];
}

// export interface ICourses {
//   id: string;
//   name: string;
// }

// export interface IModules{

//   id: string;
//   name: string;
//   activities: any[];

// }

// export interface IStudent {
//   id: string;
//   name: string;
// }