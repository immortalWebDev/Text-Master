import React from "react";
import { Stack, Button } from "@mui/material";
import { toTitleCase, toCamelCase,toPascalCase} from "text-trans";

const CaseButtons = ({ originalText, setText }) => {
  
  const toUpperCase = () => {
    setText(originalText.toUpperCase());
  };

  const toLowerCase = () => {
    setText(
      originalText.toLowerCase());
  };

  const toTitle = () => {
    setText(toTitleCase(originalText));
  };
  
  const toCamel = () => {
    setText(toCamelCase(originalText))
  };

  const toPascal = () => {
    setText(toPascalCase(originalText))
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
        onClick={toTitle}
        sx={{ textTransform: "none" }}
      >
        Title Case
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={toCamel}
        sx={{ textTransform: "none" }}
      >
        camelCase
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={toPascal}
        sx={{ textTransform: "none" }}
      >
        PascalCase
      </Button>
    </Stack>
  );
}

export default CaseButtons;
