import { IconButton, Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const parseOutputJson = (responseData: string) => {
  const jsonSubstring = responseData.match(/Output: (.*)/)?.[1];

  let output;
  if (jsonSubstring) {
    try {
      output = JSON.parse(jsonSubstring);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }

  return output;
};

const ShowResult = () => {
  const [responseData, setResponseData] = useState("");
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://srttranslategptapi--porton35.repl.co/generate-text")
        .then((response) => {
          if (response.data.text !== "") {
            setResponseData(parseOutputJson(response.data.text));
          } else {
            setResponseData("กำลังแปลอยู่รอสักครู่...");
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

  const handleClick = (n: number) => {
    navigator.clipboard
      .writeText(n === 1 ? responseData.th : responseData.en)
      .then(() => {
        console.log("Text copied to clipboard.");
      })
      .catch((error) => {
        console.error("Unable to copy text to clipboard:", error);
      });
  };

  return (
    <>
      <Paper sx={{ p: 2, width: "50%" }}>
        <IconButton
          onClick={() => handleClick(1)}
          aria-label="delete"
          sx={{ float: "right" }}
        >
          <ContentCopyIcon />
        </IconButton>
        <div id="result">
          {responseData.th !== undefined ? responseData.th : responseData}
        </div>
      </Paper>
      <Paper sx={{ p: 2, width: "50%" }}>
        <IconButton
          onClick={() => handleClick(2)}
          aria-label="delete"
          sx={{ float: "right" }}
        >
          <ContentCopyIcon />
        </IconButton>
        <div id="result">
          {responseData.en !== undefined ? responseData.en : responseData}
        </div>
      </Paper>
    </>
  );
};

export default ShowResult;
