
// handles all UI and DOM manipulation
export class ChatView {
    constructor(c) {
        this.controller = c;

        // get all ui components by id
        this.chatContainer = document.getElementById('chat-container');
        this.messageInput = document.getElementById('message-input');
        this.chatForm = document.getElementById('chat-area');
        this.messageCount = document.getElementById('message-count');
        this.lastSaved = document.getElementById('last-saved-time');
        this.fileInput = document.getElementById('file-input');
        this.emptyState = document.getElementById('empty-state');

        this.sendButton = document.getElementById('send-button');
        this.exportbutton = document.getElementById('export-button');
        this.importbutton = document.getElementById('import-button');
        this.clearbutton = document.getElementById('clear-button');

        this.setupEventListeners();
    }

    setupEventListeners() { }

    // update messages (called whenever changed)
    update(messages) {
        this.updateMessages(messages);
        this.updateMessageStats(messages);
        this.updateEmptyState(messages);
    }

    // render all messages (calls createMessageElement for each message)
    updateMessages(messages) { }

    // create message in dom
    createMessageElement(message) { }

    // update stats for messages
    updateMessageStats(messages) { }

    // update empty state to disappear when theres not 0 messsages
    updateEmptyState(messages) {
        if (messages.length === 0)
            this.emptyState.style.display = 'block';
        else
            this.emptyState.style.display = 'none';
    }


    // get input text
    getInputText() { }

    // clear input text
    clearInput() { }

    // set input text
    setInputText(text) { }

    // download file JSON
    downloadFile(data, filename) { }

    // show confirmation alert with option cancel or accept
    showConfirmationAlert(message, onCancel, onConfirm) { }

    // show either error or success (we'll probably want to call alerts from other modules, but only view.js should handle this)
    showError(message) {
        alert(`error: ${message}`);
    }

    showSuccess(message) {
        alert(`success: ${message}`);
    }

}
