"use client";

import { Box, Typography, Paper, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authcontext";
import CustomSnackbar from "../component/snackbar";
import ErrorIcon from "../assets";

const Dashboard = () => {
    const router = useRouter();
    const { auth, logout } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        router.push("/");
        localStorage.removeItem("authcredentials")
    };

    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem("authcredentials") || "{}");
        if (authData?.email !== process.env.NEXT_PUBLIC_EMAIL || authData?.password !== process.env.NEXT_PUBLIC_PASSWORD || !auth) {
            setOpen(true)
            handleLogout()
        }
    }, [])


    return (
        <>
            {auth ? <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "background.default",
                    p: 2,
                }}
            >
                <Paper
                    elevation={4}
                    sx={{
                        p: 4,
                        borderRadius: 3,
                        maxWidth: 500,
                        width: "100%",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Welcome to Your Dashboard 🎉
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        You’re now logged in. From here, you can manage your profile, view
                        stats, and explore more features.
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                        <Button
                            variant="outlined"
                            color="error"
                            size="large"
                            sx={{ borderRadius: 2 }}
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </Box>
                </Paper>
            </Box> :
                <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Loading.....</Typography>}
            <CustomSnackbar data={
                <span style={{ display: "flex", alignItems: "center" }}>
                    <ErrorIcon/> Unauthorized Access
                </span>
            } open={open}></CustomSnackbar>

        </>

    );
};

export default Dashboard;
