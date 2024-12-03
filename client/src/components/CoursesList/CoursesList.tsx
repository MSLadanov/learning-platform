import { ReactElement } from "react";

interface ICourse {
  createdAt: string;
  description: string;
  duration: string;
  id: string;
  image: string;
  title: string;
  updatedAt: string;
}

const CoursesList = (courses: ICourse[]): ReactElement => {
  console.log(courses);
  return (
    <div>
      <h1>CoursesList</h1>
    </div>
  );
};

export default CoursesList;
