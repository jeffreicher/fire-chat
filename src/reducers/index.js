import { combineReducers } from 'redux';
import chat from './chat-reducer';
import { reducer as form } from 'redux-form';
import user from './user_reducer';

export default combineReducers({ chat, form, user });