import { Client } from 'undici';
import * as Tgt from './types/telegram';
import { URLSearchParams } from 'url';

export interface TelegramClientOptions {
	token: string;
	baseUrl?: string;
	timeout?: number;
}

export default class TelegramClient {
	BASE_URL = 'https://api.telegram.org';
	token: string;
	httpClient: Client;

	constructor (config: TelegramClientOptions) {
		this.token = config.token;

		if (config.baseUrl) {
			this.BASE_URL = config.baseUrl;
		}

		this.httpClient = new Client(this.BASE_URL);
	}

	async request<T> (endpoint: string, params?: Tgt.RequestParameters): Promise<T> {
		const { statusCode, body, } = await this.httpClient
			.request({ 
				path: `/bot${this.token}/${endpoint}`,
				method: 'POST',
				body: JSON.stringify(params),
				headers: {
					'content-type': 'application/json',
				},
			});

		let data = '';
		for await (const chunk of body) {
			data += chunk;
		}

		if (statusCode !== 200) {
			console.error(data);
			throw new Error('status code is not 200');
		}

		const result: Tgt.Response<T> = JSON.parse(data);

		if (result.ok) {
			return result.result;
		} else {
			throw new Error(result.description);
		}
	}

	getUpdates (params?: Tgt.GetUpdatesParameters): Promise<Tgt.Update[]> {
		return this.request('getUpdates', params);
	}

	setWebhook (params?: Tgt.SetWebhookParameters): Promise<void> {
		return this.request('setWebHook', params);
	}

	deleteWebhook (params?: Tgt.DeleteWebhookParameters): Promise<void> {
		return this.request('deleteWebHook', params);
	}

	getWebhookInfo (): Promise<Tgt.WebhookInfo> {
		return this.request('deleteWebHook');
	}

	getMe (): Promise<Tgt.User> {
		return this.request('getMe');
	}

	logOut (): Promise<void> {
		return this.request('logOut');
	}

	close (): Promise<void> {
		return this.request('logOut');
	}

	sendMessage (params: Tgt.SendMessageParameters): Promise<Tgt.Message> {
		return this.request('sendMessage', params);
	}

	forwardMessage (params: Tgt.ForwardMessageParameters): Promise<Tgt.Message> {
		return this.request('forwardMessage', params);
	}

	copyMessage (params: Tgt.CopyMessageParameters): Promise<Tgt.MessageId> {
		return this.request('copyMessage', params);
	}

	sendPhoto (params: Tgt.SendPhotoParameters): Promise<Tgt.Message> {
		return this.request('sendPhoto', params);
	}

	sendAudio (params: Tgt.SendAudioParameters): Promise<Tgt.Message> {
		return this.request('sendAudio', params);
	}

	sendDocument (params: Tgt.SendDocumentParameters): Promise<Tgt.Message> {
		return this.request('sendDocument', params);
	}

	sendVideo (params: Tgt.SendVideoParameters): Promise<Tgt.Message> {
		return this.request('sendVideo', params);
	}

	sendAnimation (params: Tgt.SendAnimationParameters): Promise<Tgt.Message> {
		return this.request('sendAnimation', params);
	}

	sendVoice (params: Tgt.SendVoiceParameters): Promise<Tgt.Message> {
		return this.request('sendVoice', params);
	}

	sendVideoNote (params: Tgt.SendVideoNoteParameters): Promise<Tgt.Message> {
		return this.request('sendVideoNote', params);
	}

	sendMediaGroup (params: Tgt.SendMediaGroupParameters): Promise<Tgt.Message[]> {
		return this.request('sendMediaGroup', params);
	}

	sendLocation (params: Tgt.SendLocationParameters): Promise<Tgt.Message> {
		return this.request('sendLocation', params);
	}

	editMessageLiveLocation (params: Tgt.EditMessageLiveLocationParameters): Promise<Tgt.Message | true> {
		return this.request('editMessageLiveLocation', params);
	}

