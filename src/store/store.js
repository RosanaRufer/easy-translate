import { createStore } from 'redux';


function initializeState(argument) {
    // Create dummy data:
    let english = {
      name: "English (en-GB)",
      messages: { USER_NAME_LABEL: "User name", PASSWORD_LABEL: "Password", LOG_IN_BUTTON: "Log in"},
      showRaw: false
     
    };
    let spanish = {
      name: "Español (es-ES)",
      messages: { USER_NAME_LABEL: "Usuario", PASSWORD_LABEL: "Contraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaseña", LOG_IN_BUTTON: "Entrar"},
      showRaw: false
    }
    let languages = [];
    languages.push(english);
    languages.push(spanish);

    return {languages};
}

function createNewEmptyLanguage(state) {

  let mainLanguage = state.languages[0];
  let objCopy = {...mainLanguage};
  objCopy.name = "New language...";
  objCopy.messages = {...mainLanguage.messages};
  objCopy.showRaw = false;
  Object.keys(objCopy.messages).forEach((key,iterator)=> objCopy.messages[key]="");
  state.languages.push(objCopy);
  return state;
}

function translationReducer(state = initializeState(), action){
	switch (action.type) {
  		case 'SET_MESSAGE_VALUE':
     		state.languages[action.langIndex].messages[action.key] = action.value;
     		return state;
      case 'TOGGLE_SHOW_RAW':
        state.languages[action.langIndex].showRaw = !state.languages[action.langIndex].showRaw;
        return state;   
      case 'ADD_NEW_EMPTY_LANGUAGE':
        let s = createNewEmptyLanguage(state);
        return s;
      case 'CHANGE_LANGUAGE_NAME':
        state.languages[action.langIndex].name = action.newLangName;
        return state;
      case 'REMOVE_LANGUAGE':
        state.languages.splice(action.langIndex, 1);
        return state;                     
  		default:
    		return state;
  }
}

export default createStore(translationReducer);