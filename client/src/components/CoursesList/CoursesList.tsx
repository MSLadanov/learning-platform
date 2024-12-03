import { ReactElement } from "react";
import CourseCard from "../CourseCard/CourseCard";

interface ICourse {
  createdAt: string;
  description: string;
  duration: string;
  id: string;
  image: string;
  title: string;
  updatedAt: string;
}

const CoursesList = ({courses}): ReactElement => {
  return (
    <div>
      {courses.map((course) => <CourseCard key={course.id} course={course}/> )}
    </div>
  );
};

export default CoursesList;
