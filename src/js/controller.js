import { ChatModel } from './model.js';
import { ChatView } from './view.js';
import { getBotResponse } from './eliza.js';

export class ChatController {
    constructor() {
        this.model = new ChatModel();
        this.view = new ChatView(this);

        this.view.update(messages);
        // sat up view at first with current messages
        this.view.update(this.model.messages);
    }

    handleSendMessage() { }

    handleEditMessage(messageId) { }

    handleSaveEdit(messageId, newText) { }

    // Handle canceling edit
    handleCancelEdit(messageId) {
        this.view.editingMessageId = null;
        this.view.update(this.model.messages);
    }



    handleExport() {
        const data = this.model.exportData();
        const filename = `export-${new Date().toISOString()}.json`;

        this.view.downloadFile(data, filename);
    }

    handleImport() {
        this.view.fileInput.click();
    }

    handleFileSelected(file) { }

    // Handle deleting a message
    handleDeleteMessage(messageId) {
        const message = this.model.getMessage(messageId);
        if (!message) {
            this.view.showError('error deleting message');
            return;
        }

        this.view.showConfirmationAlert(
            'are you sure you want to delete?',
            () => { }, // do nothign if canceled
            () => {
                const deleted = this.model.deleteMessage(messageId);
                if (deleted)
                    this.view.showSuccess('message deleted');
                else
                    this.view.showError('error deleting message');
            }
        );
    }

    // clear all messages
    handleClear() {
        this.view.showConfirmationAlert(
            `are you sure you want to delete all ${this.model.getMessageCount()} messages? no backsies!`,
            () => { },
            () => {
                this.model.deleteAllMessages();
                this.view.update(this.model.messages);
            }
        );
    }
}
