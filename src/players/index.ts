import { Base } from "../base";
import { OfflinePlayer, Player } from "./interfaces";

export class Players extends Base {
    getAllPlayers(): Promise<OfflinePlayer[]> {
        return this.request<OfflinePlayer[]>(`/players/all`);
    }
    getPlayers(): Promise<Player[]> {
        return this.request<Player[]>(`/players`);
    }
    getOps(): Promise<OfflinePlayer[]> {
        return this.request<OfflinePlayer[]>(`/server/ops`);
    }
    addOp(playerUuid: string): Promise<string> {
        return this.request(`/server/ops`, { method: "POST", body: `playerUuid=${playerUuid}` }, "application/x-www-form-urlencoded");
    }
    removeOp(playerUuid: string): Promise<string> {
        return this.request(`/server/ops`, { method: "DELETE", body: `playerUuid=${playerUuid}` }, "application/x-www-form-urlencoded");
    }
    getPlayer(playerUuid: string): Promise<Player> {
        return this.request<Player>(`/players/${playerUuid}`);
    }
    getPlayerInventory(playerUuid: string, worldUuid: string): Promise<string> {
        return this.request(`/players/${playerUuid}/${worldUuid}/inventory`);
    }
}