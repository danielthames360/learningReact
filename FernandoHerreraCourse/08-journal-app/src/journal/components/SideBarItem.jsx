import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ title, body, date, id, imageUrls = [] }) => {
  const newTitle = useMemo(() => {
    return title.length > 17 ? title.slice(0, 17) + "..." : title;
  }, [title]);

  const newBody = useMemo(() => {
    return body.length > 17 ? body.slice(0, 17) + "..." : body;
  }, [body]);

  const dispatch = useDispatch();

  const onSelectedNote = () => {
    dispatch(setActiveNote({ title, body, date, id, imageUrls }));
  };

  return (
    <ListItem key={id} disablePadding onClick={onSelectedNote}>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container direction={"column"}>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
