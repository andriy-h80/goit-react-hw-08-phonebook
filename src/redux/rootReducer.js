import { combineReducers } from 'redux';

import {contactsReducer} from './contacts/contactsSlice';
import {filterReducer} from './contacts/filterSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
