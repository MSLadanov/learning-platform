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
      const courses: ICourse[] = await response.json();
      return courses;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export const courseAPIInstance = new CourseAPI();
