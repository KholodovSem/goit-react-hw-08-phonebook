import {  createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './filter-action';

export const filterReducer = createReducer('', {
[changeFilter] : (state, {payload}) => payload
})

