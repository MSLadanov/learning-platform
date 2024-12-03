import { ReactElement } from "react";
import CoursesList from "../CoursesList/CoursesList";
import { useQuery } from "@tanstack/react-query";
import { courseAPIInstance } from "@/api/course";

const CoursesPage = (): ReactElement => {
  const {data} = useQuery({ queryKey: ['courses'], queryFn: () => courseAPIInstance.getAllCourses() })
  console.log(data)
  return (
    <div>
      <h1>CoursesPage</h1>
      <CoursesList/>
    </div>
  );
};

export default CoursesPage;
