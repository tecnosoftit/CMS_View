export interface User {
  username: string;
  email: string;
  token: string;
  bio: string;
  image: string;

}

export interface CreateUser {
  FistName: String;
  SurName: String;
  Email: String;
  Password: String;
  Phone: String;
  Roles: String;
  Birthday: Date;
  CompanyId: String;


}
