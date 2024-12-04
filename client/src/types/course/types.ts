import { ReactNode } from "react";

export interface ICourse {
  createdAt: string;
  description: string;
  duration: string;
  id: string;
  image: string;
  title: string;
  updatedAt: string;
}

export interface ICourses {
  courses: ICourse[];
}

export interface ICourse {
  createdAt: string;
  description: string;
  duration: string;
  id: string;
  image: string;
  title: string;
  updatedAt: string;
}
export interface ICourseCardProp {
  course: ICourse;
}

export interface ICourseList {
  courses: ICourse[];
}

export interface SnackbarState {
  isOpen: boolean;
  message: string;
  type: "success" | "warning" | "error";
}

export interface SnackbarContextType {
  openSnackbar: (
    message: string,
    type?: "success" | "warning" | "error"
  ) => void;
}

export interface SnackbarProviderProps {
  children: ReactNode;
}
