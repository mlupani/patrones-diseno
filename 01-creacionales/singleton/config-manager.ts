

class ConfigManager {

    private config: Record<string, string>;
    private static instance: ConfigManager;

    private constructor() {
        this.config = {};
    }

    static getInstance(): ConfigManager {
        if(!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    public setConfig(key: string, value: string): void {
        this.config[key] = value;
    }

    public getConfig(key: string): string | null {
        return this.config[key] || null;
    }

    public getAllConfig(): Record<string, string> {
        return {...this.config};
    }
}

export const configManager = ConfigManager.getInstance();