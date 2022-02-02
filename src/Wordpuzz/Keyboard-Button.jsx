import { Box } from "@mui/material";


const KeyboardButton = ({ wd, txt, click, bg }) => (
    <Box onClick={click} width={wd} sx={{ 
        cursor: "pointer", 
        py: "3px", 
        border: "1px solid #2B88D8",
        backgroundColor: bg === 1 ? "#444" : bg === 2 ? "#2B88D8" : bg=== 3 ? "green" : "transparent"
        }}>
        {txt}
    </Box>
  );

  export default KeyboardButton;