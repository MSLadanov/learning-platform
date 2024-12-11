import { useSnackbar } from "@/context/SnackbarContext";
import { userStore } from "@/store/store";
import CoursesCardButtonsWrapper from "@/styled/CoursesPage/CoursesCardButtonsWrapper";
import CoursesCardDescriptionWrapper from "@/styled/CoursesPage/CoursesCardDescriptionWrapper";
import CoursesCardImageWrapper from "@/styled/CoursesPage/CoursesCardImageWrapper";
import CoursesCardWrapper from "@/styled/CoursesPage/CoursesCardWrapper";
import { ICourseCardProp } from "@/types/course/types";
import { ReactElement, useEffect, useState } from "react";

const CourseCard: React.FC<ICourseCardProp> = ({ course }): ReactElement => {
  const { openSnackbar } = useSnackbar();
  const [isPurchased, setIsPurchased] = useState<boolean>(false);

  useEffect(() => {
    const purchasedCourse = userStore.courses.find(
      (item) => item.id === course.id
    );
    setIsPurchased(!!purchasedCourse);
  }, [course.id, userStore.courses]);

  return (
    <CoursesCardWrapper>
      <CoursesCardImageWrapper>
        <img src={course.image} width={273} height={174} alt={course.title} />
      </CoursesCardImageWrapper>
      <CoursesCardDescriptionWrapper>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p>{course.duration}</p>
        {isPurchased && <p>Куплено</p>}
        {isPurchased ? (
          <CoursesCardButtonsWrapper>
            <button>Cмотреть</button>
          </CoursesCardButtonsWrapper>
        ) : (
          <CoursesCardButtonsWrapper>
            <button>Подробнее</button>
            <button
              onClick={() => {
                userStore.startCourse(course);
                setIsPurchased(true);
                openSnackbar(
                  `Вы успешно записались на курс ${course.title}!`,
                  "success"
                );
              }}
            >
              Пройти
            </button>
          </CoursesCardButtonsWrapper>
        )}
      </CoursesCardDescriptionWrapper>
    </CoursesCardWrapper>
  );
};

export default CourseCard;
