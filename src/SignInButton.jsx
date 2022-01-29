import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}



export const SignInButton = () => {
    const { t } = useTranslation();
    const { instance } = useMsal();

    return (
        <Button variant="text" className="ml-auto" onClick={() => handleLogin(instance)}>
            {t('nav.login')}
        </Button>
    );
}