	stopMessageLiveLocation (params: Tgt.StopMessageLiveLocationParameters): Promise<Tgt.Message | true> {
		return this.request('stopMessageLiveLocation', params);
	}

	sendVenue (params: Tgt.SendVenueParameters): Promise<Tgt.Message> {
		return this.request('sendVenue', params);
	}

	sendContact (params: Tgt.SendContactParameters): Promise<Tgt.Message> {
		return this.request('sendContact', params);
	}

	sendPoll (params: Tgt.SendPollParameters): Promise<Tgt.Message> {
		return this.request('sendPoll', params);
	}

	sendDice (params: Tgt.SendDiceParameters): Promise<Tgt.Message> {
		return this.request('sendDice', params);
	}

	sendChatAction (params: Tgt.SendChatActionParameters): Promise<true> {
		return this.request('sendChatAction', params);
	}

	getUserProfilePhotos (params: Tgt.GetUserProfilePhotosParameters): Promise<Tgt.UserProfilePhotos> {
		return this.request('getUserProfilePhotos', params);
	}

	getFile (params: Tgt.GetFileParameters): Promise<Tgt.File> {
		return this.request('getFile', params);
	}

	kickChatMember (params: Tgt.KickChatMemberParameters): Promise<true> {
		return this.request('kickChatMember', params);
	}

	unbanChatMember (params: Tgt.UnbanChatMemberParameters): Promise<true> {
		return this.request('unbanChatMember', params);
	}

	restrictChatMember (params: Tgt.RestrictChatMemberParameters): Promise<true> {
		return this.request('restrictChatMember', params);
	}

	promoteChatMember (params: Tgt.PromoteChatMemberParameters): Promise<true> {
		return this.request('promoteChatMember', params);
	}

	setChatAdministratorCustomTitle (params: Tgt.SetChatAdministratorCustomTitleParameters): Promise<true> {
		return this.request('setChatAdministratorCustomTitle', params);
	}

	setChatPermissions (params: Tgt.SetChatPermissionsParameters): Promise<true> {
		return this.request('setChatPermissions', params);
	}

	exportChatInviteLink (params: Tgt.ExportChatInviteLinkParameters): Promise<string> {
		return this.request('exportChatInviteLink', params);
	}

	setChatPhoto (params: Tgt.SetChatPhotoParameters): Promise<true> {
		return this.request('setChatPhoto', params);
	}

	deleteChatPhoto (params: Tgt.DeleteChatPhotoParameters): Promise<true> {
		return this.request('deleteChatPhoto', params);
	}

	setChatTitle (params: Tgt.SetChatTitleParameters): Promise<true> {
		return this.request('setChatTitle', params);
	}

	setChatDescription (params: Tgt.SetChatDescriptionParameters): Promise<true> {
		return this.request('setChatDescription', params);
	}

	pinChatMessage (params: Tgt.PinChatMessageParameters): Promise<true> {
		return this.request('pinChatMessage', params);
	}

	unpinChatMessage (params: Tgt.UnpinChatMessageParameters): Promise<true> {
		return this.request('unpinChatMessage', params);
	}

	unpinAllChatMessages (params: Tgt.UnpinAllChatMessagesParameters): Promise<true> {
		return this.request('unpinAllChatMessages', params);
	}

	leaveChat (params: Tgt.LeaveChatParameters): Promise<true> {
		return this.request('leaveChat', params);
	}

	getChat (params: Tgt.GetChatParameters): Promise<Tgt.Chat> {
		return this.request('getChat', params);
	}

	getChatAdministrators (params: Tgt.GetChatAdministratorsParameters): Promise<Tgt.ChatMember[]> {
		return this.request('getChatAdministrators', params);
	}

	getChatMembersCount (params: Tgt.GetChatMembersCountParameters): Promise<number> {
		return this.request('getChatMembersCount', params);
	}

	getChatMember (params: Tgt.GetChatMemberParameters): Promise<Tgt.ChatMember> {
		return this.request('getChatMember', params);
	}

	setChatStickerSet (params: Tgt.SetChatStickerSetParameters): Promise<true> {
		return this.request('setChatStickerSet', params);
	}

