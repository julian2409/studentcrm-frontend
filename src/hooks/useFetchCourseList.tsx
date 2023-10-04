import Course from "../types/Course";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useFetchCourseList(url: string): Array<Course> {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    function getCourses() {
      axios
        .get(url + "/")
        .then((response: AxiosResponse) => {
          setCourseList(response.data);
        })
        .catch((error: Error) => {
          console.error(error.message);
        });
    }

    getCourses();
  }, [url]);

  return courseList;
}
