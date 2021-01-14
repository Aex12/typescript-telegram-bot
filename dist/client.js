"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var got_1 = __importDefault(require("got"));
var TelegramBot = /** @class */ (function () {
    function TelegramBot(config) {
        this.BASE_URL = 'https://api.telegram.org/';
        this.timeout = 5000;
        this.token = config.token;
        if (config.baseUrl) {
            this.BASE_URL = config.baseUrl;
        }
        if (config.timeout) {
            this.timeout = config.timeout;
        }
        this.client = got_1.default.extend({
            prefixUrl: this.BASE_URL + "bot" + this.token + "/",
            timeout: this.timeout,
            responseType: 'json',
            headers: {
                'user-agent': 'TypescriptTelegramBot/0.0.1',
            },
        });
    }
    TelegramBot.prototype.request = function (endpoint, params) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.post(endpoint, { json: params }).json()];
                    case 1:
                        body = _a.sent();
                        if (body.ok) {
                            return [2 /*return*/, body.result];
                        }
                        throw new Error(body.description);
                }
            });
        });
    };
    TelegramBot.prototype.getUpdates = function (params) {
        return this.request('getUpdates', params);
    };
    TelegramBot.prototype.setWebhook = function (params) {
        return this.request('setWebHook', params);
    };
    TelegramBot.prototype.deleteWebhook = function (params) {
        return this.request('deleteWebHook', params);
    };
    TelegramBot.prototype.getWebhookInfo = function () {
        return this.request('deleteWebHook');
    };
    TelegramBot.prototype.getMe = function () {
        return this.request('getMe');
    };
    TelegramBot.prototype.logOut = function () {
        return this.request('logOut');
    };
    TelegramBot.prototype.close = function () {
        return this.request('logOut');
    };
    TelegramBot.prototype.sendMessage = function (params) {
        return this.request('sendMessage', params);
    };
    TelegramBot.prototype.forwardMessage = function (params) {
        return this.request('forwardMessage', params);
    };
    TelegramBot.prototype.copyMessage = function (params) {
        return this.request('copyMessage', params);
    };
    TelegramBot.prototype.sendPhoto = function (params) {
        return this.request('sendPhoto', params);
    };
    TelegramBot.prototype.sendAudio = function (params) {
        return this.request('sendAudio', params);
    };
    TelegramBot.prototype.sendDocument = function (params) {
        return this.request('sendDocument', params);
    };
    TelegramBot.prototype.sendVideo = function (params) {
        return this.request('sendVideo', params);
    };
    TelegramBot.prototype.sendAnimation = function (params) {
        return this.request('sendAnimation', params);
    };
    TelegramBot.prototype.sendVoice = function (params) {
        return this.request('sendVoice', params);
    };
    TelegramBot.prototype.sendVideoNote = function (params) {
        return this.request('sendVideoNote', params);
    };
    TelegramBot.prototype.sendMediaGroup = function (params) {
        return this.request('sendMediaGroup', params);
    };
    TelegramBot.prototype.sendLocation = function (params) {
        return this.request('sendLocation', params);
    };
    TelegramBot.prototype.editMessageLiveLocation = function (params) {
        return this.request('editMessageLiveLocation', params);
    };
    TelegramBot.prototype.stopMessageLiveLocation = function (params) {
        return this.request('stopMessageLiveLocation', params);
    };
    TelegramBot.prototype.sendVenue = function (params) {
        return this.request('sendVenue', params);
    };
    TelegramBot.prototype.sendContact = function (params) {
        return this.request('sendContact', params);
    };
    TelegramBot.prototype.sendPoll = function (params) {
        return this.request('sendPoll', params);
    };
    TelegramBot.prototype.sendDice = function (params) {
        return this.request('sendDice', params);
    };
    TelegramBot.prototype.sendChatAction = function (params) {
        return this.request('sendChatAction', params);
    };
    TelegramBot.prototype.getUserProfilePhotos = function (params) {
        return this.request('getUserProfilePhotos', params);
    };
    TelegramBot.prototype.getFile = function (params) {
        return this.request('getFile', params);
    };
    TelegramBot.prototype.kickChatMember = function (params) {
        return this.request('kickChatMember', params);
    };
    TelegramBot.prototype.unbanChatMember = function (params) {
        return this.request('unbanChatMember', params);
    };
    TelegramBot.prototype.restrictChatMember = function (params) {
        return this.request('restrictChatMember', params);
    };
    TelegramBot.prototype.promoteChatMember = function (params) {
        return this.request('promoteChatMember', params);
    };
    TelegramBot.prototype.setChatAdministratorCustomTitle = function (params) {
        return this.request('setChatAdministratorCustomTitle', params);
    };
    TelegramBot.prototype.setChatPermissions = function (params) {
        return this.request('setChatPermissions', params);
    };
    TelegramBot.prototype.exportChatInviteLink = function (params) {
        return this.request('exportChatInviteLink', params);
    };
    TelegramBot.prototype.setChatPhoto = function (params) {
        return this.request('setChatPhoto', params);
    };
    TelegramBot.prototype.deleteChatPhoto = function (params) {
        return this.request('deleteChatPhoto', params);
    };
    TelegramBot.prototype.setChatTitle = function (params) {
        return this.request('setChatTitle', params);
    };
    TelegramBot.prototype.setChatDescription = function (params) {
        return this.request('setChatDescription', params);
    };
    TelegramBot.prototype.pinChatMessage = function (params) {
        return this.request('pinChatMessage', params);
    };
    TelegramBot.prototype.unpinChatMessage = function (params) {
        return this.request('unpinChatMessage', params);
    };
    TelegramBot.prototype.unpinAllChatMessages = function (params) {
        return this.request('unpinAllChatMessages', params);
    };
    TelegramBot.prototype.leaveChat = function (params) {
        return this.request('leaveChat', params);
    };
    TelegramBot.prototype.getChat = function (params) {
        return this.request('getChat', params);
    };
    TelegramBot.prototype.getChatAdministrators = function (params) {
        return this.request('getChatAdministrators', params);
    };
    TelegramBot.prototype.getChatMembersCount = function (params) {
        return this.request('getChatMembersCount', params);
    };
    TelegramBot.prototype.getChatMember = function (params) {
        return this.request('getChatMember', params);
    };
    TelegramBot.prototype.setChatStickerSet = function (params) {
        return this.request('setChatStickerSet', params);
    };
    TelegramBot.prototype.deleteChatStickerSet = function (params) {
        return this.request('deleteChatStickerSet', params);
    };
    TelegramBot.prototype.answerCallbackQuery = function (params) {
        return this.request('answerCallbackQuery', params);
    };
    TelegramBot.prototype.setMyCommands = function (params) {
        return this.request('setMyCommands', params);
    };
    TelegramBot.prototype.getMyCommands = function () {
        return this.request('getMyCommands');
    };
    TelegramBot.prototype.editMessageText = function (params) {
        return this.request('editMessageText', params);
    };
    TelegramBot.prototype.editMessageCaption = function (params) {
        return this.request('editMessageCaption', params);
    };
    TelegramBot.prototype.editMessageMedia = function (params) {
        return this.request('editMessageMedia', params);
    };
    TelegramBot.prototype.editMessageReplyMarkup = function (params) {
        return this.request('editMessageReplyMarkup', params);
    };
    TelegramBot.prototype.stopPoll = function (params) {
        return this.request('stopPoll', params);
    };
    TelegramBot.prototype.deleteMessage = function (params) {
        return this.request('deleteMessage', params);
    };
    TelegramBot.prototype.sendSticker = function (params) {
        return this.request('sendSticker', params);
    };
    TelegramBot.prototype.getStickerSet = function (params) {
        return this.request('getStickerSet', params);
    };
    TelegramBot.prototype.uploadStickerFile = function (params) {
        return this.request('uploadStickerFile', params);
    };
    TelegramBot.prototype.createNewStickerSet = function (params) {
        return this.request('createNewStickerSet', params);
    };
    TelegramBot.prototype.addStickerToSet = function (params) {
        return this.request('addStickerToSet', params);
    };
    TelegramBot.prototype.setStickerPositionInSet = function (params) {
        return this.request('setStickerPositionInSet', params);
    };
    TelegramBot.prototype.deleteStickerFromSet = function (params) {
        return this.request('deleteStickerFromSet', params);
    };
    TelegramBot.prototype.setStickerSetThumb = function (params) {
        return this.request('setStickerSetThumb', params);
    };
    TelegramBot.prototype.answerInlineQuery = function (params) {
        return this.request('answerInlineQuery', params);
    };
    TelegramBot.prototype.sendInvoice = function (params) {
        return this.request('sendInvoice', params);
    };
    TelegramBot.prototype.answerShippingQuery = function (params) {
        return this.request('answerShippingQuery', params);
    };
    TelegramBot.prototype.answerPreCheckoutQuery = function (params) {
        return this.request('answerPreCheckoutQuery', params);
    };
    TelegramBot.prototype.setPassportDataErrors = function (params) {
        return this.request('setPassportDataErrors', params);
    };
    TelegramBot.prototype.sendGame = function (params) {
        return this.request('sendGame', params);
    };
    TelegramBot.prototype.setGameScore = function (params) {
        return this.request('setGameScore', params);
    };
    TelegramBot.prototype.getGameHighScores = function (params) {
        return this.request('getGameHighScores', params);
    };
    return TelegramBot;
}());
exports.default = TelegramBot;
//# sourceMappingURL=client.js.map