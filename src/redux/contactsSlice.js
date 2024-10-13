import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    selectContacts: state => {
      return state.items;
    },
  },
});

export const { addContact, deleteContact, selectContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
