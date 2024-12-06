import { userStore } from "@/store/store";
import CoursesCardButtonsWrapper from "@/styled/CoursesPage/CoursesCardButtonsWrapper";
import CoursesCardDescriptionWrapper from "@/styled/CoursesPage/CoursesCardDescriptionWrapper";
import CoursesCardImageWrapper from "@/styled/CoursesPage/CoursesCardImageWrapper";
import CoursesCardWrapper from "@/styled/CoursesPage/CoursesCardWrapper";
import { ICourseCardProp } from "@/types/course/types";
import { ReactElement } from "react";

const CourseCard: React.FC<ICourseCardProp> = ({ course }): ReactElement => {
  return (
    <CoursesCardWrapper>
      <CoursesCardImageWrapper>
        <img src={course.image} width={150} height={100} />
      </CoursesCardImageWrapper>
      <CoursesCardDescriptionWrapper>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p>{course.duration}</p>
        <CoursesCardButtonsWrapper>
          <button>Подробнее</button>
          <button onClick={() => userStore.startCourse(course)}>Пройти</button>
        </CoursesCardButtonsWrapper>
      </CoursesCardDescriptionWrapper>
    </CoursesCardWrapper>
  );
};

export default CourseCard;
