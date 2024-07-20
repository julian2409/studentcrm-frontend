import { useEffect, useState } from "react";

export default function useFetchData<T>(url: string): T[] | T {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`)
                }

                const json = await response.json();
                console.log(json);
                setData(json);
            } catch(error) {
                if (error instanceof Error) {
                    console.error(error.message);
                } else {
                    console.error(error);
                }
            }
        }
        getData();
    }, [url]);

    return data;
}
