import {post} from '../api/api';

const fetchChatBotResponse = async (inputmessage) => {
  try {
    const response = await post('/chat', {"body": inputmessage});
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!",
      {
        widget: "javascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };

  handleCustomQuestion = async (inputmessage) => {
    const botMessage = await fetchChatBotResponse(inputmessage);
    console.log('botMessage: ', botMessage);
    console.log('botMessage: ', typeof botMessage);
    let message = "Error";
    if(botMessage) message = this.createChatBotMessage(botMessage.content);
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
