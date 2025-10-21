
// main model handles data storage, formatting, and message model
export class ChatModel {

    constructor() {
        this.messages = [];
        this.observers = [];
        this.storageKey = 'chat-messages-data';
        this.loadFromLocalStorage();
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
    saveToLocalStorage() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.messages));
        } catch (error) {
            console.error('couldnt save to localstorage: ', error);
        }
    }

    // load from local storage
    loadFromLocalStorage() {
        try {
            const storageData = localStorage.getItem(this.storageKey);
            const data = JSON.parse(storageData);

            if (!data) {
                throw new Error('data invalid or empty');
            }
            this.messages = data.messages;

        } catch (error) {
            console.error('couldnt load from localstorage:', error);
            this.messages = [];
        }
    }

    // just return data as string, then controller will handle actual exporting
    exportData() {
        return JSON.stringify(this.messages);
    }

    // import as json
    importData(data) {
        try {
            const data = JSON.parse(jsonData);

            if (!data)
                throw new Error('data empty or invalid');

            this.messages = data.messages;
            this.saveToLocalStorage();
            this.notifyObservers();
            return true;
        } catch (error) {
            console.error('error importing data:', error);
            return false;
        }
    }
}
