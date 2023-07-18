import { TextField } from "@mui/material";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText = ({ value, onChange }: Props) => {
  return (
    <>
      <TextField
        sx={{ width: "54%" }}
        label="ป้อนข้อความ"
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputText;
