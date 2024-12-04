import { userStore } from "@/store/store";

const API_URL = "/api/v1";

interface IRegCredentials {
  fullname: string;
  login: string;
  email: string;
  password: string;
}

interface ILogCredentials {
  login: string;
  password: string;
}

class UserAPI {
  async logIn(credentials: ILogCredentials) {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error(
          `Ошибка входа: ${response.status} ${response.statusText}`
        );
      }

      const userData = await response.json();
      const { id, fullname, email } = userData;
      userStore.signIn(id, fullname, email);
    } catch (error) {
      throw new Error(
        `Ошибка входа: ${error}`
      );
    }
  }

  async register(credentials: IRegCredentials) {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error(
          `Ошибка регистрации: ${response.status} ${response.statusText}`
        );
      }

      const userData = await response.json();
      const { id, fullname, email } = userData;
      userStore.signIn(id, fullname, email);
      console.log(userData);
    } catch (error) {
      throw new Error(
        `Ошибка регистрации: ${error}`
      );
    }
  }
  async getUserData() {
    try {
      const response = await fetch(`${API_URL}/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(
          `Ошибка получения данных пользователя: ${response.status} ${response.statusText}`
        );
      }
      const userData = await response.json();
      const { id, fullname, email } = userData;
      userStore.signIn(id, fullname, email);
    } catch (error) {
      console.error(error);
    }
  }
}

export const userAPIInstance = new UserAPI();
