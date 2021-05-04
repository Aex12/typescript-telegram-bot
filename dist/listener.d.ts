import TelegramClient from './client';
import * as Tgt from './types/telegram';
export interface TelegramListenerOptions {
    client: TelegramClient;
}
declare type UpdateHandler = (update: Tgt.Update) => void;
export declare class TelegramListener {
    client: TelegramClient;
    updateHandlers: UpdateHandler[];
    updateOffset: number;
    constructor(config: TelegramListenerOptions);
    onUpdate(callback: UpdateHandler): void;
    processUpdates(update: Tgt.Update): void;
    startPolling(): void;
}
export {};
