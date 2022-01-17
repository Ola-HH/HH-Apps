import { Button } from "@mui/material";

const LetterButton = ({ text, click }) => (
      <Button onClick={click} variant="outlined" sx={{ fontSize: 10, m: 0.2, width: "20px", height: 1/10, cursor: "pointer", p: 0.5}}>
        {text}
      </Button>
  );

  export default LetterButton;