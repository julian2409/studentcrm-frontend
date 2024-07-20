import useFetchData from "../hooks/useFetchData";
import Course from "../types/Course";

function CourseList() {
  const url = "http://localhost:8080/v1/courses";
  const courseList = useFetchData(url) as Array<Course>;

  return (
    <>
      <h2>Course List</h2>
      <ul>
        {courseList.map((course: Course) => (
          <li key={course.id}>{course.courseName}</li>
        ))}
      </ul>
    </>
  );
}

export default CourseList;
