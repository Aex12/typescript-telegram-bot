// custom types
export type InputFile = Buffer | File | string;

export interface ValidResponse<T> {
	ok: true;
	result: T;
}

export interface ErrorResponse {
	ok: false;
	description: string;
}

export type Response<T> = ValidResponse<T> | ErrorResponse;

export type RequestParameters = GetUpdatesParameters
	| SetWebhookParameters
	| DeleteWebhookParameters
	| ResponseParameters
	| CopyMessageParameters
	| ForwardMessageParameters
	| SendMessageParameters
	| SendPhotoParameters
	| SendAudioParameters
	| SendDocumentParameters
	| SendVideoParameters
	| SendAnimationParameters
	| SendVoiceParameters
	| SendVideoNoteParameters
	| SendMediaGroupParameters
	| SendLocationParameters
	| EditMessageLiveLocationParameters
	| StopMessageLiveLocationParameters
	| SendVenueParameters
	| SendContactParameters
	| SendPollParameters
	| SendDiceParameters
	| SendChatActionParameters
	| GetUserProfilePhotosParameters
	| GetFileParameters
	| KickChatMemberParameters
	| UnbanChatMemberParameters
	| RestrictChatMemberParameters
	| PromoteChatMemberParameters
	| SetChatAdministratorCustomTitleParameters
	| SetChatPermissionsParameters
	| ExportChatInviteLinkParameters
	| SetChatPhotoParameters
	| DeleteChatPhotoParameters
	| SetChatTitleParameters
	| SetChatDescriptionParameters
	| PinChatMessageParameters
	| UnpinChatMessageParameters
	| UnpinAllChatMessagesParameters
	| LeaveChatParameters
	| GetChatParameters
	| GetChatAdministratorsParameters
	| GetChatMembersCountParameters
	| GetChatMemberParameters
	| SetChatStickerSetParameters
	| DeleteChatStickerSetParameters
	| AnswerCallbackQueryParameters
	| SetMyCommandsParameters
	| EditMessageTextParameters
	| EditMessageCaptionParameters
	| EditMessageMediaParameters
	| EditMessageReplyMarkupParameters
	| StopPollParameters
	| DeleteMessageParameters
	| SendStickerParameters
	| GetStickerSetParameters
	| UploadStickerFileParameters
	| CreateNewStickerSetParameters
	| AddStickerToSetParameters
	| SetStickerPositionInSetParameters
	| DeleteStickerFromSetParameters
	| SetStickerSetThumbParameters
	| AnswerInlineQueryParameters
	| SendInvoiceParameters
	| AnswerShippingQueryParameters
	| AnswerPreCheckoutQueryParameters
	| SetPassportDataErrorsParameters
	| SendGameParameters
	| SetGameScoreParameters
	| GetGameHighScoresParameters;

//  types

export interface Update {
	update_id: number;
	message?: Message;
	edited_message?: Message;
	channel_post?: Message;
	edited_channel_post?: Message;
	inline_query?: InlineQuery;
	chosen_inline_result?: ChosenInlineResult;
	callback_query?: CallbackQuery;
	shipping_query?: ShippingQuery;
	pre_checkout_query?: PreCheckoutQuery;
	poll?: Poll;
	poll_answer?: PollAnswer;
}

export interface GetUpdatesParameters {
	offset?: number;
	limit?: number;
	timeout?: number;
	allowed_updates?: string[];
}

export interface SetWebhookParameters {
	url: string;
	certificate?: InputFile;
	ip_address?: string;
	max_connections?: number;
	allowed_updates?: string[];
	drop_pending_updates?: boolean;
}

export interface DeleteWebhookParameters {
	drop_pending_updates?: boolean;
}

export interface WebhookInfo {
	url: string;
	has_custom_certificate: boolean;
	pending_update_count: number;
	ip_address?: string;
	last_error_date?: number;
	last_error_message?: string;
	max_connections?: number;
	allowed_updates?: string[];
}

