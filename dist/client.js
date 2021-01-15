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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramClient = void 0;
var undici_1 = require("undici");
var TelegramClient = /** @class */ (function () {
    function TelegramClient(config) {
        this.BASE_URL = 'https://api.telegram.org';
        this.token = config.token;
        if (config.baseUrl) {
            this.BASE_URL = config.baseUrl;
        }
        this.httpClient = new undici_1.Client(this.BASE_URL);
    }
    TelegramClient.prototype.request = function (endpoint, params) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var query, queryString, _b, statusCode, body, data, body_1, body_1_1, chunk, e_1_1, result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log({ endpoint: endpoint, params: params });
                        query = new URLSearchParams(params);
                        queryString = query.toString();
                        return [4 /*yield*/, this.httpClient
                                .request({
                                path: "/bot" + this.token + "/" + endpoint + "?" + queryString,
                                method: 'GET',
                            })];
                    case 1:
                        _b = _c.sent(), statusCode = _b.statusCode, body = _b.body;
                        data = '';
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 7, 8, 13]);
                        body_1 = __asyncValues(body);
                        _c.label = 3;
                    case 3: return [4 /*yield*/, body_1.next()];
                    case 4:
                        if (!(body_1_1 = _c.sent(), !body_1_1.done)) return [3 /*break*/, 6];
                        chunk = body_1_1.value;
                        data += chunk;
                        _c.label = 5;
                    case 5: return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_1_1 = _c.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _c.trys.push([8, , 11, 12]);
                        if (!(body_1_1 && !body_1_1.done && (_a = body_1.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _a.call(body_1)];
                    case 9:
                        _c.sent();
                        _c.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13:
                        if (statusCode !== 200) {
                            console.error(data);
                            throw new Error('status code is not 200');
                        }
                        result = JSON.parse(data);
                        if (result.ok) {
                            return [2 /*return*/, result.result];
                        }
                        else {
                            throw new Error(result.description);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TelegramClient.prototype.getUpdates = function (params) {
        return this.request('getUpdates', params);
    };
    TelegramClient.prototype.setWebhook = function (params) {
        return this.request('setWebHook', params);
    };
    TelegramClient.prototype.deleteWebhook = function (params) {
        return this.request('deleteWebHook', params);
    };
    TelegramClient.prototype.getWebhookInfo = function () {
        return this.request('deleteWebHook');
    };
    TelegramClient.prototype.getMe = function () {
        return this.request('getMe');
    };
    TelegramClient.prototype.logOut = function () {
        return this.request('logOut');
    };
    TelegramClient.prototype.close = function () {
        return this.request('logOut');
    };
    TelegramClient.prototype.sendMessage = function (params) {
        return this.request('sendMessage', params);
    };
    TelegramClient.prototype.forwardMessage = function (params) {
        return this.request('forwardMessage', params);
    };
    TelegramClient.prototype.copyMessage = function (params) {
        return this.request('copyMessage', params);
    };
    TelegramClient.prototype.sendPhoto = function (params) {
        return this.request('sendPhoto', params);
    };
    TelegramClient.prototype.sendAudio = function (params) {
        return this.request('sendAudio', params);
    };
    TelegramClient.prototype.sendDocument = function (params) {
        return this.request('sendDocument', params);
    };
    TelegramClient.prototype.sendVideo = function (params) {
        return this.request('sendVideo', params);
    };
    TelegramClient.prototype.sendAnimation = function (params) {
        return this.request('sendAnimation', params);
    };
    TelegramClient.prototype.sendVoice = function (params) {
        return this.request('sendVoice', params);
    };
    TelegramClient.prototype.sendVideoNote = function (params) {
        return this.request('sendVideoNote', params);
    };
    TelegramClient.prototype.sendMediaGroup = function (params) {
        return this.request('sendMediaGroup', params);
    };
    TelegramClient.prototype.sendLocation = function (params) {
        return this.request('sendLocation', params);
    };
    TelegramClient.prototype.editMessageLiveLocation = function (params) {
        return this.request('editMessageLiveLocation', params);
    };
    TelegramClient.prototype.stopMessageLiveLocation = function (params) {
        return this.request('stopMessageLiveLocation', params);
    };
    TelegramClient.prototype.sendVenue = function (params) {
        return this.request('sendVenue', params);
    };
    TelegramClient.prototype.sendContact = function (params) {
        return this.request('sendContact', params);
    };
    TelegramClient.prototype.sendPoll = function (params) {
        return this.request('sendPoll', params);
    };
    TelegramClient.prototype.sendDice = function (params) {
        return this.request('sendDice', params);
    };
    TelegramClient.prototype.sendChatAction = function (params) {
        return this.request('sendChatAction', params);
    };
    TelegramClient.prototype.getUserProfilePhotos = function (params) {
        return this.request('getUserProfilePhotos', params);
    };
    TelegramClient.prototype.getFile = function (params) {
        return this.request('getFile', params);
    };
    TelegramClient.prototype.kickChatMember = function (params) {
        return this.request('kickChatMember', params);
    };
    TelegramClient.prototype.unbanChatMember = function (params) {
        return this.request('unbanChatMember', params);
    };
    TelegramClient.prototype.restrictChatMember = function (params) {
        return this.request('restrictChatMember', params);
    };
    TelegramClient.prototype.promoteChatMember = function (params) {
        return this.request('promoteChatMember', params);
    };
    TelegramClient.prototype.setChatAdministratorCustomTitle = function (params) {
        return this.request('setChatAdministratorCustomTitle', params);
    };
    TelegramClient.prototype.setChatPermissions = function (params) {
        return this.request('setChatPermissions', params);
    };
    TelegramClient.prototype.exportChatInviteLink = function (params) {
        return this.request('exportChatInviteLink', params);
    };
    TelegramClient.prototype.setChatPhoto = function (params) {
        return this.request('setChatPhoto', params);
    };
    TelegramClient.prototype.deleteChatPhoto = function (params) {
        return this.request('deleteChatPhoto', params);
    };
    TelegramClient.prototype.setChatTitle = function (params) {
        return this.request('setChatTitle', params);
    };
    TelegramClient.prototype.setChatDescription = function (params) {
        return this.request('setChatDescription', params);
    };
    TelegramClient.prototype.pinChatMessage = function (params) {
        return this.request('pinChatMessage', params);
    };
    TelegramClient.prototype.unpinChatMessage = function (params) {
        return this.request('unpinChatMessage', params);
    };
    TelegramClient.prototype.unpinAllChatMessages = function (params) {
        return this.request('unpinAllChatMessages', params);
    };
    TelegramClient.prototype.leaveChat = function (params) {
        return this.request('leaveChat', params);
    };
    TelegramClient.prototype.getChat = function (params) {
        return this.request('getChat', params);
    };
    TelegramClient.prototype.getChatAdministrators = function (params) {
        return this.request('getChatAdministrators', params);
    };
    TelegramClient.prototype.getChatMembersCount = function (params) {
        return this.request('getChatMembersCount', params);
    };
    TelegramClient.prototype.getChatMember = function (params) {
        return this.request('getChatMember', params);
    };
    TelegramClient.prototype.setChatStickerSet = function (params) {
        return this.request('setChatStickerSet', params);
    };
    TelegramClient.prototype.deleteChatStickerSet = function (params) {
        return this.request('deleteChatStickerSet', params);
    };
    TelegramClient.prototype.answerCallbackQuery = function (params) {
        return this.request('answerCallbackQuery', params);
    };
    TelegramClient.prototype.setMyCommands = function (params) {
        return this.request('setMyCommands', params);
    };
    TelegramClient.prototype.getMyCommands = function () {
        return this.request('getMyCommands');
    };
    TelegramClient.prototype.editMessageText = function (params) {
        return this.request('editMessageText', params);
    };
    TelegramClient.prototype.editMessageCaption = function (params) {
        return this.request('editMessageCaption', params);
    };
    TelegramClient.prototype.editMessageMedia = function (params) {
        return this.request('editMessageMedia', params);
    };
    TelegramClient.prototype.editMessageReplyMarkup = function (params) {
        return this.request('editMessageReplyMarkup', params);
    };
    TelegramClient.prototype.stopPoll = function (params) {
        return this.request('stopPoll', params);
    };
    TelegramClient.prototype.deleteMessage = function (params) {
        return this.request('deleteMessage', params);
    };
    TelegramClient.prototype.sendSticker = function (params) {
        return this.request('sendSticker', params);
    };
    TelegramClient.prototype.getStickerSet = function (params) {
        return this.request('getStickerSet', params);
    };
    TelegramClient.prototype.uploadStickerFile = function (params) {
        return this.request('uploadStickerFile', params);
    };
    TelegramClient.prototype.createNewStickerSet = function (params) {
        return this.request('createNewStickerSet', params);
    };
    TelegramClient.prototype.addStickerToSet = function (params) {
        return this.request('addStickerToSet', params);
    };
    TelegramClient.prototype.setStickerPositionInSet = function (params) {
        return this.request('setStickerPositionInSet', params);
    };
    TelegramClient.prototype.deleteStickerFromSet = function (params) {
        return this.request('deleteStickerFromSet', params);
    };
    TelegramClient.prototype.setStickerSetThumb = function (params) {
        return this.request('setStickerSetThumb', params);
    };
    TelegramClient.prototype.answerInlineQuery = function (params) {
        return this.request('answerInlineQuery', params);
    };
    TelegramClient.prototype.sendInvoice = function (params) {
        return this.request('sendInvoice', params);
    };
    TelegramClient.prototype.answerShippingQuery = function (params) {
        return this.request('answerShippingQuery', params);
    };
    TelegramClient.prototype.answerPreCheckoutQuery = function (params) {
        return this.request('answerPreCheckoutQuery', params);
    };
    TelegramClient.prototype.setPassportDataErrors = function (params) {
        return this.request('setPassportDataErrors', params);
    };
    TelegramClient.prototype.sendGame = function (params) {
        return this.request('sendGame', params);
    };
    TelegramClient.prototype.setGameScore = function (params) {
        return this.request('setGameScore', params);
    };
    TelegramClient.prototype.getGameHighScores = function (params) {
        return this.request('getGameHighScores', params);
    };
    return TelegramClient;
}());
exports.TelegramClient = TelegramClient;
//# sourceMappingURL=client.js.map