import { App } from 'vue';
export declare function setupDevtools(app: App): void;
/**
 * Refresh devtools inspector
 *
 * Tree + State
 */
export declare const refreshInspector: () => Promise<void>;
/**
 * Add timeline event
 */
export declare const addTimelineEvent: ({ data, title }: {
    data: any;
    title?: string | undefined;
}) => void;
