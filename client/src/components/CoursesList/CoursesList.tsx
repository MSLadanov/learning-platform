import { ReactElement } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { ICourses } from "@/types/course/types";
import { userAPIInstance } from "@/api/user";
import { NavLink } from "react-router-dom";
import CoursesListButtonsWrapper from "@/styled/CoursesPage/CoursesListButtonsWrapper";

const CoursesList: React.FC<ICourses> = ({ courses }): ReactElement => {
  userAPIInstance.getUserData();
  return (
    <div>
      <CoursesListButtonsWrapper>
        <NavLink to="#">Все программы</NavLink>
        <NavLink to="#">Мои программы</NavLink>
      </CoursesListButtonsWrapper>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesList;
