import { ICourseCardProp } from "@/types/course/types";
import { ReactElement } from "react";


const CourseCard: React.FC<ICourseCardProp> = ({ course }): ReactElement => {
  console.log(course);
  return (
    <div>
      <h1>Course Card</h1>
    </div>
  );
};

export default CourseCard;
