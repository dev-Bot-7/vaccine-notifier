export interface User {
  id: number,
  name : string,
  email : string,
  password : string,
  mobile : string;
	isEmailVerified : boolean,
  token : string
}
