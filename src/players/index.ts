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
    addOp(uuid: string): Promise<string> {
        return this.request(`/server/ops`, { method: "POST", body: `uuid=${uuid}` }, "application/x-www-form-urlencoded");
    }
    removeOp(uuid: string): Promise<string> {
        return this.request(`/server/ops`, { method: "DELETE", body: `uuid=${uuid}` }, "application/x-www-form-urlencoded");
    }
    getPlayer(uuid: string): Promise<Player> {
        return this.request<Player>(`/players/${uuid}`);
    }
    getPlayerInventory(playerUuid: string, worldUuid: string): Promise<string> {
        return this.request(`/players/${playerUuid}/${worldUuid}/inventory`);
    }
}