export interface User {
	id: number;
	is_bot: boolean;
	first_name: string;
	last_name?: string;
	username?: string;
	language_code?: string;
	can_join_groups?: boolean;
	can_read_all_group_messages?: boolean;
	supports_inline_queries?: boolean;
}

export interface Chat {
	id: number;
	type: string;
	title?: string;
	username?: string;
	first_name?: string;
	last_name?: string;
	photo?: ChatPhoto;
	bio?: string;
	description?: string;
	invite_link?: string;
	pinned_message?: Message;
	permissions?: ChatPermissions;
	slow_mode_delay?: number;
	sticker_set_name?: string;
	can_set_sticker_set?: boolean;
	linked_chat_id?: number;
	location?: ChatLocation;
}

export interface Message {
	message_id: number;
	from?: User;
	sender_chat?: Chat;
	date: number;
	chat: Chat;
	forward_from?: User;
	forward_from_chat?: Chat;
	forward_from_message_id?: number;
	forward_signature?: string;
	forward_sender_name?: string;
	forward_date?: number;
	reply_to_message?: Message;
	via_bot?: User;
	edit_date?: number;
	media_group_id?: string;
	author_signature?: string;
	text?: string;
	entities?: MessageEntity[];
	animation?: Animation;
	audio?: Audio;
	document?: Document;
	photo?: PhotoSize[];
	sticker?: Sticker;
	video?: Video;
	video_note?: VideoNote;
	voice?: Voice;
	caption?: string;
	caption_entities?: MessageEntity[];
	contact?: Contact;
	dice?: Dice;
	game?: Game;
	poll?: Poll;
	venue?: Venue;
	location?: Location;
	new_chat_members?: User[];
	left_chat_member?: User;
	new_chat_title?: string;
	new_chat_photo?: PhotoSize[];
	delete_chat_photo?: true;
	group_chat_created?: true;
	supergroup_chat_created?: true;
	channel_chat_created?: true;
	migrate_to_chat_id?: number;
	migrate_from_chat_id?: number;
	pinned_message?: Message;
	invoice?: Invoice;
	successful_payment?: SuccessfulPayment;
	connected_website?: string;
	passport_data?: PassportData;
	proximity_alert_triggered?: ProximityAlertTriggered;
	reply_markup?: InlineKeyboardMarkup;
}

export interface MessageId {
	message_id: number;
}

export interface MessageEntity {
	type: string;
	offset: number;
	length: number;
	url?: string;
	user?: User;
	language?: string;
}

export interface PhotoSize {
	file_id: string;
	file_unique_id: string;
	width: number;
	height: number;
	file_size?: number;
}

export interface Animation {
	file_id: string;
	file_unique_id: string;
	width: number;
	height: number;
	duration: number;
	thumb?: PhotoSize;
	file_name?: string;
	mime_type?: string;
	file_size?: number;
}

export interface Audio {
	file_id: string;
	file_unique_id: string;
	duration: number;
	performer?: string;
	title?: string;
	file_name?: string;
	mime_type?: string;
	file_size?: number;
	thumb?: PhotoSize;
}

export interface Document {
	file_id: string;
	file_unique_id: string;
	thumb?: PhotoSize;
	file_name?: string;
	mime_type?: string;
	file_size?: number;
}

export interface Video {
	file_id: string;
	file_unique_id: string;
	width: number;
	height: number;
	duration: number;
	thumb?: PhotoSize;
	file_name?: string;
	mime_type?: string;
	file_size?: number;
}

export interface VideoNote {
	file_id: string;
	file_unique_id: string;
	length: number;
	duration: number;
	thumb?: PhotoSize;
	file_size?: number;
}

export interface Voice {
	file_id: string;
	file_unique_id: string;
	duration: number;
	mime_type?: string;
	file_size?: number;
}

export interface Contact {
	phone_number: string;
	first_name: string;
	last_name?: string;
	user_id?: number;
	vcard?: string;
}

