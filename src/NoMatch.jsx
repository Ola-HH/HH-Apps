import { DoDisturb } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";

const NoMatch = () => {
    return (
        <Stack textAlign="center" spacing={2}>
            <Typography variant="h1">404</Typography>
            <Typography variang="h1" >
                <DoDisturb sx={{ fontSize: 100 }}/>
            </Typography>
            <Typography variant="h5">Oisann! Vi finner ikke siden du leter etter...</Typography>
        </Stack>
    )
}

export default NoMatch;
