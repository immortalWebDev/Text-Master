import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Container)(() => ({
  marginTop: "50px",
  padding: "20px",
  background: "#f5f5f5",
  borderRadius: "8px",
  border: '1px solid gray' ,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
}));

const AboutUs = () => {
  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
        About Text Master
      </Typography>
      <Typography variant="body1" paragraph>
        Text Master is a powerful, yet simple-to-use text manipulation tool that
        offers a range of features designed to make managing text easy and efficient.
      </Typography>
      <Typography variant="h6" gutterBottom fontWeight="bold">
        Key Features:
      </Typography>
      <Box component="ul" sx={{ paddingLeft: "20px" }}>
        <li>
          <Typography variant="body1">
            <strong>Convert Case:</strong> Instantly convert your text to UPPERCASE, lowercase, Title Case, camelCase, and PascalCase.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Text Translation:</strong> Translate text into multiple languages with ease.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Download as File:</strong> Save your text as a downloadable file in various formats.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>User-Friendly Interface:</strong> A clean and intuitive design that makes text editing a breeze.
          </Typography>
        </li>
      </Box>
    </StyledContainer>
  );
};

export default AboutUs;
