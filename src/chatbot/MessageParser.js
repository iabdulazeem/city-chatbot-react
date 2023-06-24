class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log("input message: ", message);
    const lowercase = message.toLowerCase();

    // Defualt action provider
    this.actionProvider.handleCustomQuestion(lowercase);

    // if (lowercase.includes("hello")) {
    //   this.actionProvider.greet();
    // }

    // if (lowercase.includes("javascript") || lowercase.includes("js")) {
    //   this.actionProvider.handleJavascriptQuiz();
    // }
  }
}

export default MessageParser;
