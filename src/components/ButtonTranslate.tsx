import { Button } from "@mui/material";
import axios from "axios";

type Props = {
  prompt: string;
  api_url: string;
  setResponseData: React.Dispatch<React.SetStateAction<any>>;
};

const ButtonTranslate = ({ prompt, api_url, setResponseData }: Props) => {
  const handlePostRequest = async () => {
    try {
      const response = await axios.post(api_url + "/generate", {
        text: `Translate this sentence ${prompt} into english and reponse with format ${prompt} : {word after translate into english}`,
      });

      setResponseData(response.data);
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
