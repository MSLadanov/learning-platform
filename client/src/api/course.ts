const API_URL = "/api/v1";

class CourseAPI {
  async getAllCourses() {
    try {
      const courses = await fetch(`${API_URL}/courses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(courses);
    } catch (error) {
      console.log(error);
    }
  }

}

export const courseAPIInstance = new CourseAPI();