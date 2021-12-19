export interface Whitelist {
    uuid: string;
    name: string;
}

export interface Health {
    cpus: number;
    uptime: number;
    totalMemory: number;
    maxMemory: number;
    freeMemory: number;
}

export interface Ban {
    target: string;
    source: string;
    reason: string;
    expiration: string;
}

export interface Server {
    name: string;
    motd: string;
    version: string;
    bukkitVersion: string;
    tps: string;
    health: Health;
    bannedIps: Ban[];
    bannedPlayers: Ban[];
    whitelistedPlayers: Whitelist[];
};

export interface World {
    name: string;
    uuid: string;
    time: number;
    storm: boolean;
    thundering: boolean;
    generateStructures: boolean;
    allowAnimals: boolean;
    allowMonsters: boolean;
    difficulty: number;
    environment: number;
    seed: number;
};

export interface ScoreBoard {
    objectives: string[];
    entries: string[];
};