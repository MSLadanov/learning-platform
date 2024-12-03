import { ICourseCardProp } from "@/types/course/types";
import { ReactElement } from "react";


const CourseCard: React.FC<ICourseCardProp> = ({ course }): ReactElement => {
  return (
    <div>
      <img src={course.image} width={150} height={100} />
      <h3>{course.title}</h3>
      <p>{course.duration}</p>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseCard;
