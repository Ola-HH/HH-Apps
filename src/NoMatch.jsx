import { DoDisturb } from "@mui/icons-material";
import { Stack, Typography, Button} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const NoMatch = () => {
    const { t } = useTranslation();
    return (
        <Stack textAlign="center" spacing={2}>
            <Typography variant="h1">404</Typography>
            <Typography variang="h1" >
                <DoDisturb sx={{ fontSize: 100 }}/>
            </Typography>
            <Typography variant="h5">{t('404.error')}</Typography>
            <Button component={RouterLink} to="/">{t('404.home')}</Button>
        </Stack>
    )
}

export default NoMatch;
