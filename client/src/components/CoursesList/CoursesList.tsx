import { ReactElement } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { ICourses } from "@/types/course/types";
import { userAPIInstance } from "@/api/user";

const CoursesList : React.FC<ICourses> = ({courses}): ReactElement => {
  userAPIInstance.getUserData()
  return (
    <div>
      {courses.map((course) => <CourseCard key={course.id} course={course}/> )}
    </div>
  );
};

export default CoursesList;
