import { createReducer } from '@reduxjs/toolkit';
import { addNumber, removeNumber, addNumberList, removeNumberList } from './actions';

export default createReducer([[], []], {
  [addNumber.type]: (numbers, action) => {
    numbers[action.payload.index].push(action.payload.num)
  },
  [removeNumber.type]: (numbers, action) => {
    numbers[action.payload.index] = numbers[action.payload.index].filter(item => item !== action.payload.num)
  },
  [addNumberList.type]: (numbers, action) => {
    numbers[0] = action.payload.numList[0]
    numbers[1] = action.payload.numList[1]
  },
  [removeNumberList.type]: (numbers) => {
    numbers[0] = numbers[1] = []
  },
})