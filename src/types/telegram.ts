export interface TelegramUpdate {
	update_id: number;
	message?: TelegramMessage;
	edited_message?: TelegramMessage;
	channel_post?: TelegramMessage;
	edited_channel_post?: TelegramMessage;
	inline_query?: TelegramInlineQuery;
	chosen_inline_result?: TelegramChosenInlineResult;
	callback_query?: TelegramCallbackQuery;
	shipping_query?: TelegramShippingQuery;
	pre_checkout_query?: TelegramPreCheckoutQuery;
	poll?: TelegramPoll;
	poll_answer?: TelegramPollAnswer;
}

export interface TelegramGetUpdatesParameters {
	offset?: number;
	limit?: number;
	timeout?: number;
	allowed_updates?: string[];
}

export interface TelegramSetWebhookParameters {
	url: string;
	certificate?: TelegramInputFile;
	ip_address?: string;
	max_connections?: number;
	allowed_updates?: string[];
	drop_pending_updates?: boolean;
}

export interface TelegramDeleteWebhookParameters {
	drop_pending_updates?: boolean;
}

export interface TelegramWebhookInfo {
	url: string;
	has_custom_certificate: boolean;
	pending_update_count: number;
	ip_address?: string;
	last_error_date?: number;
	last_error_message?: string;
	max_connections?: number;
	allowed_updates?: string[];
}

