import useFetchData from "../hooks/useFetchData";
import Course from "../types/Course";

function CourseComponent() {
    const url = "http://localhost:8080/v1/courses/1000";
    const course = useFetchData(url) as Course;

    return (
        <>
          <h2>Course {course.courseName}</h2>
          <p>
            {course.id}<br />
            {course.courseName}<br />
            {course.courseDescription}<br />
          </p>
        </>
    );
}

export default CourseComponent;
