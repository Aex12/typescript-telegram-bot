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
		(async () => {
			const updates = await this.client.getUpdates({ 
				offset: this.updateOffset,
				timeout: 30,
			})
			const lastUpdate = updates[updates.length-1]

			if (lastUpdate) {
				this.updateOffset = lastUpdate.update_id + 1;
			}

			process.nextTick(() => {
				this.startPolling();
			});

			if (updates) {
				updates.forEach((update: Tgt.Update) => this.processUpdates(update));
			}
		})();
	}
}
