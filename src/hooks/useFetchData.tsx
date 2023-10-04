import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useFetchData<Type>(url: string): Type | null {
  const [data, setData] = useState<Type | null>(null);

  useEffect(() => {
    function getData() {
      axios
        .get<Type>(url + "/")
        .then((response: AxiosResponse<Type>) => {
          console.log(response);
          setData(response.data);
        })
        .catch((error: Error) => {
          console.error(error.message);
        });
    }

    getData();
  }, [url]);

  return data;
}
