import { Base } from "../base";

export class Chat extends Base {
    broadcast(message: string): Promise<string> {
        return this.request("/chat/broadcast", { method: "POST", body: `message=${message}` }, "application/x-www-form-urlencoded");
    }
    tell(playerUuid: string, message: string): Promise<string> {
        return this.request("/chat/tell", { method: "POST", body: `playerUuid=${playerUuid}&message=${message}` }, "application/x-www-form-urlencoded");
    }
}