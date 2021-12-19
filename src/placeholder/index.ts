import { Base } from "../base";

export class PlaceHolderApi extends Base {
    replace(message: string, uuid: string): Promise<string> {
        return this.request(`/placeholder/replace`, { method: "POST", body: `message=${message},uuid=${uuid}` }, "application/x-www-form-urlencoded");
    }
}