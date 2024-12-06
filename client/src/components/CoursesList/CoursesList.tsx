import { ReactElement } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { ICourses } from "@/types/course/types";
import { userAPIInstance } from "@/api/user";
import { NavLink } from "react-router-dom";
import CoursesListButtonsWrapper from "@/styled/CoursesPage/CoursesListButtonsWrapper";
import NoCoursesWrapper from "@/styled/CoursesPage/NoCoursesWrapper";

const CoursesList: React.FC<ICourses> = ({ courses }): ReactElement => {
  userAPIInstance.getUserData();
  const emptyCourse = {
    id: "",
    createdAt: "",
    description: "",
    duration: "",
    image: "",
    title: "",
    updatedAt: "",
  };
  if (courses.length === 0) {
    return (
      <NoCoursesWrapper>
        <CoursesListButtonsWrapper>
          <NavLink to="/courses">Все программы</NavLink>
          <NavLink to="/mycourses">Мои программы</NavLink>
        </CoursesListButtonsWrapper>
        <div>
          <h1>Нет активных программ</h1>
        </div>
      </NoCoursesWrapper>
    );
  }
  return (
    <div>
      <CoursesListButtonsWrapper>
        <NavLink to="/courses">Все программы</NavLink>
        <NavLink to="/mycourses">Мои программы</NavLink>
      </CoursesListButtonsWrapper>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesList;
