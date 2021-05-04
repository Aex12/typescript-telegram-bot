import { Client } from 'undici';
import { URLSearchParams } from 'url';
export default class TelegramClient {
    constructor(config) {
        this.BASE_URL = 'https://api.telegram.org';
        this.token = config.token;
        if (config.baseUrl) {
            this.BASE_URL = config.baseUrl;
        }
        this.httpClient = new Client(this.BASE_URL);
    }
    async request(endpoint, params) {
        const query = new URLSearchParams(params);
        const queryString = query.toString();
        const { statusCode, body, } = await this.httpClient
            .request({
            path: `/bot${this.token}/${endpoint}?${queryString}`,
            method: 'GET',
        });
        let data = '';
        for await (const chunk of body) {
            data += chunk;
        }
        if (statusCode !== 200) {
            console.error(data);
            throw new Error('status code is not 200');
        }
        const result = JSON.parse(data);
        if (result.ok) {
            return result.result;
        }
        else {
            throw new Error(result.description);
        }
    }
    getUpdates(params) {
        return this.request('getUpdates', params);
    }
    setWebhook(params) {
        return this.request('setWebHook', params);
    }
    deleteWebhook(params) {
        return this.request('deleteWebHook', params);
    }
    getWebhookInfo() {
        return this.request('deleteWebHook');
    }
    getMe() {
        return this.request('getMe');
    }
    logOut() {
        return this.request('logOut');
    }
    close() {
        return this.request('logOut');
    }
    sendMessage(params) {
        return this.request('sendMessage', params);
    }
    forwardMessage(params) {
        return this.request('forwardMessage', params);
    }
    copyMessage(params) {
        return this.request('copyMessage', params);
    }
    sendPhoto(params) {
        return this.request('sendPhoto', params);
    }
    sendAudio(params) {
        return this.request('sendAudio', params);
    }
    sendDocument(params) {
        return this.request('sendDocument', params);
    }
    sendVideo(params) {
        return this.request('sendVideo', params);
    }
    sendAnimation(params) {
        return this.request('sendAnimation', params);
    }
    sendVoice(params) {
        return this.request('sendVoice', params);
    }
    sendVideoNote(params) {
        return this.request('sendVideoNote', params);
    }
    sendMediaGroup(params) {
        return this.request('sendMediaGroup', params);
    }
    sendLocation(params) {
        return this.request('sendLocation', params);
    }
    editMessageLiveLocation(params) {
        return this.request('editMessageLiveLocation', params);
    }
    stopMessageLiveLocation(params) {
        return this.request('stopMessageLiveLocation', params);
    }
    sendVenue(params) {
        return this.request('sendVenue', params);
    }
    sendContact(params) {
        return this.request('sendContact', params);
    }
    sendPoll(params) {
        return this.request('sendPoll', params);
    }
    sendDice(params) {
        return this.request('sendDice', params);
    }
    sendChatAction(params) {
        return this.request('sendChatAction', params);
    }
    getUserProfilePhotos(params) {
        return this.request('getUserProfilePhotos', params);
    }
    getFile(params) {
        return this.request('getFile', params);
    }
    kickChatMember(params) {
        return this.request('kickChatMember', params);
    }
    unbanChatMember(params) {
        return this.request('unbanChatMember', params);
    }
    restrictChatMember(params) {
        return this.request('restrictChatMember', params);
    }
    promoteChatMember(params) {
        return this.request('promoteChatMember', params);
    }
    setChatAdministratorCustomTitle(params) {
        return this.request('setChatAdministratorCustomTitle', params);
    }
    setChatPermissions(params) {
        return this.request('setChatPermissions', params);
    }
    exportChatInviteLink(params) {
        return this.request('exportChatInviteLink', params);
    }
    setChatPhoto(params) {
        return this.request('setChatPhoto', params);
    }
    deleteChatPhoto(params) {
        return this.request('deleteChatPhoto', params);
    }
    setChatTitle(params) {
        return this.request('setChatTitle', params);
    }
    setChatDescription(params) {
        return this.request('setChatDescription', params);
    }
    pinChatMessage(params) {
        return this.request('pinChatMessage', params);
    }
    unpinChatMessage(params) {
        return this.request('unpinChatMessage', params);
    }
    unpinAllChatMessages(params) {
        return this.request('unpinAllChatMessages', params);
    }
    leaveChat(params) {
        return this.request('leaveChat', params);
    }
    getChat(params) {
        return this.request('getChat', params);
    }
    getChatAdministrators(params) {
        return this.request('getChatAdministrators', params);
    }
    getChatMembersCount(params) {
        return this.request('getChatMembersCount', params);
    }
    getChatMember(params) {
        return this.request('getChatMember', params);
    }
    setChatStickerSet(params) {
        return this.request('setChatStickerSet', params);
    }
    deleteChatStickerSet(params) {
        return this.request('deleteChatStickerSet', params);
    }
    answerCallbackQuery(params) {
        return this.request('answerCallbackQuery', params);
    }
    setMyCommands(params) {
        return this.request('setMyCommands', params);
    }
    getMyCommands() {
        return this.request('getMyCommands');
    }
    editMessageText(params) {
        return this.request('editMessageText', params);
    }
    editMessageCaption(params) {
        return this.request('editMessageCaption', params);
    }
    editMessageMedia(params) {
        return this.request('editMessageMedia', params);
    }
    editMessageReplyMarkup(params) {
        return this.request('editMessageReplyMarkup', params);
    }
    stopPoll(params) {
        return this.request('stopPoll', params);
    }
    deleteMessage(params) {
        return this.request('deleteMessage', params);
    }
    sendSticker(params) {
        return this.request('sendSticker', params);
    }
    getStickerSet(params) {
        return this.request('getStickerSet', params);
    }
    uploadStickerFile(params) {
        return this.request('uploadStickerFile', params);
    }
    createNewStickerSet(params) {
        return this.request('createNewStickerSet', params);
    }
    addStickerToSet(params) {
        return this.request('addStickerToSet', params);
    }
    setStickerPositionInSet(params) {
        return this.request('setStickerPositionInSet', params);
    }
    deleteStickerFromSet(params) {
        return this.request('deleteStickerFromSet', params);
    }
    setStickerSetThumb(params) {
        return this.request('setStickerSetThumb', params);
    }
    answerInlineQuery(params) {
        return this.request('answerInlineQuery', params);
    }
    sendInvoice(params) {
        return this.request('sendInvoice', params);
    }
    answerShippingQuery(params) {
        return this.request('answerShippingQuery', params);
    }
    answerPreCheckoutQuery(params) {
        return this.request('answerPreCheckoutQuery', params);
    }
    setPassportDataErrors(params) {
        return this.request('setPassportDataErrors', params);
    }
    sendGame(params) {
        return this.request('sendGame', params);
    }
    setGameScore(params) {
        return this.request('setGameScore', params);
    }
    getGameHighScores(params) {
        return this.request('getGameHighScores', params);
    }
}
