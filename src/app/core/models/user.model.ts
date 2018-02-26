export interface User {
  username: string;
  email: string;
  token: string;
  bio: string;
  image: string;

}

export interface CreateUser {
  Roles: String;
  Password: String;
  FistName: String;
  SurName: String;
  Email: String;
  CompanyId: String;
  Phone: String;
  Birthday: Date;
}