import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal";
import moment from "moment";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useRef } from "react";

export const NoteView = () => {
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  moment().format("dddd");

  const fileInputRef = useRef();

  const dispatch = useDispatch();

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = moment(date).format("MMMM Do YYYY, h:mm:ss a");

    return newDate;
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return;
    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={30} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Tooltip title="Upload files">
          <IconButton
            onClick={() => fileInputRef.current.click()}
            color="primary"
            disabled={isSaving}
          >
            <UploadOutlined />
          </IconButton>
        </Tooltip>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{ display: "none" }}
        />

        <Button color="secondary" onClick={onSaveNote} disabled={isSaving}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Enter a title"
          label="Title"
          name="title"
          value={title}
          onChange={onInputChange}
          sx={{ border: "none", mb: 1, backgroundColor: "white" }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          name="body"
          value={body}
          onChange={onInputChange}
          minRows={4}
        />
      </Grid>

      <Grid container justifyContent={"end"}>
        <Button onClick={onDelete} sm={{ mt: 2 }} color="error">
          <DeleteOutline />
          Delete
        </Button>
      </Grid>

      {/* Image gallery */}
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};
