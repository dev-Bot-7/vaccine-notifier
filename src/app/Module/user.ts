export interface User {
  id: number,
  fullName : string,
  email : string,
  password : string,
  mobile : string;
	isEmailVerified : boolean,
  token : string
}
