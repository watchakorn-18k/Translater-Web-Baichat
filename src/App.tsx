import Stack from "@mui/material/Stack";
import ButtonTranslate from "./components/ButtonTranslate";

import { useState } from "react";
import ApiStatus from "./components/ApiStatus";
import ShowResult from "./components/ShowResult";
import InputText from "./components/InputText";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [apiStatus] = useState("https://srttranslategptapi--porton35.repl.co");
  const [setResponseData] = useState(null);
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <ApiStatus url_api={apiStatus} />
        <h1>Translate with GPT</h1>
        <InputText
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ButtonTranslate
          prompt={inputValue}
          api_url={apiStatus}
          setResponseData={setResponseData}
        />
        <ShowResult />
      </Stack>
    </>
  );
}

export default App;
