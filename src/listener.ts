import { TelegramClient } from './client';
import * as Tgt from './types/telegram';

export interface TelegramListenerOptions {
	client: TelegramClient,
}

type UpdateHandler = (update: Tgt.Update) => void;

export class TelegramListener {
	client: TelegramClient;
	updateHandlers: UpdateHandler[] = [];
	updateOffset = 0;

	constructor (config: TelegramListenerOptions) {
		this.client = config.client;
	}

	onUpdate (callback: UpdateHandler): void {
		this.updateHandlers.push(callback);
	}

	processUpdates (update: Tgt.Update): void {
		this.updateHandlers.forEach((handle) => handle(update));
	}

	startPolling (): void {
		this.client.getUpdates({ 
			offset: this.updateOffset,
			timeout: 30,
		})
			.then((updates) => {
				const lastUpdate = updates[updates.length-1]

				if (lastUpdate) {
					this.updateOffset = lastUpdate.update_id + 1;
				}

				this.startPolling();

				updates.forEach((update) => this.processUpdates(update));
			})
	}
}