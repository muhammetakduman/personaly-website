import React from "react";
import { Box, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const SocialMediaLinks = () => {
    const socialLinks = [
        { name: "LinkedIn", icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/muhammetakduman/" },
        { name: "GitHub", icon: <GitHubIcon />, url: "https://github.com/muhammetakduman" },
        { name: "Instagram", icon: <InstagramIcon />, url: "https://www.instagram.com/mamiakdmn/" },
        { name: "Email", icon: <MailOutlineIcon />, url: "akdumanmuhammet34@gmail.com" },
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
                        borderRadius: "25px",
                        textTransform: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: 2,
                        padding: "0 16px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        transition: "all 0.5s ease",
                        "&:hover": {
                            width: "150px",
                            backgroundColor: "#e0e0e0",
                            color: "#000",
                        },
                    }}
                >
                    {link.icon}
                    <span
                        style={{
                            marginLeft: "8px",
                            fontSize: "16px",
                            fontWeight: "500",
                        }}
                    >
                        {link.name}
                    </span>
                </Button>
            ))}
        </Box>
    );
};

export default SocialMediaLinks;
