import { useState, useEffect } from "react";
import axios from "axios";

type Props = {
  url_api: string;
};

const ApiStatus = ({ url_api }: Props) => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url_api)
        .then((response) => {
          setData(response.data.Hello);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchData();

    const intervalId = setInterval(fetchData, 60000); // Perform the GET request every 1 second

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);
  return <div>สถานะ API : {data}</div>;
};

export default ApiStatus;
