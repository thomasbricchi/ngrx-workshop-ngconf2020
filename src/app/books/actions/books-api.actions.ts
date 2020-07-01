import { createAction, props } from "@ngrx/store";
import { BookModel, BookRequiredProps } from "src/app/shared/models";


export const loadedSuccess = createAction(
  "[Books API] Books Loaded Success",
  props<{ books: BookModel[] }>()
);

export const createSuccess = createAction(
  "[Books API] Book Created Success",
  props<{ book: BookModel }>()
);

export const updateSuccess = createAction(
  "[Books API] Book Updated Success",
  props<{ book: BookModel }>()
);

export const deleteSuccess = createAction(
  "[Books API] Book Deleted Success",
  props<{ bookId: string }>()
);