export interface Dice {
	emoji: string;
	value: number;
}

export interface PollOption {
	text: string;
	voter_count: number;
}

export interface PollAnswer {
	poll_id: string;
	user: User;
	option_ids: number[];
}

export interface Poll {
	id: string;
	question: string;
	options: PollOption[];
	total_voter_count: number;
	is_closed: boolean;
	is_anonymous: boolean;
	type: string;
	allows_multiple_answers: boolean;
	correct_option_id?: number;
	explanation?: string;
	explanation_entities?: MessageEntity[];
	open_period?: number;
	close_date?: number;
}

export interface Location {
	longitude: number;
	latitude: number;
	horizontal_accuracy?: number;
	live_period?: number;
	heading?: number;
	proximity_alert_radius?: number;
}

export interface Venue {
	location: Location;
	title: string;
	address: string;
	foursquare_id?: string;
	foursquare_type?: string;
	google_place_id?: string;
	google_place_type?: string;
}

export interface ProximityAlertTriggered {
	traveler: User;
	watcher: User;
	distance: number;
}

export interface UserProfilePhotos {
	total_count: number;
	photos: PhotoSize[];
}

export interface File {
	file_id: string;
	file_unique_id: string;
	file_size?: number;
	file_path?: string;
}

export interface ReplyKeyboardMarkup {
	keyboard: KeyboardButton[];
	resize_keyboard?: boolean;
	one_time_keyboard?: boolean;
	selective?: boolean;
}

export interface KeyboardButton {
	text: string;
	request_contact?: boolean;
	request_location?: boolean;
	request_poll?: KeyboardButtonPollType;
}

export interface KeyboardButtonPollType {
	type?: string;
}

export interface ReplyKeyboardRemove {
	remove_keyboard: true;
	selective?: boolean;
}

export interface InlineKeyboardMarkup {
	inline_keyboard: InlineKeyboardButton[][];
}

export interface InlineKeyboardButton {
	text: string;
	url?: string;
	login_url?: LoginUrl;
	callback_data?: string;
	switch_inline_query?: string;
	switch_inline_query_current_chat?: string;
	callback_game?: CallbackGame;
	pay?: boolean;
}

export interface LoginUrl {
	url: string;
	forward_text?: string;
	bot_username?: string;
	request_write_access?: boolean;
}

export interface CallbackQuery {
	id: string;
	from: User;
	message?: Message;
	inline_message_id?: string;
	chat_instance: string;
	data?: string;
	game_short_name?: string;
}

export interface ForceReply {
	force_reply: true;
	selective?: boolean;
}

export interface ChatPhoto {
	small_file_id: string;
	small_file_unique_id: string;
	big_file_id: string;
	big_file_unique_id: string;
}

export interface ChatMember {
	user: User;
	status: string;
	custom_title?: string;
	is_anonymous?: boolean;
	can_be_edited?: boolean;
	can_post_messages?: boolean;
	can_edit_messages?: boolean;
	can_delete_messages?: boolean;
	can_restrict_members?: boolean;
	can_promote_members?: boolean;
	can_change_info?: boolean;
	can_invite_users?: boolean;
	can_pin_messages?: boolean;
	is_member?: boolean;
	can_send_messages?: boolean;
	can_send_media_messages?: boolean;
	can_send_polls?: boolean;
	can_send_other_messages?: boolean;
	can_add_web_page_previews?: boolean;
	until_date?: number;
}

export interface ChatPermissions {
	can_send_messages?: boolean;
	can_send_media_messages?: boolean;
	can_send_polls?: boolean;
	can_send_other_messages?: boolean;
	can_add_web_page_previews?: boolean;
	can_change_info?: boolean;
	can_invite_users?: boolean;
	can_pin_messages?: boolean;
}

export interface ChatLocation {
	location: Location;
	address: string;
}

export interface BotCommand {
	command: string;
	description: string;
}

