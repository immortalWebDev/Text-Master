import React, { useState } from "react";
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import languages from "../languages";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Translation = (props) => {
  
  const [translateTo, setTranslateTo] = useState("hi");
  const [translateFrom, setTranslateFrom] = useState("en");

  const translateNow = async () => {
    if (!props.text) return;
    const text = props.text.trim();
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${translateFrom}&tl=${translateTo}&dt=t&q=${encodeURI(
      text
    )}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Translation failed');
      }
      const json = await response.json();
      const translatedText = json[0].map((item) => item[0]).join("");
      props.setText(translatedText);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      my={3}
      sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}
    >
      <Box sx={{ minWidth: 180, mb: { xs: 2, md: 0 } }}>
        <FormControl fullWidth variant="outlined">
          <Select
            value={translateFrom}
            onChange={(e) => setTranslateFrom(e.target.value)}
            sx={{
              borderRadius: 2,
              backgroundColor: "#ffffff",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              '&:hover': { backgroundColor: "#f4f4f4" },
            }}
          >
            {languages.map((language) => (
              <MenuItem key={language.code} value={language.code}>
                {language.name} ({language.native})
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 180, mb: { xs: 2, md: 0 } }}>
        <FormControl fullWidth variant="outlined">
          <Select
            value={translateTo}
            onChange={(e) => setTranslateTo(e.target.value)}
            sx={{
              borderRadius: 2,
              backgroundColor: "#ffffff",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              '&:hover': { backgroundColor: "#f4f4f4" },
            }}
          >
            {languages.map((language) => (
              <MenuItem key={language.code} value={language.code}>
                {language.name} ({language.native})
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        onClick={translateNow}
        endIcon={<TranslateIcon />}
        sx={{
          borderRadius: 2,
          px: 5,
          background: "linear-gradient(135deg, #6C63FF, #3F3DFF)",
          color: "#ffffff",
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
          transition: "background 0.3s, transform 0.2s",
          '&:hover': {
            background: "linear-gradient(135deg, #3F3DFF, #6C63FF)",
            transform: "scale(1.05)",
          },
        }}
      >
        Translate
      </Button>
    </Stack>
  );
};

export default Translation;
