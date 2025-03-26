import React, { useState } from "react";
import {
  Stack,
  Box,
  TextField,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";
import Swal from "sweetalert2";
import Translation from "./Translation";
import CaseButtons from "./CaseButtons";
import { wordCount } from "text-trans";

const Home = () => {
  const [text, setText] = useState("");
  const [originalText, setOriginalText] = useState("");

  const handleOnChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setOriginalText(newText);
  };

  const createTextFile = () => {
    if (text.trim().length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your input field is empty!",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      return;
    }
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "text-utilities.txt";
    link.href = fileUrl;
    link.click();
  };

  // const wordCount = (word) => {
  //   return word.split(/\s+/).filter((n) => n !== "").length;
  // };

  return (
    <Stack direction="column" alignItems="center" gap={4} marginY={5}>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          label="Type your text here"
          multiline
          rows={5}
          variant="outlined"
          sx={{
            width: { xs: "90vw", sm: "85vw", md: "75vw", lg: "65vw" },
            backgroundColor: "#f9f9f9",
            borderRadius: 2,
          }}
          value={text}
          spellCheck="false"
          onChange={handleOnChange}
        />
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "60vw" }}
      >
        <Typography variant="body1">
          <strong>Total Characters:</strong> {text.length}
        </Typography>
        <Typography variant="body1">
          <strong>Total Words:</strong> {wordCount(text)}
        </Typography>
      </Stack>


      <div style={{marginTop: '-10px'}}>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        alignItems="center"
      >
        <Tooltip title="Download as Text File" placement="top">
          <IconButton
            onClick={createTextFile}
            color="primary"
            size="large"
            sx={{
              backgroundColor: "#e3f2fd",
              "&:hover": { backgroundColor: "#bbdefb" },
            }}
          >
            <DownloadIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Copy to Clipboard" placement="top">
          <IconButton
            onClick={() => navigator.clipboard.writeText(text)}
            color="primary"
            size="large"
            sx={{
              backgroundColor: "#e3f2fd",
              "&:hover": { backgroundColor: "#bbdefb" },
            }}
          >
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Clear Text" placement="top">
          <IconButton
            onClick={() => {
              setText("");
              setOriginalText("");
            }}
            color="secondary"
            size="large"
            sx={{
              backgroundColor: "#ffcdd2",
              "&:hover": { backgroundColor: "#ef9a9a" },
            }}
          >
            <ClearIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      </div>

      <CaseButtons originalText={originalText} setText={setText} />

      <div style={{ marginTop: "-35px" }}>
        <Translation text={text} setText={setText} />
      </div>
    </Stack>
    
  );
};

export default Home;
