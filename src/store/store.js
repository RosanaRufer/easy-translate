import { createStore } from 'redux';


function initializeState(argument) {
    // Create dummy data:
    let english = {
      languageName: "English (en-GB)",
      messages: { USER_NAME_LABEL: "User name", PASSWORD_LABEL: "Password", LOG_IN_BUTTON: "Log in"},
      showRaw: false
     
    };
    let spanish = {
      languageName: "Español (es-ES)",
      messages: { USER_NAME_LABEL: "Usuario", PASSWORD_LABEL: "Contraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaseña", LOG_IN_BUTTON: "Entrar"},
      showRaw: false
    }
    let languageCardSet = [];
    languageCardSet.push(english);
    languageCardSet.push(spanish);

    return {languageCardSet};
}
function translationReducer(state = initializeState(), action){
	switch (action.type) {
  		case 'SET_MESSAGE_VALUE':
     		state.languageCardSet[action.langIndex].messages[action.key] = action.value;
     		return state;
      case 'TOGGLE_SHOW_RAW':
        state.languageCardSet[action.langIndex].showRaw = !state.languageCardSet[action.langIndex].showRaw;
        return state;        
  		default:
    		return state;
  }
}

export default createStore(translationReducer);