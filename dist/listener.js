"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramListener = void 0;
var TelegramListener = /** @class */ (function () {
    function TelegramListener(config) {
        this.updateHandlers = [];
        this.updateOffset = 0;
        this.client = config.client;
    }
    TelegramListener.prototype.onUpdate = function (callback) {
        this.updateHandlers.push(callback);
    };
    TelegramListener.prototype.processUpdates = function (update) {
        this.updateHandlers.forEach(function (handle) { return handle(update); });
    };
    TelegramListener.prototype.startPolling = function () {
        var _this = this;
        this.client.getUpdates({
            offset: this.updateOffset,
            timeout: 30,
        })
            .then(function (updates) {
            var lastUpdate = updates[updates.length - 1];
            if (lastUpdate) {
                _this.updateOffset = lastUpdate.update_id + 1;
            }
            _this.startPolling();
            updates.forEach(function (update) { return _this.processUpdates(update); });
        });
    };
    return TelegramListener;
}());
exports.TelegramListener = TelegramListener;
//# sourceMappingURL=listener.js.map