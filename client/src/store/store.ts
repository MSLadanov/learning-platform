import { makeAutoObservable } from "mobx";

interface IUserStore {
  id: null | string;
  fullname: null | string;
  email: null | string;
}

class UserStore implements IUserStore {
  id = "";
  fullname = "";
  email = "";
  constructor() {
    makeAutoObservable(this);
  }
  signIn(id: string, fullname: string, email: string) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
  }
  logOut() {
    this.id = "";
    this.email = "";
    this.fullname = "";
  }
}

export const userStore = new UserStore();
