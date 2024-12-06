import { ReactElement } from "react";
import CoursesList from "../CoursesList/CoursesList";
import { useQuery } from "@tanstack/react-query";
import { courseAPIInstance } from "@/api/course";
import { observer } from "mobx-react-lite";
import Cover from "../Cover/Cover";
import Menu from "../Menu/Menu";
import CoursesPageWrapper from "@/styled/CoursesPage/CoursesPageWrapper";
import CoursesListWrapper from "@/styled/CoursesPage/CoursesListWrapper";
import { useLocation } from "react-router-dom";
import { userStore } from "@/store/store";

const CoursesPage = observer((): ReactElement => {
  const location = useLocation()
  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: () => courseAPIInstance.getAllCourses(),
  });
  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка при загрузке курсов. Пожалуйста, попробуйте позже.</div>;
  }
  if (data?.length === 0) {
    return <div>Нет доступных курсов.</div>;
  }
  return (
    <div>
      <Cover />
      <CoursesPageWrapper>
        <Menu />
        <CoursesListWrapper>
          <CoursesList courses={location.pathname === '/mycourses' ? userStore.courses : data} />
        </CoursesListWrapper>
      </CoursesPageWrapper>
    </div>
  );
});

export default CoursesPage;
