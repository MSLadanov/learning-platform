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

      // Проверяем статус ответа
      if (!response.ok) {
        throw new Error(
          `Ошибка входа: ${response.status} ${response.statusText}`
        );
      }

      const userData = await response.json();
      console.log(userData);
    } catch (error) {
      console.error(error);
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

      // Проверяем статус ответа
      if (!response.ok) {
        throw new Error(
          `Ошибка регистрации: ${response.status} ${response.statusText}`
        );
      }

      const userData = await response.json();
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  }
}

export const userAPIInstance = new UserAPI();
