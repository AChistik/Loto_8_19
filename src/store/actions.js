import { createAction } from "@reduxjs/toolkit";

export const addNumber = createAction("ADD_NUMBER");
export const removeNumber = createAction("REMOVE_NUMBER");
export const addNumberList = createAction("ADD_NUMBER_LIST");
export const removeNumberList = createAction("REMOVE_NUMBER_LIST");