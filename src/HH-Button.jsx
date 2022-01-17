import { Button } from "@mui/material";

const HHButton = ({ text, click, colorType, icon }) => (
      <Button startIcon={icon} variant="outlined" color={colorType} onClick={click} sx={{ border: 1}}>
        {text}
      </Button>
  );

  export default HHButton;