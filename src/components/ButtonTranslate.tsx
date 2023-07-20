import { Button } from "@mui/material";
import axios from "axios";

type SetResponseData = React.Dispatch<React.SetStateAction<any>> | null;

interface Props {
  prompt: string;
  api_url: string;
  setResponseData: SetResponseData;
}

const ButtonTranslate = ({ prompt, api_url, setResponseData }: Props) => {
  const handlePostRequest = async () => {
    try {
      const response = await axios.post(api_url + "/generate", {
        text: `Translate this sentence ${prompt} into thai and english then reponse with in format {"th":"word after translate into thai" , "en": "word after translate into english"} all both should key:value only don't have choice more`,
      });

      setResponseData?.(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button onClick={handlePostRequest} variant="contained">
        แปลภาษา
      </Button>
    </div>
  );
};

export default ButtonTranslate;
