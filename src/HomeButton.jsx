import { Button } from "@mui/material";

const HomeButton = ({ text }) => (
      <Button className="home-btn" variant="contained" >
        {text}
      </Button>
  );

  export default HomeButton;