import { IconButton, Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const ShowResult = () => {
  const [responseData, setResponseData] = useState("");
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://srttranslategptapi--porton35.repl.co/generate-text")
        .then((response) => {
          if (response.data.text !== "") {
            setResponseData(response.data.text);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchData();

    const intervalId = setInterval(fetchData, 1000); // Perform the GET request every 1 second

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);
  return (
    <>
      <Paper sx={{ p: 2, width: "80%" }}>
        <IconButton aria-label="delete" sx={{ float: "right" }}>
          <ContentCopyIcon />
        </IconButton>
        <div>{responseData}</div>
      </Paper>
    </>
  );
};

export default ShowResult;
