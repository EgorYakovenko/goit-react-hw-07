import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { fetchContacts, deleteContact, addContact } from './contactsOps';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: bulder =>
    bulder
      .addCase(fetchContacts.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        // console.log(state.items);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      }),

  // reducers: {
  //   addContact(state, action) {
  //     state.items.push({
  //       id: nanoid(),
  //       name: action.payload.name,
  //       number: action.payload.number,
  //     });
  //   },
  //   deleteContact(state, action) {
  //     const index = state.items.findIndex(
  //       contact => contact.id === action.payload
  //     );
  //     state.items.splice(index, 1);
  //   },
  // },
});

// export const { addContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items;
