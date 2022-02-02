import { Box } from "@mui/material";

const LetterContainer = ({ txt, click, bg, brd }) => (
      <Box onClick={click} sx={{
        width: 50, 
        height: 50, 
        borderRadius: 1, 
        border: brd === 1 ? "3px solid #2b88d8" : "1px solid #2b88d8", 
        fontSize: 32, 
        backgroundColor: bg === 0 ? "transparent" : bg === 1 ? "#444" : bg === 2 ? "#2B88D8" : "green"
      }}>
        {txt}
      </Box>
);

  export default LetterContainer;