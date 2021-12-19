import { Base } from "../base";
import { Plugin } from "./interfaces";

export class Plugins extends Base {
    getPlugins(): Promise<Plugin[]> {
        return this.request<Plugin[]>(`/plugins`);
    }
}