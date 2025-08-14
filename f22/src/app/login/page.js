"use client";
import React, { useContext, useState } from "react";
import {
    Container,
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    Snackbar
} from "@mui/material";
import { useRouter } from "next/navigation";
import { AuthContext } from "../authcontext";
import CustomSnackbar from "../component/snackbar"

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const router = useRouter();
    const [open, setOpen] = React.useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData?.email === process.env.NEXT_PUBLIC_EMAIL && formData?.password === process.env.NEXT_PUBLIC_PASSWORD) {
            localStorage.setItem("authcredentials", JSON.stringify({
                email: formData?.email,
                password: formData?.password
            }))
            login(formData.email, formData.password);
            router.push("/dashboard")
        }
        else { setOpen(true) }

    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, marginTop: 8 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>

                <Box
                    component="form"
                    method="POST"
                    onSubmit={handleSubmit}
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                    <TextField
                        name="email"
                        type="email"
                        variant="outlined"
                        placeholder="email"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        name="password"
                        type="password"
                        variant="outlined"
                        placeholder="email"
                        fullWidth
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        Login
                    </Button>
                </Box>
            </Paper>
           <CustomSnackbar data={"! Invalid Credentials"} open={open} setOpen={setOpen}></CustomSnackbar>
        </Container>

    );
}


export default LoginForm;