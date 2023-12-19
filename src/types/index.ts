export interface ApplicationConfigsOptions {
    initializedOptions: string[];
    onPositionChange: (positions: string[]) => void;
    onComplete: (positions: string[]) => void;
    onInit: () => void;
}

export interface ApplicationConfigs {
    selector: string;
    options?: ApplicationConfigsOptions;
}

declare global {
    interface Window {
        TEST_CAR_APP: {
            init: (config: ApplicationConfigs) => void;
        }
    }
}