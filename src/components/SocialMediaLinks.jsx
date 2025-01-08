import React from "react";
import { Box, Button } from "@mui/material";
import dynamic from "vite-plugin-dynamic-import";

const LinkedInIcon = dynamic(() => import("@mui/icons-material/LinkedIn"));
const GitHubIcon = dynamic(() => import("@mui/icons-material/GitHub"));
const InstagramIcon = dynamic(() => import("@mui/icons-material/Instagram"));
const MailOutlineIcon = dynamic(() => import("@mui/icons-material/MailOutline"));

const SocialMediaLinks = () => {
    const socialLinks = [
        { name: "LinkedIn", icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/muhammetakduman/" },
        { name: "GitHub", icon: <GitHubIcon />, url: "https://github.com/muhammetakduman" },
        { name: "Instagram", icon: <InstagramIcon />, url: "https://www.instagram.com/mamiakdmn/" },
        { name: "Email", icon: <MailOutlineIcon />, url: "mailto:akdumanmuhammet34@gmail.com" },
    ];

    return (
        <Box
            sx={{
                position: "fixed",
                left: 0,
                top: "20%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: 1,
            }}
        >
            {socialLinks.map((link) => (
                <Button
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    sx={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#f5f5f5",
                        color: "#333",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {link.icon}
                </Button>
            ))}
        </Box>
    );
};

export default SocialMediaLinks;
