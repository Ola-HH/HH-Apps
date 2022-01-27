import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "@mui/material";

function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <Button variant="text" className="ml-auto" onClick={() => handleLogout(instance)}>Logg ut</Button>
    );
}