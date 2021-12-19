import { Base } from "../base";
import { Server as IServer, World } from "./interfaces";
import { Whitelist, ScoreBoard } from "./interfaces";

export class Server extends Base {
    ping(): Promise<string> {
        return this.request<string>(`/ping`);
    }
    getServer(): Promise<IServer> {
        return this.request<IServer>(`/server`);
    }
    execCommand(command: string): Promise<string> {
        if (command.startsWith("/")) {
            command = command.substring(1);
        }
        return this.request<string>(`/server/exec`, { method: "POST", body: `command=${command}` }, "application/x-www-form-urlencoded");
    }
    getWhitelist(): Promise<Whitelist[]> {
        return this.request<Whitelist[]>(`/server/whitelist`);
    }
    addWhitelist(uuid: string, name: string): Promise<string> {
        return this.request<string>(`/server/whitelist`, { method: "POST", body: `uuid=${uuid}&name=${name}` }, "application/x-www-form-urlencoded");
    }
    getWorlds(): Promise<World[]> {
        return this.request<World[]>(`/worlds`);
    }
    saveWorld(uuid: string): Promise<string> {
        return this.request<string>(`/worlds/${uuid}/save`, { method: "POST" });
    }
    getScoreBoards(): Promise<ScoreBoard[]> {
        return this.request<ScoreBoard[]>(`/scoreboard`);
    }
    getScoreBoard(name: string): Promise<ScoreBoard> {
        return this.request<ScoreBoard>(`/scoreboard/${name}`);
    }


}