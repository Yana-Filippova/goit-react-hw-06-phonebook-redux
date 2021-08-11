import shortid from 'shortid';
import * as actionTypes from './types';

export const addContact = (name, number) => ({
  type: actionTypes.ADD_CONTACT,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE_CONTACT,
  payload: contactId,
});

export const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
