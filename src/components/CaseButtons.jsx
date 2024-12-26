import React from "react";
import { Stack, Button } from "@mui/material";
import { toTitleCase, toCamelCase, toPascalCase } from "text-trans";

const CaseButtons = ({ originalText, setText }) => {
  const toUpperCase = () => {
    setText(originalText.toUpperCase());
  };

  const toLowerCase = () => {
    setText(originalText.toLowerCase());
  };

  const toTitle = () => {
    setText(toTitleCase(originalText));
  };

  const toCamel = () => {
    setText(toCamelCase(originalText));
  };

  const toPascal = () => {
    setText(toPascalCase(originalText));
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      spacing={2}
      alignItems="center"
    >
      <Button
        variant="contained"
        color="primary"
        onClick={toUpperCase}
        sx={{ textTransform: "none", width: { xs: "100%", sm: "auto" } }}
      >
        UPPER CASE
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={toLowerCase}
        sx={{ textTransform: "none", width: { xs: "100%", sm: "auto" } }}
      >
        lower case
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={toTitle}
        sx={{ textTransform: "none", width: { xs: "100%", sm: "auto" } }}
      >
        Title Case
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={toCamel}
        sx={{ textTransform: "none", width: { xs: "100%", sm: "auto" } }}
      >
        camelCase
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={toPascal}
        sx={{ textTransform: "none", width: { xs: "100%", sm: "auto" } }}
      >
        PascalCase
      </Button>
    </Stack>
  );
};

export default CaseButtons;
