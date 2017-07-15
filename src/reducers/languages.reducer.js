export const languagesReducer = (state=initialState(), action) => {
  switch (action.type) {
    case 'SET_MESSAGE_VALUE':
      return setMessageValue(state, action);
    default:
      return state;
  }
};

function initialState(){
  return {
    languages: []
  }
}

function setMessageValue(state, action) {
    let langIndex = action.langIndex;
    let key = action.key;
    let newValue = action.value;

    let newState = copyState(state);
    newState.languages[langIndex].messages[key] = newValue;

    return newState;
}

function copyState(state){
  let newState = initialState();
  state.languages.forEach((language) => {
    newState.languages.push(copyLanguage(language));
  });
  return newState;
}

function copyLanguage(language){
  return {
    ...language,
    messages: {...language.messages}
  }
}

