import axios from 'axios';

function CourseList() {
  const url = "http://localhost:8080/v1/courses";

  const getCourses = async () => {
    const res = await axios.get(url + "/");
    try {
      const data = res.data;
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  getCourses();

  return (
    <>
      <h2>Course List</h2>
    </>
  );
}

export default CourseList;