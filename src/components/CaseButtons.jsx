import React from "react";
import { Stack, Button } from "@mui/material";

const CaseButtons = ({ originalText, setText }) => {
  
  const toUpperCase = () => {
    setText(originalText.toUpperCase());
  };

  const toLowerCase = () => {
    setText(originalText.toLowerCase());
  };

  const toTitleCase = () => {
    setText(
      originalText.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
    );
  };

  const toCamelCase = () => {
    let newText = originalText
      .toLowerCase()
      .split(/[\s-_]+/)
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
    setText(newText);
  };

  const toPascalCase = () => {
    let newText = originalText
      .toLowerCase()
      .split(/[\s-_]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
    setText(newText);
  };

  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <Button
        variant="contained"
        color="primary"
        onClick={toUpperCase}
        sx={{ textTransform: "none" }}
      >
        UPPER CASE
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={toLowerCase}
        sx={{ textTransform: "none" }}
      >
        lower case
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={toTitleCase}
        sx={{ textTransform: "none" }}
      >
        Title Case
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={toCamelCase}
        sx={{ textTransform: "none" }}
      >
        camelCase
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={toPascalCase}
        sx={{ textTransform: "none" }}
      >
        PascalCase
      </Button>
    </Stack>
  );
}

export default CaseButtons;
