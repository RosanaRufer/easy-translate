export const translationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MESSAGE_VALUE':
      return state.languages[action.langIndex].messages[action.key] = action.value;
    default:
      return state;
  }
};

function setMessageValue(state, langIndex, key, value){
    let newState = {...state};
    return newState;
}