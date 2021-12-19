export interface OfflinePlayer {
    uuid: string;
    whitelisted: boolean;
    banned: boolean;
    op: boolean;
    balance: number;
    displayName: string;
};

export interface Player extends OfflinePlayer {
    address: string;
    port: number;
    exhaustion: number;
    exp: number;
    location: number[];
    dimension: string;
    health: number;
    hunger: number;
    saturation: number;
    gamemode: string;
};

export interface ItemStack {
    count: number;
    slot: number;
    id: string;
};