export interface TelegramUser {
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

export interface TelegramChat {
	id: number;
	type: string;
	title?: string;
	username?: string;
	first_name?: string;
	last_name?: string;
	photo?: TelegramChatPhoto;
	bio?: string;
	description?: string;
	invite_link?: string;
	pinned_message?: TelegramMessage;
	permissions?: TelegramChatPermissions;
	slow_mode_delay?: number;
	sticker_set_name?: string;
	can_set_sticker_set?: boolean;
	linked_chat_id?: number;
	location?: TelegramChatLocation;
}

export interface TelegramMessage {
	message_id: number;
	from?: TelegramUser;
	sender_chat?: TelegramChat;
	date: number;
	chat: TelegramChat;
	forward_from?: TelegramUser;
	forward_from_chat?: TelegramChat;
	forward_from_message_id?: number;
	forward_signature?: string;
	forward_sender_name?: string;
	forward_date?: number;
	reply_to_message?: TelegramMessage;
	via_bot?: TelegramUser;
	edit_date?: number;
	media_group_id?: string;
	author_signature?: string;
	text?: string;
	entities?: TelegramMessageEntity[];
	animation?: TelegramAnimation;
	audio?: TelegramAudio;
	document?: TelegramDocument;
	photo?: TelegramPhotoSize[];
	sticker?: TelegramSticker;
	video?: TelegramVideo;
	video_note?: TelegramVideoNote;
	voice?: TelegramVoice;
	caption?: string;
	caption_entities?: TelegramMessageEntity[];
	contact?: TelegramContact;
	dice?: TelegramDice;
	game?: TelegramGame;
	poll?: TelegramPoll;
	venue?: TelegramVenue;
	location?: TelegramLocation;
	new_chat_members?: TelegramUser[];
	left_chat_member?: TelegramUser;
	new_chat_title?: string;
	new_chat_photo?: TelegramPhotoSize[];
	delete_chat_photo?: true;
	group_chat_created?: true;
	supergroup_chat_created?: true;
	channel_chat_created?: true;
	migrate_to_chat_id?: number;
	migrate_from_chat_id?: number;
	pinned_message?: TelegramMessage;
	invoice?: TelegramInvoice;
	successful_payment?: TelegramSuccessfulPayment;
	connected_website?: string;
	passport_data?: TelegramPassportData;
	proximity_alert_triggered?: TelegramProximityAlertTriggered;
	reply_markup?: TelegramInlineKeyboardMarkup;
}

export interface TelegramMessageId {
	message_id: number;
}

export interface TelegramMessageEntity {
	type: string;
	offset: number;
	length: number;
	url?: string;
	user?: TelegramUser;
	language?: string;
}

export interface TelegramPhotoSize {
	file_id: string;
	file_unique_id: string;
	width: number;
	height: number;
	file_size?: number;
}

export interface TelegramAnimation {
	file_id: string;
	file_unique_id: string;
	width: number;
	height: number;
	duration: number;
	thumb?: TelegramPhotoSize;
	file_name?: string;
	mime_type?: string;
	file_size?: number;
}

export interface TelegramAudio {
	file_id: string;
	file_unique_id: string;
	duration: number;
	performer?: string;
	title?: string;
	file_name?: string;
	mime_type?: string;
	file_size?: number;
	thumb?: TelegramPhotoSize;
}

export interface TelegramDocument {
	file_id: string;
	file_unique_id: string;
	thumb?: TelegramPhotoSize;
	file_name?: string;
	mime_type?: string;
	file_size?: number;
}

export interface TelegramVideo {
	file_id: string;
	file_unique_id: string;
	width: number;
	height: number;
	duration: number;
	thumb?: TelegramPhotoSize;
	file_name?: string;
	mime_type?: string;
	file_size?: number;
}

export interface TelegramVideoNote {
	file_id: string;
	file_unique_id: string;
	length: number;
	duration: number;
	thumb?: TelegramPhotoSize;
	file_size?: number;
}

export interface TelegramVoice {
	file_id: string;
	file_unique_id: string;
	duration: number;
	mime_type?: string;
	file_size?: number;
}

export interface TelegramContact {
	phone_number: string;
	first_name: string;
	last_name?: string;
	user_id?: number;
	vcard?: string;
}

export interface TelegramDice {
	emoji: string;
	value: number;
}

export interface TelegramPollOption {
	text: string;
	voter_count: number;
}

export interface TelegramPollAnswer {
	poll_id: string;
	user: TelegramUser;
	option_ids: number[];
}

export interface TelegramPoll {
	id: string;
	question: string;
	options: TelegramPollOption[];
	total_voter_count: number;
	is_closed: boolean;
	is_anonymous: boolean;
	type: string;
	allows_multiple_answers: boolean;
	correct_option_id?: number;
	explanation?: string;
	explanation_entities?: TelegramMessageEntity[];
	open_period?: number;
	close_date?: number;
}

export interface TelegramLocation {
	longitude: number;
	latitude: number;
	horizontal_accuracy?: number;
	live_period?: number;
	heading?: number;
	proximity_alert_radius?: number;
}

export interface TelegramVenue {
	location: TelegramLocation;
	title: string;
	address: string;
	foursquare_id?: string;
	foursquare_type?: string;
	google_place_id?: string;
	google_place_type?: string;
}

export interface TelegramProximityAlertTriggered {
	traveler: TelegramUser;
	watcher: TelegramUser;
	distance: number;
}

export interface TelegramUserProfilePhotos {
	total_count: number;
	photos: TelegramPhotoSize[];
}

export interface TelegramFile {
	file_id: string;
	file_unique_id: string;
	file_size?: number;
	file_path?: string;
}

export interface TelegramReplyKeyboardMarkup {
	keyboard: TelegramKeyboardButton[];
	resize_keyboard?: boolean;
	one_time_keyboard?: boolean;
	selective?: boolean;
}

export interface TelegramKeyboardButton {
	text: string;
	request_contact?: boolean;
	request_location?: boolean;
	request_poll?: TelegramKeyboardButtonPollType;
}

export interface TelegramKeyboardButtonPollType {
	type?: string;
}

export interface TelegramReplyKeyboardRemove {
	remove_keyboard: true;
	selective?: boolean;
}

export interface TelegramInlineKeyboardMarkup {
	inline_keyboard: TelegramInlineKeyboardButton[];
}

export interface TelegramInlineKeyboardButton {
	text: string;
	url?: string;
	login_url?: TelegramLoginUrl;
	callback_data?: string;
	switch_inline_query?: string;
	switch_inline_query_current_chat?: string;
	callback_game?: TelegramCallbackGame;
	pay?: boolean;
}

export interface TelegramLoginUrl {
	url: string;
	forward_text?: string;
	bot_username?: string;
	request_write_access?: boolean;
}

export interface TelegramCallbackQuery {
	id: string;
	from: TelegramUser;
	message?: TelegramMessage;
	inline_message_id?: string;
	chat_instance: string;
	data?: string;
	game_short_name?: string;
}

export interface TelegramForceReply {
	force_reply: true;
	selective?: boolean;
}

export interface TelegramChatPhoto {
	small_file_id: string;
	small_file_unique_id: string;
	big_file_id: string;
	big_file_unique_id: string;
}

export interface TelegramChatMember {
	user: TelegramUser;
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

export interface TelegramChatPermissions {
	can_send_messages?: boolean;
	can_send_media_messages?: boolean;
	can_send_polls?: boolean;
	can_send_other_messages?: boolean;
	can_add_web_page_previews?: boolean;
	can_change_info?: boolean;
	can_invite_users?: boolean;
	can_pin_messages?: boolean;
}

export interface TelegramChatLocation {
	location: TelegramLocation;
	address: string;
}

export interface TelegramBotCommand {
	command: string;
	description: string;
}

export interface TelegramResponseParameters {
	migrate_to_chat_id?: number;
	retry_after?: number;
}

export interface TelegramInputMediaPhoto {
	type: string;
	media: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
}

export interface TelegramInputMediaVideo {
	type: string;
	media: string;
	thumb?: TelegramInputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	width?: number;
	height?: number;
	duration?: number;
	supports_streaming?: boolean;
}

export interface TelegramInputMediaAnimation {
	type: string;
	media: string;
	thumb?: TelegramInputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	width?: number;
	height?: number;
	duration?: number;
}

export interface TelegramInputMediaAudio {
	type: string;
	media: string;
	thumb?: TelegramInputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	duration?: number;
	performer?: string;
	title?: string;
}

export interface TelegramInputMediaDocument {
	type: string;
	media: string;
	thumb?: TelegramInputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	disable_content_type_detection?: boolean;
}

export interface TelegramSendMessageParameters {
	chat_id: number | string;
	text: string;
	parse_mode?: string;
	entities?: TelegramMessageEntity[];
	disable_web_page_preview?: boolean;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramForwardMessageParameters {
	chat_id: number | string;
	from_chat_id: number | string;
	disable_notification?: boolean;
	message_id: number;
}

export interface TelegramCopyMessageParameters {
	chat_id: number | string;
	from_chat_id: number | string;
	message_id: number;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramSendPhotoParameters {
	chat_id: number | string;
	photo: TelegramInputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramSendAudioParameters {
	chat_id: number | string;
	audio: TelegramInputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	duration?: number;
	performer?: string;
	title?: string;
	thumb?: TelegramInputFile | string;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramSendDocumentParameters {
	chat_id: number | string;
	document: TelegramInputFile | string;
	thumb?: TelegramInputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	disable_content_type_detection?: boolean;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramSendVideoParameters {
	chat_id: number | string;
	video: TelegramInputFile | string;
	duration?: number;
	width?: number;
	height?: number;
	thumb?: TelegramInputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	supports_streaming?: boolean;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramSendAnimationParameters {
	chat_id: number | string;
	animation: TelegramInputFile | string;
	duration?: number;
	width?: number;
	height?: number;
	thumb?: TelegramInputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramSendVoiceParameters {
	chat_id: number | string;
	voice: TelegramInputFile | string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	duration?: number;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramSendVideoNoteParameters {
	chat_id: number | string;
	video_note: TelegramInputFile | string;
	duration?: number;
	length?: number;
	thumb?: TelegramInputFile | string;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramSendMediaGroupParameters {
	chat_id: number | string;
	media: Array<TelegramInputMediaAudio | TelegramInputMediaDocument | TelegramInputMediaPhoto | TelegramInputMediaVideo>;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
}

export interface TelegramSendLocationParameters {
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
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramEditMessageLiveLocationParameters {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	latitude: number;
	longitude: number;
	horizontal_accuracy?: number;
	heading?: number;
	proximity_alert_radius?: number;
	reply_markup?: TelegramInlineKeyboardMarkup;
}

export interface TelegramStopMessageLiveLocationParameters {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	reply_markup?: TelegramInlineKeyboardMarkup;
}

export interface TelegramSendVenueParameters {
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
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramSendContactParameters {
	chat_id: number | string;
	phone_number: string;
	first_name: string;
	last_name?: string;
	vcard?: string;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramSendPollParameters {
	chat_id: number | string;
	question: string;
	options: string[];
	is_anonymous?: boolean;
	type?: string;
	allows_multiple_answers?: boolean;
	correct_option_id?: number;
	explanation?: string;
	explanation_parse_mode?: string;
	explanation_entities?: TelegramMessageEntity[];
	open_period?: number;
	close_date?: number;
	is_closed?: boolean;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramSendDiceParameters {
	chat_id: number | string;
	emoji?: string;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramSendChatActionParameters {
	chat_id: number | string;
	action: string;
}

export interface TelegramGetUserProfilePhotosParameters {
	user_id: number;
	offset?: number;
	limit?: number;
}

export interface TelegramGetFileParameters {
	file_id: string;
}

export interface TelegramKickChatMemberParameters {
	chat_id: number | string;
	user_id: number;
	until_date?: number;
}

export interface TelegramUnbanChatMemberParameters {
	chat_id: number | string;
	user_id: number;
	only_if_banned?: boolean;
}

export interface TelegramRestrictChatMemberParameters {
	chat_id: number | string;
	user_id: number;
	permissions: TelegramChatPermissions;
	until_date?: number;
}

export interface TelegramPromoteChatMemberParameters {
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

export interface TelegramSetChatAdministratorCustomTitleParameters {
	chat_id: number | string;
	user_id: number;
	custom_title: string;
}

export interface TelegramSetChatPermissionsParameters {
	chat_id: number | string;
	permissions: TelegramChatPermissions;
}

export interface TelegramExportChatInviteLinkParameters {
	chat_id: number | string;
}

export interface TelegramSetChatPhotoParameters {
	chat_id: number | string;
	photo: TelegramInputFile;
}

export interface TelegramDeleteChatPhotoParameters {
	chat_id: number | string;
}

export interface TelegramSetChatTitleParameters {
	chat_id: number | string;
	title: string;
}

export interface TelegramSetChatDescriptionParameters {
	chat_id: number | string;
	description?: string;
}

export interface TelegramPinChatMessageParameters {
	chat_id: number | string;
	message_id: number;
	disable_notification?: boolean;
}

export interface TelegramUnpinChatMessageParameters {
	chat_id: number | string;
	message_id?: number;
}

export interface TelegramUnpinAllChatMessagesParameters {
	chat_id: number | string;
}

export interface TelegramLeaveChatParameters {
	chat_id: number | string;
}

export interface TelegramGetChatParameters {
	chat_id: number | string;
}

export interface TelegramGetChatAdministratorsParameters {
	chat_id: number | string;
}

export interface TelegramGetChatMembersCountParameters {
	chat_id: number | string;
}

export interface TelegramGetChatMemberParameters {
	chat_id: number | string;
	user_id: number;
}

export interface TelegramSetChatStickerSetParameters {
	chat_id: number | string;
	sticker_set_name: string;
}

export interface TelegramDeleteChatStickerSetParameters {
	chat_id: number | string;
}

export interface TelegramAnswerCallbackQueryParameters {
	callback_query_id: string;
	text?: string;
	show_alert?: boolean;
	url?: string;
	cache_time?: number;
}

export interface TelegramSetMyCommandsParameters {
	commands: TelegramBotCommand[];
}

export interface TelegramEditMessageTextParameters {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	text: string;
	parse_mode?: string;
	entities?: TelegramMessageEntity[];
	disable_web_page_preview?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup;
}

export interface TelegramEditMessageCaptionParameters {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	reply_markup?: TelegramInlineKeyboardMarkup;
}

export interface TelegramEditMessageMediaParameters {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	media: TelegramInputMedia;
	reply_markup?: TelegramInlineKeyboardMarkup;
}

export interface TelegramEditMessageReplyMarkupParameters {
	chat_id?: number | string;
	message_id?: number;
	inline_message_id?: string;
	reply_markup?: TelegramInlineKeyboardMarkup;
}

export interface TelegramStopPollParameters {
	chat_id: number | string;
	message_id: number;
	reply_markup?: TelegramInlineKeyboardMarkup;
}

export interface TelegramDeleteMessageParameters {
	chat_id: number | string;
	message_id: number;
}

export interface TelegramSticker {
	file_id: string;
	file_unique_id: string;
	width: number;
	height: number;
	is_animated: boolean;
	thumb?: TelegramPhotoSize;
	emoji?: string;
	set_name?: string;
	mask_position?: TelegramMaskPosition;
	file_size?: number;
}

export interface TelegramStickerSet {
	name: string;
	title: string;
	is_animated: boolean;
	contains_masks: boolean;
	stickers: TelegramSticker[];
	thumb?: TelegramPhotoSize;
}

export interface TelegramMaskPosition {
	point: string;
	x_shift: number;
	y_shift: number;
	scale: number;
}

export interface TelegramSendStickerParameters {
	chat_id: number | string;
	sticker: TelegramInputFile | string;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup | TelegramReplyKeyboardRemove | TelegramForceReply;
}

export interface TelegramGetStickerSetParameters {
	name: string;
}

export interface TelegramUploadStickerFileParameters {
	user_id: number;
	png_sticker: TelegramInputFile;
}

export interface TelegramCreateNewStickerSetParameters {
	user_id: number;
	name: string;
	title: string;
	png_sticker?: TelegramInputFile | string;
	tgs_sticker?: TelegramInputFile;
	emojis: string;
	contains_masks?: boolean;
	mask_position?: TelegramMaskPosition;
}

export interface TelegramAddStickerToSetParameters {
	user_id: number;
	name: string;
	png_sticker?: TelegramInputFile | string;
	tgs_sticker?: TelegramInputFile;
	emojis: string;
	mask_position?: TelegramMaskPosition;
}

export interface TelegramSetStickerPositionInSetParameters {
	sticker: string;
	position: number;
}

export interface TelegramDeleteStickerFromSetParameters {
	sticker: string;
}

export interface TelegramSetStickerSetThumbParameters {
	name: string;
	user_id: number;
	thumb?: TelegramInputFile | string;
}

export interface TelegramInlineQuery {
	id: string;
	from: TelegramUser;
	location?: TelegramLocation;
	query: string;
	offset: string;
}

export interface TelegramAnswerInlineQueryParameters {
	inline_query_id: string;
	results: TelegramInlineQueryResult[];
	cache_time?: number;
	is_personal?: boolean;
	next_offset?: string;
	switch_pm_text?: string;
	switch_pm_parameter?: string;
}

export type TelegramInlineQueryResult = TelegramInlineQueryResultCachedAudio | TelegramInlineQueryResultCachedDocument | TelegramInlineQueryResultCachedGif | TelegramInlineQueryResultCachedMpeg4Gif | TelegramInlineQueryResultCachedPhoto | TelegramInlineQueryResultCachedSticker | TelegramInlineQueryResultCachedVideo | TelegramInlineQueryResultCachedVoice | TelegramInlineQueryResultArticle | TelegramInlineQueryResultAudio | TelegramInlineQueryResultContact | TelegramInlineQueryResultGame | TelegramInlineQueryResultDocument | TelegramInlineQueryResultGif | TelegramInlineQueryResultLocation | TelegramInlineQueryResultMpeg4Gif | TelegramInlineQueryResultPhoto | TelegramInlineQueryResultVenue | TelegramInlineQueryResultVideo | TelegramInlineQueryResultVoice;


export interface TelegramInlineQueryResultArticle {
	type: string;
	id: string;
	title: string;
	input_message_content: TelegramInputMessageContent;
	reply_markup?: TelegramInlineKeyboardMarkup;
	url?: string;
	hide_url?: boolean;
	description?: string;
	thumb_url?: string;
	thumb_width?: number;
	thumb_height?: number;
}

export interface TelegramInlineQueryResultPhoto {
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
	caption_entities?: TelegramMessageEntity[];
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export interface TelegramInlineQueryResultGif {
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
	caption_entities?: TelegramMessageEntity[];
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export interface TelegramInlineQueryResultMpeg4Gif {
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
	caption_entities?: TelegramMessageEntity[];
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export interface TelegramInlineQueryResultVideo {
	type: string;
	id: string;
	video_url: string;
	mime_type: string;
	thumb_url: string;
	title: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	video_width?: number;
	video_height?: number;
	video_duration?: number;
	description?: string;
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export interface TelegramInlineQueryResultAudio {
	type: string;
	id: string;
	audio_url: string;
	title: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	performer?: string;
	audio_duration?: number;
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export interface TelegramInlineQueryResultVoice {
	type: string;
	id: string;
	voice_url: string;
	title: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	voice_duration?: number;
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export interface TelegramInlineQueryResultDocument {
	type: string;
	id: string;
	title: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	document_url: string;
	mime_type: string;
	description?: string;
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
	thumb_url?: string;
	thumb_width?: number;
	thumb_height?: number;
}

export interface TelegramInlineQueryResultLocation {
	type: string;
	id: string;
	latitude: number;
	longitude: number;
	title: string;
	horizontal_accuracy?: number;
	live_period?: number;
	heading?: number;
	proximity_alert_radius?: number;
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
	thumb_url?: string;
	thumb_width?: number;
	thumb_height?: number;
}

export interface TelegramInlineQueryResultVenue {
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
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
	thumb_url?: string;
	thumb_width?: number;
	thumb_height?: number;
}

export interface TelegramInlineQueryResultContact {
	type: string;
	id: string;
	phone_number: string;
	first_name: string;
	last_name?: string;
	vcard?: string;
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
	thumb_url?: string;
	thumb_width?: number;
	thumb_height?: number;
}

export interface TelegramInlineQueryResultGame {
	type: string;
	id: string;
	game_short_name: string;
	reply_markup?: TelegramInlineKeyboardMarkup;
}

export interface TelegramInlineQueryResultCachedPhoto {
	type: string;
	id: string;
	photo_file_id: string;
	title?: string;
	description?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export interface TelegramInlineQueryResultCachedGif {
	type: string;
	id: string;
	gif_file_id: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export interface TelegramInlineQueryResultCachedMpeg4Gif {
	type: string;
	id: string;
	mpeg4_file_id: string;
	title?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export interface TelegramInlineQueryResultCachedSticker {
	type: string;
	id: string;
	sticker_file_id: string;
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export interface TelegramInlineQueryResultCachedDocument {
	type: string;
	id: string;
	title: string;
	document_file_id: string;
	description?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export interface TelegramInlineQueryResultCachedVideo {
	type: string;
	id: string;
	video_file_id: string;
	title: string;
	description?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export interface TelegramInlineQueryResultCachedVoice {
	type: string;
	id: string;
	voice_file_id: string;
	title: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export interface TelegramInlineQueryResultCachedAudio {
	type: string;
	id: string;
	audio_file_id: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: TelegramMessageEntity[];
	reply_markup?: TelegramInlineKeyboardMarkup;
	input_message_content?: TelegramInputMessageContent;
}

export type TelegramInputMessageContent = TelegramInputTextMessageContent | TelegramInputLocationMessageContent | TelegramInputVenueMessageContent | TelegramInputContactMessageContent;

export interface TelegramInputTextMessageContent {
	message_text: string;
	parse_mode?: string;
	entities?: TelegramMessageEntity[];
	disable_web_page_preview?: boolean;
}

export interface TelegramInputLocationMessageContent {
	latitude: number;
	longitude: number;
	horizontal_accuracy?: number;
	live_period?: number;
	heading?: number;
	proximity_alert_radius?: number;
}

export interface TelegramInputVenueMessageContent {
	latitude: number;
	longitude: number;
	title: string;
	address: string;
	foursquare_id?: string;
	foursquare_type?: string;
	google_place_id?: string;
	google_place_type?: string;
}

export interface TelegramInputContactMessageContent {
	phone_number: string;
	first_name: string;
	last_name?: string;
	vcard?: string;
}

export interface TelegramChosenInlineResult {
	result_id: string;
	from: TelegramUser;
	location?: TelegramLocation;
	inline_message_id?: string;
	query: string;
}

export interface TelegramSendInvoiceParameters {
	chat_id: number;
	title: string;
	description: string;
	payload: string;
	provider_token: string;
	start_parameter: string;
	currency: string;
	prices: TelegramLabeledPrice[];
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
	reply_markup?: TelegramInlineKeyboardMarkup;
}

export interface TelegramAnswerShippingQueryParameters {
	shipping_query_id: string;
	ok: boolean;
	shipping_options?: TelegramShippingOption[];
	error_message?: string;
}

export interface TelegramAnswerPreCheckoutQueryParameters {
	pre_checkout_query_id: string;
	ok: boolean;
	error_message?: string;
}

export interface TelegramLabeledPrice {
	label: string;
	amount: number;
}

export interface TelegramInvoice {
	title: string;
	description: string;
	start_parameter: string;
	currency: string;
	total_amount: number;
}

export interface TelegramShippingAddress {
	country_code: string;
	state: string;
	city: string;
	street_line1: string;
	street_line2: string;
	post_code: string;
}

export interface TelegramOrderInfo {
	name?: string;
	phone_number?: string;
	email?: string;
	shipping_address?: TelegramShippingAddress;
}

export interface TelegramShippingOption {
	id: string;
	title: string;
	prices: TelegramLabeledPrice[];
}

export interface TelegramSuccessfulPayment {
	currency: string;
	total_amount: number;
	invoice_payload: string;
	shipping_option_id?: string;
	order_info?: TelegramOrderInfo;
	telegram_payment_charge_id: string;
	provider_payment_charge_id: string;
}

export interface TelegramShippingQuery {
	id: string;
	from: TelegramUser;
	invoice_payload: string;
	shipping_address: TelegramShippingAddress;
}

export interface TelegramPreCheckoutQuery {
	id: string;
	from: TelegramUser;
	currency: string;
	total_amount: number;
	invoice_payload: string;
	shipping_option_id?: string;
	order_info?: TelegramOrderInfo;
}

export interface TelegramPassportData {
	data: TelegramEncryptedPassportElement[];
	credentials: TelegramEncryptedCredentials;
}

export interface TelegramPassportFile {
	file_id: string;
	file_unique_id: string;
	file_size: number;
	file_date: number;
}

export interface TelegramEncryptedPassportElement {
	type: string;
	data?: string;
	phone_number?: string;
	email?: string;
	files?: TelegramPassportFile[];
	front_side?: TelegramPassportFile;
	reverse_side?: TelegramPassportFile;
	selfie?: TelegramPassportFile;
	translation?: TelegramPassportFile[];
	hash: string;
}

export interface TelegramEncryptedCredentials {
	data: string;
	hash: string;
	secret: string;
}

export interface TelegramSetPassportDataErrorsParameters {
	user_id: number;
	errors: TelegramPassportElementError[];
}

export type TelegramPassportElementError = TelegramPassportElementErrorDataField | TelegramPassportElementErrorDataField | TelegramPassportElementErrorFrontSide | TelegramPassportElementErrorReverseSide | TelegramPassportElementErrorSelfie | TelegramPassportElementErrorFile | TelegramPassportElementErrorFiles | TelegramPassportElementErrorTranslationFile | TelegramPassportElementErrorTranslationFiles | TelegramPassportElementErrorUnspecified;

export interface TelegramPassportElementErrorDataField {
	source: string;
	type: string;
	field_name: string;
	data_hash: string;
	message: string;
}

export interface TelegramPassportElementErrorFrontSide {
	source: string;
	type: string;
	file_hash: string;
	message: string;
}

export interface TelegramPassportElementErrorReverseSide {
	source: string;
	type: string;
	file_hash: string;
	message: string;
}

export interface TelegramPassportElementErrorSelfie {
	source: string;
	type: string;
	file_hash: string;
	message: string;
}

export interface TelegramPassportElementErrorFile {
	source: string;
	type: string;
	file_hash: string;
	message: string;
}

export interface TelegramPassportElementErrorFiles {
	source: string;
	type: string;
	file_hashes: string[];
	message: string;
}

export interface TelegramPassportElementErrorTranslationFile {
	source: string;
	type: string;
	file_hash: string;
	message: string;
}

export interface TelegramPassportElementErrorTranslationFiles {
	source: string;
	type: string;
	file_hashes: string[];
	message: string;
}

export interface TelegramPassportElementErrorUnspecified {
	source: string;
	type: string;
	element_hash: string;
	message: string;
}

export interface TelegramSendGameParameters {
	chat_id: number;
	game_short_name: string;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	allow_sending_without_reply?: boolean;
	reply_markup?: TelegramInlineKeyboardMarkup;
}

export interface TelegramGame {
	title: string;
	description: string;
	photo: TelegramPhotoSize[];
	text?: string;
	text_entities?: TelegramMessageEntity[];
	animation?: TelegramAnimation;
}

export type TelegramCallbackGame = unknown;

export interface TelegramSetGameScoreParameters {
	user_id: number;
	score: number;
	force?: boolean;
	disable_edit_message?: boolean;
	chat_id?: number;
	message_id?: number;
	inline_message_id?: string;
}

export interface TelegramGetGameHighScoresParameters {
	user_id: number;
	chat_id?: number;
	message_id?: number;
	inline_message_id?: string;
}

export interface TelegramGameHighScore {
	position: number;
	user: TelegramUser;
	score: number;
}
