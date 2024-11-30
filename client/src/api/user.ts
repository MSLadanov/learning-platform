export const API_URL = "/api/v1";

interface IRegCredentials {
  fullname: string;
  login: string;
  email: string;
  password: string;
}

class UserAPI {
  async logIn() {}
  async logOut() {}
  async register(credentials: IRegCredentials) {
    try {
      const user = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
}

export const userAPIInstance = new UserAPI();
