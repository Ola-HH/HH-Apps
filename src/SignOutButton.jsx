import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

export const SignOutButton = () => {
    const { instance } = useMsal();
    const { t } = useTranslation();
    return (
        <Button variant="text" className="ml-auto" onClick={() => handleLogout(instance)}>
            {t('nav.logout')}
        </Button>
    );
}