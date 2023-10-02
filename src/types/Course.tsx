import Student from "./Student"

interface Course {
  id: number,
  courseName: string,
  courseDescription: string
  students: Student[],
}

export default Course;