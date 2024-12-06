import { makeAutoObservable } from "mobx";

interface ICourse {
  createdAt: string;
  description: string;
  duration: string;
  id: number | string;
  title: string;
  updatedAt: string;
}

interface IUserStore {
  id: null | string;
  fullname: null | string;
  email: null | string;
  courses: ICourse[];
}

class UserStore implements IUserStore {
  id = "";
  fullname = "";
  email = "";
  courses: ICourse[] = [];
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
  startCourse(course: ICourse) {
    this.courses.push(course);
    console.log(this.courses)
  }
}

export const userStore = new UserStore();
