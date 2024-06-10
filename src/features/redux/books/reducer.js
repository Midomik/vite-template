import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addFromLibrary,
  addFromRecomend,
  deleteOwnBook,
  deleteReading,
  finishReading,
  getBookById,
  getOwnBooks,
  getRecomendedBooks,
  startReading,
} from './operations.js';

const initialState = {
  books: [],
  pageData: null,
  bookData: null,
  modalData: null,
  modalVariants: {
    isOpenAddToLibraryModal: false,
    isOpenStartReadingModal: false,
    isOpenSuccAddModal: false,
    isOpenEndBookModal: false,
    isOpenBurgerMenu: false,
  },
  isLoading: false,
  error: null,
  ownBooks: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setIsOpenAddToLibraryModal: (state, { payload }) => {
      document.body.classList.add('add-overflov');
      state.modalVariants.isOpenAddToLibraryModal = true;
      state.modalData = payload;
    },
    setIsOpenStartReadingModal: (state, { payload }) => {
      document.body.classList.add('add-overflov');
      state.isOpenModal = !state.isOpenModal;
      state.modalVariants.isOpenStartReadingModal =
        !state.modalVariants.isOpenStartReadingModal;
      state.modalData = payload;
    },
    setIsOpenBurgerMenu: (state) => {
      document.body.classList.add('add-overflov');
      state.modalVariants.isOpenBurgerMenu = true;
    },
    closeModals: (state) => {
      document.body.classList.remove('add-overflov');
      state.modalVariants.isOpenSuccAddModal = false;
      state.modalVariants.isOpenAddToLibraryModal = false;
      state.modalVariants.isOpenStartReadingModal = false;
      state.modalVariants.isOpenEndBookModal = false;
      state.modalVariants.isOpenBurgerMenu = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRecomendedBooks.fulfilled, (state, { payload }) => {
        state.pageData = payload;
        state.books = payload.results;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addFromRecomend.fulfilled, (state, { payload }) => {
        document.body.classList.add('add-overflov');
        state.modalVariants.isOpenSuccAddModal = true;
        state.ownBooks.push(payload);
        

        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOwnBooks.fulfilled, (state, { payload }) => {
        

        state.ownBooks = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteOwnBook.fulfilled, (state, { payload }) => {
        state.ownBooks = state.ownBooks.filter((book) => book._id !== payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addFromLibrary.fulfilled, (state, { payload }) => {
        document.body.classList.add('add-overflov');
        state.ownBooks.push(payload);
        state.modalVariants.isOpenSuccAddModal = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBookById.fulfilled, (state, { payload }) => {
        state.bookData = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(startReading.fulfilled, (state, { payload }) => {
        state.bookData = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(finishReading.fulfilled, (state, { payload }) => {
        state.modalVariants.isOpenEndBookModal = payload.status === 'done';

        state.bookData = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteReading.fulfilled, (state, { payload }) => {
        state.bookData = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          getRecomendedBooks.pending,
          addFromRecomend.pending,
          getOwnBooks.pending,
          deleteOwnBook.pending,
          addFromLibrary.pending,
          getBookById.pending,
          startReading.pending,
          finishReading.pending,
          deleteReading.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(
          getRecomendedBooks.rejected,
          addFromRecomend.rejected,
          getOwnBooks.rejected,
          deleteOwnBook.rejected,
          addFromLibrary.rejected,
          getBookById.rejected,
          startReading.rejected,
          finishReading.rejected,
          deleteReading.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const booksReducer = booksSlice.reducer;
export const {
  setIsOpenAddToLibraryModal,
  closeModals,
  setIsOpenStartReadingModal,
  setIsOpenBurgerMenu,
} = booksSlice.actions;
