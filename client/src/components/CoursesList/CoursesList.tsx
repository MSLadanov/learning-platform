import { ReactElement } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { ICourses } from "@/types/course/types";

const CoursesList : React.FC<ICourses> = ({courses}): ReactElement => {
  return (
    <div>
      {courses.map((course) => <CourseCard key={course.id} course={course}/> )}
    </div>
  );
};

export default CoursesList;
