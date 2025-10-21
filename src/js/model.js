
// main model handles data storage, formatting, and message model
export class ChatModel {

    constructor() {
        this.messages = [];
        this.observers = [];
        this.storageKey = 'chat-messages-data';
        this.loadFromStorage();
    }

    addObserver(observer) { }

    removeObserver(observer) { }

    notifyObservers() { }

    // make unique id for each message
    generateMessageId() { }

    /**
     * create new message
     * (string) text, (bool) isUser
     * returns (objcet) message
    */
    createMessage(text, isUser = true) { }

    // get all messages
    getAllMessages() { }

    // gets one message by id
    getMessage(id) { }

    /* update message (for editing)
    * (string) id, (string) newText
    * returns the edited message
    */
    updateMessage(id, newText) {
        return message;
    }

    // delete message (string) id
    deleteMessage(id) { }

    // delete all messages
    deleteAllMessages() { }

    // get message count
    getMessageCount() {
        return this.messages.length;
    }

    // save to local storage
    saveToStorage() { }

    // load from local storage
    loadFromStorage() { }

    // export as json
    exportData() { }

    // import as json
    importData(data) { }
}
