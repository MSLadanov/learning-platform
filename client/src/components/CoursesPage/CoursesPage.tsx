import { ReactElement } from "react";
import CoursesList from "../CoursesList/CoursesList";
import { useQuery } from "@tanstack/react-query";
import { courseAPIInstance } from "@/api/course";
import { observer } from "mobx-react-lite";

const CoursesPage = observer((): ReactElement => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['courses'],
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
      <CoursesList courses={data} />
    </div>
  );
});

export default CoursesPage;