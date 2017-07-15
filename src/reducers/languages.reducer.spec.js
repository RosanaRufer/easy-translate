import {languagesReducer} from './languages.reducer'
import * as deepFreeze from 'deep-freeze';

describe("languagesReducer", function() {
  it("should be a function", function() {
    //Assert
    expect(typeof languagesReducer).toBe('function');
  });

  it('should return initial state when passing initial state as undefined', () => {
    //Arrange
    let initialState = {
      languages: []
    };
    let undefinedState = undefined;
    let action = {};
    deepFreeze.default(action);
    //Act
    let newState = languagesReducer(undefinedState, action);
    //Assert
    expect(newState).toEqual(initialState);
  });  

  //======================================================
  // REDUCER: languagesReducer | ACTION: SET_MESSAGE_VALUE
  //======================================================
  describe("Tests for action SET_MESSAGE_VALUE", () => {
    it('should correctly edit an existing label value for a given language', () => {
    //Arrange
    const ACTION_TYPE = 'SET_MESSAGE_VALUE';
    const OLD_VALUE = 'old value';
    const NEW_VALUE = 'new value';
    const KEY_TO_EDIT = 'KEY_TO_EDIT';
    const LANG_INDEX = 0;
    let initialState = {
      languages: [{
        messages: {
          KEY_TO_EDIT: OLD_VALUE
        }
      }]
    }; 
    let action = {type: ACTION_TYPE, langIndex: LANG_INDEX, key: KEY_TO_EDIT, value: NEW_VALUE};
    deepFreeze.default(initialState);

    //Act
    let newState = languagesReducer(initialState, action);
  
    //Assert
    expect(newState.languages[LANG_INDEX].messages[KEY_TO_EDIT]).toEqual(NEW_VALUE);
    });
  
    it('should correctly add a new label value for a given language', () => {
    //Arrange
    const ACTION_TYPE = 'SET_MESSAGE_VALUE';
    const NEW_VALUE = 'value';
    const NEW_KEY = 'NEW_KEY';
    const LANG_INDEX = 0;
    let initialState = {
      languages: [{
        messages: {}
      }]
    }; 
    let action = {type: ACTION_TYPE, langIndex: LANG_INDEX, key: NEW_KEY, value: NEW_VALUE};
    deepFreeze.default(initialState);

    //Act
    let newState = languagesReducer(initialState, action);
  
    //Assert
    expect(newState.languages[LANG_INDEX].messages[NEW_KEY]).toEqual(NEW_VALUE);
    });  
  });

  //======================================================
  // REDUCER: languagesReducer | ACTION: TOGGLE_SHOW_RAW
  //======================================================
  describe("Tests for action TOGGLE_SHOW_RAW", () => {
    it('', () => {

    });  
  });

  //===========================================================
  // REDUCER: languagesReducer | ACTION: ADD_NEW_EMPTY_LANGUAGE
  //===========================================================
  describe("Tests for action ADD_NEW_EMPTY_LANGUAGE", () => {
    it('', () => {

    });  
  });
  
});

