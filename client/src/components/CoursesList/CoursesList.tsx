import { ReactElement, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { ICourses } from "@/types/course/types";
import { userAPIInstance } from "@/api/user";
import { NavLink } from "react-router-dom";
import CoursesListButtonsWrapper from "@/styled/CoursesPage/CoursesListButtonsWrapper";
import NoCoursesWrapper from "@/styled/CoursesPage/NoCoursesWrapper";
import Pagination from "../Pagination/Pagination";

let PageSize = 5;

const CoursesList: React.FC<ICourses> = ({ courses }): ReactElement => {
  userAPIInstance.getUserData();
  const [currentPage, setCurrentPage] = useState(1);
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const paginatedCourses = courses.slice(firstPageIndex, lastPageIndex);
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
        <NavLink to="/courses" onClick={() => setCurrentPage(1)}>Все программы</NavLink>
        <NavLink to="/mycourses" onClick={() => setCurrentPage(1)}>Мои программы</NavLink>
      </CoursesListButtonsWrapper>
      {paginatedCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={courses.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default CoursesList;
