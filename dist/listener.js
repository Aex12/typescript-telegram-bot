"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramListener = void 0;
class TelegramListener {
    constructor(config) {
        this.updateHandlers = [];
        this.updateOffset = 0;
        this.client = config.client;
    }
    onUpdate(callback) {
        this.updateHandlers.push(callback);
    }
    processUpdates(update) {
        this.updateHandlers.forEach((handle) => handle(update));
    }
    startPolling() {
        (async () => {
            const updates = await this.client.getUpdates({
                offset: this.updateOffset,
                timeout: 30,
            });
            const lastUpdate = updates[updates.length - 1];
            if (lastUpdate) {
                this.updateOffset = lastUpdate.update_id + 1;
            }
            process.nextTick(() => {
                this.startPolling();
            });
            if (updates) {
                updates.forEach((update) => this.processUpdates(update));
            }
        })();
    }
}
exports.TelegramListener = TelegramListener;
