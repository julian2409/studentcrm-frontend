import axios from 'axios';

function CourseList() {
  const url = "http://localhost:8080/v1/courses";

  function getCourses() {
    axios.get(url + "/")
      .then(response => {
        console.log(response.data);
      }).catch(error => {
        console.error(error);
      });
  }
  getCourses();

  return (
    <>
      <h2>Course List</h2>
    </>
  );
}

export default CourseList;