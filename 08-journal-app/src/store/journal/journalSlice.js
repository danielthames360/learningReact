import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    // active: {
    //   id: "abc123",
    //   title: "",
    //   body: "",
    //   date: 123456,
    //   imageUrls: [], //https://foto1.jpg
    // },
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, { payload }) => {
      state.notes.push(payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    noteUpdated: (state, { payload }) => {
      state.isSaving = false;
      state.notes = state.notes.map((item) => {
        return item.id === payload.id ? payload : item;
      });

      state.messageSaved = `${payload.title}, actualizada correctamente`;
    },
    setPhotosToActiveNote: (state, { payload }) => {
      state.active.imageUrls = [...state.active.imageUrls, ...payload];
      state.isSaving = false;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = [];
      state.active = null;
    },
    unsetActiveNote: (state) => {
      state.active = null;
    },
    deleteNoteById: (state, { payload }) => {
      state.notes = state.notes.filter((note) => note.id !== payload);
      state.active = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNoteById,
  noteUpdated,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  unsetActiveNote,
} = journalSlice.actions;
