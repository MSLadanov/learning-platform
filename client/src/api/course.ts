const API_URL = "/api/v1";

interface ICourse {
  createdAt: string;
  description: string;
  duration: string;
  id: string;
  image: string;
  title: string;
  updatedAt: string;
}

interface ICourseList {
  courses: ICourse[];
}

class CourseAPI {
  async getAllCourses(): Promise<ICourse[]> {
    try {
      const response = await fetch(`${API_URL}/courses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(
          `Ошибка при получении курсов: ${response.status} ${response.statusText}`
        );
      }
      const courses: ICourseList = await response.json();
      return courses.courses;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export const courseAPIInstance = new CourseAPI();