export interface ResponseParameters {
	migrate_to_chat_id?: number;
	retry_after?: number;
}

type InputMedia = InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo;

export interface InputMediaPhoto {
	type: string;
	media: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
}

export interface InputMediaVideo {
	type: string;
	media: string;
	thumb?: InputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	width?: number;
	height?: number;
	duration?: number;
	supports_streaming?: boolean;
}

export interface InputMediaAnimation {
	type: string;
	media: string;
	thumb?: InputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	width?: number;
	height?: number;
	duration?: number;
}

export interface InputMediaAudio {
	type: string;
	media: string;
	thumb?: InputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	duration?: number;
	performer?: string;
	title?: string;
}

export interface InputMediaDocument {
	type: string;
	media: string;
	thumb?: InputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	disable_content_type_detection?: boolean;
}

export interface SendMessageParameters {
	chat_id: number | string;
	text: string;
	parse_mode?: string;
	entities?: MessageEntity[];
	disable_web_page_preview?: boolean;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface ForwardMessageParameters {
	chat_id: number | string;
	from_chat_id: number | string;
	disable_notification?: boolean;
	message_id: number;
}

export interface CopyMessageParameters {
	chat_id: number | string;
	from_chat_id: number | string;
	message_id: number;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface SendPhotoParameters {
	chat_id: number | string;
	photo: InputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface SendAudioParameters {
	chat_id: number | string;
	audio: InputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	duration?: number;
	performer?: string;
	title?: string;
	thumb?: InputFile | string;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface SendDocumentParameters {
	chat_id: number | string;
	document: InputFile | string;
	thumb?: InputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	disable_content_type_detection?: boolean;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface SendVideoParameters {
	chat_id: number | string;
	video: InputFile | string;
	duration?: number;
	width?: number;
	height?: number;
	thumb?: InputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	supports_streaming?: boolean;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface SendAnimationParameters {
	chat_id: number | string;
	animation: InputFile | string;
	duration?: number;
	width?: number;
	height?: number;
	thumb?: InputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface SendVoiceParameters {
	chat_id: number | string;
	voice: InputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	duration?: number;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface SendVideoNoteParameters {
	chat_id: number | string;
	video_note: InputFile | string;
	duration?: number;
	length?: number;
	thumb?: InputFile | string;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface SendMediaGroupParameters {
	chat_id: number | string;
	media: Array<InputMediaAudio | InputMediaDocument | InputMediaPhoto | InputMediaVideo>;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
}

export interface SendLocationParameters {
	chat_id: number | string;
	latitude: number;
	longitude: number;
	horizontal_accuracy?: number;
	live_period?: number;
	heading?: number;
	proximity_alert_radius?: number;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface EditMessageLiveLocationParameters {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	latitude: number;
	longitude: number;
	horizontal_accuracy?: number;
	heading?: number;
	proximity_alert_radius?: number;
	reply_markup?: InlineKeyboardMarkup;
}

export interface StopMessageLiveLocationParameters {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	reply_markup?: InlineKeyboardMarkup;
}

export interface SendVenueParameters {
	chat_id: number | string;
	latitude: number;
	longitude: number;
	title: string;
	address: string;
	foursquare_id?: string;
	foursquare_type?: string;
	google_place_id?: string;
	google_place_type?: string;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface SendContactParameters {
	chat_id: number | string;
	phone_number: string;
	first_name: string;
	last_name?: string;
	vcard?: string;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface SendPollParameters {
	chat_id: number | string;
	question: string;
	options: string[];
	is_anonymous?: boolean;
	type?: string;
	allows_multiple_answers?: boolean;
	correct_option_id?: number;
	explanation?: string;
	explanation_parse_mode?: string;
	explanation_entities?: MessageEntity[];
	open_period?: number;
	close_date?: number;
	is_closed?: boolean;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface SendDiceParameters {
	chat_id: number | string;
	emoji?: string;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface SendChatActionParameters {
	chat_id: number | string;
	action: string;
}

export interface GetUserProfilePhotosParameters {
	user_id: number;
	offset?: number;
	limit?: number;
}

export interface GetFileParameters {
	file_id: string;
}

export interface KickChatMemberParameters {
	chat_id: number | string;
	user_id: number;
	until_date?: number;
}

export interface UnbanChatMemberParameters {
	chat_id: number | string;
	user_id: number;
	only_if_banned?: boolean;
}

export interface RestrictChatMemberParameters {
	chat_id: number | string;
	user_id: number;
	permissions: ChatPermissions;
	until_date?: number;
}

export interface PromoteChatMemberParameters {
	chat_id: number | string;
	user_id: number;
	is_anonymous?: boolean;
	can_change_info?: boolean;
	can_post_messages?: boolean;
	can_edit_messages?: boolean;
	can_delete_messages?: boolean;
	can_invite_users?: boolean;
	can_restrict_members?: boolean;
	can_pin_messages?: boolean;
	can_promote_members?: boolean;
}

export interface SetChatAdministratorCustomTitleParameters {
	chat_id: number | string;
	user_id: number;
	custom_title: string;
}

export interface SetChatPermissionsParameters {
	chat_id: number | string;
	permissions: ChatPermissions;
}

export interface ExportChatInviteLinkParameters {
	chat_id: number | string;
}

export interface SetChatPhotoParameters {
	chat_id: number | string;
	photo: InputFile;
}

export interface DeleteChatPhotoParameters {
	chat_id: number | string;
}

export interface SetChatTitleParameters {
	chat_id: number | string;
	title: string;
}

export interface SetChatDescriptionParameters {
	chat_id: number | string;
	description?: string;
}

export interface PinChatMessageParameters {
	chat_id: number | string;
	message_id: number;
	disable_notification?: boolean;
}

export interface UnpinChatMessageParameters {
	chat_id: number | string;
	message_id?: number;
}

export interface UnpinAllChatMessagesParameters {
	chat_id: number | string;
}

export interface LeaveChatParameters {
	chat_id: number | string;
}

export interface GetChatParameters {
	chat_id: number | string;
}

export interface GetChatAdministratorsParameters {
	chat_id: number | string;
}

export interface GetChatMembersCountParameters {
	chat_id: number | string;
}

export interface GetChatMemberParameters {
	chat_id: number | string;
	user_id: number;
}

export interface SetChatStickerSetParameters {
	chat_id: number | string;
	sticker_set_name: string;
}

export interface DeleteChatStickerSetParameters {
	chat_id: number | string;
}

export interface AnswerCallbackQueryParameters {
	callback_query_id: string;
	text?: string;
	show_alert?: boolean;
	url?: string;
	cache_time?: number;
}

export interface SetMyCommandsParameters {
	commands: BotCommand[];
}

export interface EditMessageTextParameters {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	text: string;
	parse_mode?: string;
	entities?: MessageEntity[];
	disable_web_page_preview?: boolean;
	reply_markup?: InlineKeyboardMarkup;
}

export interface EditMessageCaptionParameters {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
}

export interface EditMessageMediaParameters {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	media: InputMedia;
	reply_markup?: InlineKeyboardMarkup;
}

export interface EditMessageReplyMarkupParameters {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	reply_markup?: InlineKeyboardMarkup;
}

export interface StopPollParameters {
	chat_id: number | string;
	message_id: number;
	reply_markup?: InlineKeyboardMarkup;
}

export interface DeleteMessageParameters {
	chat_id: number | string;
	message_id: number;
}

export interface Sticker {
	file_id: string;
	file_unique_id: string;
	width: number;
	height: number;
	is_animated: boolean;
	thumb?: PhotoSize;
	emoji?: string;
	set_name?: string;
	mask_position?: MaskPosition;
	file_size?: number;
}

export interface StickerSet {
	name: string;
	title: string;
	is_animated: boolean;
	contains_masks: boolean;
	stickers: Sticker[];
	thumb?: PhotoSize;
}

export interface MaskPosition {
	point: string;
	x_shift: number;
	y_shift: number;
	scale: number;
}

export interface SendStickerParameters {
	chat_id: number | string;
	sticker: InputFile | string;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface GetStickerSetParameters {
	name: string;
}

export interface UploadStickerFileParameters {
	user_id: number;
	png_sticker: InputFile;
}

export interface CreateNewStickerSetParameters {
	user_id: number;
	name: string;
	title: string;
	png_sticker?: InputFile | string;
	tgs_sticker?: InputFile;
	emojis: string;
	contains_masks?: boolean;
	mask_position?: MaskPosition;
}

export interface AddStickerToSetParameters {
	user_id: number;
	name: string;
	png_sticker?: InputFile | string;
	tgs_sticker?: InputFile;
	emojis: string;
	mask_position?: MaskPosition;
}

export interface SetStickerPositionInSetParameters {
	sticker: string;
	position: number;
}

export interface DeleteStickerFromSetParameters {
	sticker: string;
}

export interface SetStickerSetThumbParameters {
	name: string;
	user_id: number;
	thumb?: InputFile | string;
}

export interface InlineQuery {
	id: string;
	from: User;
	location?: Location;
	query: string;
	offset: string;
}

export interface AnswerInlineQueryParameters {
	inline_query_id: string;
	results: InlineQueryResult[];
	cache_time?: number;
	is_personal?: boolean;
	next_offset?: string;
	switch_pm_text?: string;
	switch_pm_parameter?: string;
}

export type InlineQueryResult = InlineQueryResultCachedAudio | InlineQueryResultCachedDocument | InlineQueryResultCachedGif | InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedPhoto | InlineQueryResultCachedSticker | InlineQueryResultCachedVideo | InlineQueryResultCachedVoice | InlineQueryResultArticle | InlineQueryResultAudio | InlineQueryResultContact | InlineQueryResultGame | InlineQueryResultDocument | InlineQueryResultGif | InlineQueryResultLocation | InlineQueryResultMpeg4Gif | InlineQueryResultPhoto | InlineQueryResultVenue | InlineQueryResultVideo | InlineQueryResultVoice;


export interface InlineQueryResultArticle {
	type: string;
	id: string;
	title: string;
	input_message_content: InputMessageContent;
	reply_markup?: InlineKeyboardMarkup;
	url?: string;
	hide_url?: boolean;
	description?: string;
	thumb_url?: string;
	thumb_width?: number;
	thumb_height?: number;
}

export interface InlineQueryResultPhoto {
	type: string;
	id: string;
	photo_url: string;
	thumb_url: string;
	photo_width?: number;
	photo_height?: number;
	title?: string;
	description?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultGif {
	type: string;
	id: string;
	gif_url: string;
	gif_width?: number;
	gif_height?: number;
	gif_duration?: number;
	thumb_url: string;
	thumb_mime_type?: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultMpeg4Gif {
	type: string;
	id: string;
	mpeg4_url: string;
	mpeg4_width?: number;
	mpeg4_height?: number;
	mpeg4_duration?: number;
	thumb_url: string;
	thumb_mime_type?: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultVideo {
	type: string;
	id: string;
	video_url: string;
	mime_type: string;
	thumb_url: string;
	title: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	video_width?: number;
	video_height?: number;
	video_duration?: number;
	description?: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultAudio {
	type: string;
	id: string;
	audio_url: string;
	title: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	performer?: string;
	audio_duration?: number;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultVoice {
	type: string;
	id: string;
	voice_url: string;
	title: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	voice_duration?: number;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultDocument {
	type: string;
	id: string;
	title: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	document_url: string;
	mime_type: string;
	description?: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
	thumb_url?: string;
	thumb_width?: number;
	thumb_height?: number;
}

export interface InlineQueryResultLocation {
	type: string;
	id: string;
	latitude: number;
	longitude: number;
	title: string;
	horizontal_accuracy?: number;
	live_period?: number;
	heading?: number;
	proximity_alert_radius?: number;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
	thumb_url?: string;
	thumb_width?: number;
	thumb_height?: number;
}

export interface InlineQueryResultVenue {
	type: string;
	id: string;
	latitude: number;
	longitude: number;
	title: string;
	address: string;
	foursquare_id?: string;
	foursquare_type?: string;
	google_place_id?: string;
	google_place_type?: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
	thumb_url?: string;
	thumb_width?: number;
	thumb_height?: number;
}

export interface InlineQueryResultContact {
	type: string;
	id: string;
	phone_number: string;
	first_name: string;
	last_name?: string;
	vcard?: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
	thumb_url?: string;
	thumb_width?: number;
	thumb_height?: number;
}

export interface InlineQueryResultGame {
	type: string;
	id: string;
	game_short_name: string;
	reply_markup?: InlineKeyboardMarkup;
}

export interface InlineQueryResultCachedPhoto {
	type: string;
	id: string;
	photo_file_id: string;
	title?: string;
	description?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedGif {
	type: string;
	id: string;
	gif_file_id: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedMpeg4Gif {
	type: string;
	id: string;
	mpeg4_file_id: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedSticker {
	type: string;
	id: string;
	sticker_file_id: string;
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedDocument {
	type: string;
	id: string;
	title: string;
	document_file_id: string;
	description?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedVideo {
	type: string;
	id: string;
	video_file_id: string;
	title: string;
	description?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedVoice {
	type: string;
	id: string;
	voice_file_id: string;
	title: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedAudio {
	type: string;
	id: string;
	audio_file_id: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: MessageEntity[];
	reply_markup?: InlineKeyboardMarkup;
	input_message_content?: InputMessageContent;
}

export type InputMessageContent = InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent;

export interface InputTextMessageContent {
	message_text: string;
	parse_mode?: string;
	entities?: MessageEntity[];
	disable_web_page_preview?: boolean;
}

export interface InputLocationMessageContent {
	latitude: number;
	longitude: number;
	horizontal_accuracy?: number;
	live_period?: number;
	heading?: number;
	proximity_alert_radius?: number;
}

export interface InputVenueMessageContent {
	latitude: number;
	longitude: number;
	title: string;
	address: string;
	foursquare_id?: string;
	foursquare_type?: string;
	google_place_id?: string;
	google_place_type?: string;
}

export interface InputContactMessageContent {
	phone_number: string;
	first_name: string;
	last_name?: string;
	vcard?: string;
}

export interface ChosenInlineResult {
	result_id: string;
	from: User;
	location?: Location;
	inline_message_id?: string;
	query: string;
}

export interface SendInvoiceParameters {
	chat_id: number;
	title: string;
	description: string;
	payload: string;
	provider_token: string;
	start_parameter: string;
	currency: string;
	prices: LabeledPrice[];
	provider_data?: string;
	photo_url?: string;
	photo_size?: number;
	photo_width?: number;
	photo_height?: number;
	need_name?: boolean;
	need_phone_number?: boolean;
	need_email?: boolean;
	need_shipping_address?: boolean;
	send_phone_number_to_provider?: boolean;
	send_email_to_provider?: boolean;
	is_flexible?: boolean;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup;
}

export interface AnswerShippingQueryParameters {
	shipping_query_id: string;
	ok: boolean;
	shipping_options?: ShippingOption[];
	error_message?: string;
}

export interface AnswerPreCheckoutQueryParameters {
	pre_checkout_query_id: string;
	ok: boolean;
	error_message?: string;
}

export interface LabeledPrice {
	label: string;
	amount: number;
}

export interface Invoice {
	title: string;
	description: string;
	start_parameter: string;
	currency: string;
	total_amount: number;
}

export interface ShippingAddress {
	country_code: string;
	state: string;
	city: string;
	street_line1: string;
	street_line2: string;
	post_code: string;
}

export interface OrderInfo {
	name?: string;
	phone_number?: string;
	email?: string;
	shipping_address?: ShippingAddress;
}

export interface ShippingOption {
	id: string;
	title: string;
	prices: LabeledPrice[];
}

export interface SuccessfulPayment {
	currency: string;
	total_amount: number;
	invoice_payload: string;
	shipping_option_id?: string;
	order_info?: OrderInfo;
	telegram_payment_charge_id: string;
	provider_payment_charge_id: string;
}

export interface ShippingQuery {
	id: string;
	from: User;
	invoice_payload: string;
	shipping_address: ShippingAddress;
}

export interface PreCheckoutQuery {
	id: string;
	from: User;
	currency: string;
	total_amount: number;
	invoice_payload: string;
	shipping_option_id?: string;
	order_info?: OrderInfo;
}

export interface PassportData {
	data: EncryptedPassportElement[];
	credentials: EncryptedCredentials;
}

export interface PassportFile {
	file_id: string;
	file_unique_id: string;
	file_size: number;
	file_date: number;
}

export interface EncryptedPassportElement {
	type: string;
	data?: string;
	phone_number?: string;
	email?: string;
	files?: PassportFile[];
	front_side?: PassportFile;
	reverse_side?: PassportFile;
	selfie?: PassportFile;
	translation?: PassportFile[];
	hash: string;
}

export interface EncryptedCredentials {
	data: string;
	hash: string;
	secret: string;
}

export interface SetPassportDataErrorsParameters {
	user_id: number;
	errors: PassportElementError[];
}

export type PassportElementError = PassportElementErrorDataField | PassportElementErrorDataField | PassportElementErrorFrontSide | PassportElementErrorReverseSide | PassportElementErrorSelfie | PassportElementErrorFile | PassportElementErrorFiles | PassportElementErrorTranslationFile | PassportElementErrorTranslationFiles | PassportElementErrorUnspecified;

export interface PassportElementErrorDataField {
	source: string;
	type: string;
	field_name: string;
	data_hash: string;
	message: string;
}

export interface PassportElementErrorFrontSide {
	source: string;
	type: string;
	file_hash: string;
	message: string;
}

export interface PassportElementErrorReverseSide {
	source: string;
	type: string;
	file_hash: string;
	message: string;
}

export interface PassportElementErrorSelfie {
	source: string;
	type: string;
	file_hash: string;
	message: string;
}

export interface PassportElementErrorFile {
	source: string;
	type: string;
	file_hash: string;
	message: string;
}

export interface PassportElementErrorFiles {
	source: string;
	type: string;
	file_hashes: string[];
	message: string;
}

export interface PassportElementErrorTranslationFile {
	source: string;
	type: string;
	file_hash: string;
	message: string;
}

export interface PassportElementErrorTranslationFiles {
	source: string;
	type: string;
	file_hashes: string[];
	message: string;
}

export interface PassportElementErrorUnspecified {
	source: string;
	type: string;
	element_hash: string;
	message: string;
}

export interface SendGameParameters {
	chat_id: number;
	game_short_name: string;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: InlineKeyboardMarkup;
}

export interface Game {
	title: string;
	description: string;
	photo: PhotoSize[];
	text?: string;
	text_entities?: MessageEntity[];
	animation?: Animation;
}

export type CallbackGame = unknown;

export interface SetGameScoreParameters {
	user_id: number;
	score: number;
	force?: boolean;
	disable_edit_message?: boolean;
	chat_id?: number;
	message_id?: number;
	inline_message_id?: string;
}

export interface GetGameHighScoresParameters {
	user_id: number;
	chat_id?: number;
	message_id?: number;
	inline_message_id?: string;
}

export interface GameHighScore {
	position: number;
	user: User;
	score: number;
}
