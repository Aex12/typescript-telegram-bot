import got from 'got';
import * as Tgt from './types/telegram';

interface TelegramBotConfig {
	token: string;
	baseUrl?: string;
	timeout?: number;
}

class TelegramBot {
	BASE_URL = 'https://api.telegram.org/';
	timeout = 5000;
	token: string;
	client: typeof got;

	constructor (config: TelegramBotConfig) {
		this.token = config.token;

		if (config.baseUrl) {
			this.BASE_URL = config.baseUrl;
		}

		if (config.timeout) {
			this.timeout = config.timeout;
		}

		this.client = got.extend({
			prefixUrl: `${this.BASE_URL}bot${this.token}/`,
			timeout: this.timeout,
			responseType: 'json',
			headers: {
				'user-agent': 'TypescriptTelegramBot/0.0.1',
			},
		});
	}

	async request (endpoint: string, params?: Tgt.RequestParameters): Promise<Tgt.Response> {
		const body = await this.client.post(endpoint, { json: params }).json<Tgt.Response>();

		if (body.ok) {
			return body;
		}

		throw new Error(body.description);
	}

	async getUpdates (params?: Tgt.GetUpdatesParameters): Promise<Tgt.Update> {
		const result = await this.request('getUpdates', params);
		return result.result;
	}

	getMe (): Promise<Tgt.User> {
		return this.request('getMe');
	}
}

export default TelegramBot;