	deleteChatStickerSet (params: Tgt.DeleteChatStickerSetParameters): Promise<true> {
		return this.request('deleteChatStickerSet', params);
	}

	answerCallbackQuery (params: Tgt.AnswerCallbackQueryParameters): Promise<true> {
		return this.request('answerCallbackQuery', params);
	}

	setMyCommands (params: Tgt.SetMyCommandsParameters): Promise<true> {
		return this.request('setMyCommands', params);
	}

	getMyCommands (): Promise<Tgt.BotCommand[]> {
		return this.request('getMyCommands');
	}

	editMessageText (params: Tgt.EditMessageTextParameters): Promise<Tgt.Message | true> {
		return this.request('editMessageText', params);
	}

	editMessageCaption (params: Tgt.EditMessageCaptionParameters): Promise<Tgt.Message | true> {
		return this.request('editMessageCaption', params);
	}

	editMessageMedia (params: Tgt.EditMessageMediaParameters): Promise<Tgt.Message | true> {
		return this.request('editMessageMedia', params);
	}

	editMessageReplyMarkup (params: Tgt.EditMessageReplyMarkupParameters): Promise<Tgt.Message | true> {
		return this.request('editMessageReplyMarkup', params);
	}

	stopPoll (params: Tgt.StopPollParameters): Promise<Tgt.Poll> {
		return this.request('stopPoll', params);
	}

	deleteMessage (params: Tgt.DeleteMessageParameters): Promise<true> {
		return this.request('deleteMessage', params);
	}

	sendSticker (params: Tgt.SendStickerParameters): Promise<Tgt.Message> {
		return this.request('sendSticker', params);
	}

	getStickerSet (params: Tgt.GetStickerSetParameters): Promise<Tgt.StickerSet> {
		return this.request('getStickerSet', params);
	}

	uploadStickerFile (params: Tgt.UploadStickerFileParameters): Promise<Tgt.File> {
		return this.request('uploadStickerFile', params);
	}

	createNewStickerSet (params: Tgt.CreateNewStickerSetParameters): Promise<true> {
		return this.request('createNewStickerSet', params);
	}

	addStickerToSet (params: Tgt.AddStickerToSetParameters): Promise<true> {
		return this.request('addStickerToSet', params);
	}

	setStickerPositionInSet (params: Tgt.SetStickerPositionInSetParameters): Promise<true> {
		return this.request('setStickerPositionInSet', params);
	}

	deleteStickerFromSet (params: Tgt.DeleteStickerFromSetParameters): Promise<true> {
		return this.request('deleteStickerFromSet', params);
	}

	setStickerSetThumb (params: Tgt.SetStickerSetThumbParameters): Promise<true> {
		return this.request('setStickerSetThumb', params);
	}

	answerInlineQuery (params: Tgt.AnswerInlineQueryParameters): Promise<true> {
		return this.request('answerInlineQuery', params);
	}
	
	sendInvoice (params: Tgt.SendInvoiceParameters): Promise<Tgt.Message> {
		return this.request('sendInvoice', params);
	}

	answerShippingQuery (params: Tgt.AnswerShippingQueryParameters): Promise<true> {
		return this.request('answerShippingQuery', params);
	}

	answerPreCheckoutQuery (params: Tgt.AnswerPreCheckoutQueryParameters): Promise<true> {
		return this.request('answerPreCheckoutQuery', params);
	}

	setPassportDataErrors (params: Tgt.SetPassportDataErrorsParameters): Promise<true> {
		return this.request('setPassportDataErrors', params);
	}

	sendGame (params: Tgt.SendGameParameters): Promise<Tgt.Message> {
		return this.request('sendGame', params);
	}

	setGameScore (params: Tgt.SetGameScoreParameters): Promise<Tgt.Message | true> {
		return this.request('setGameScore', params);
	}

	getGameHighScores (params: Tgt.GetGameHighScoresParameters): Promise<Tgt.GameHighScore[]> {
		return this.request('getGameHighScores', params);
	}
}
