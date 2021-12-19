import { Base } from "../base";

export class Economy extends Base {
    pay(uuid: string, amount: number): Promise<string> {
        return this.request(`/economy/pay`, { method: "POST", body: `uuid=${uuid}&amount=${amount}` }, "application/x-www-form-urlencoded");
    }
    debit(uuid: string, amount: number): Promise<string> {
        return this.request(`/economy/debit`, { method: "POST", body: `uuid=${uuid}&amount=${amount}` }, "application/x-www-form-urlencoded");
    }
    economy(): Promise<string> {
        return this.request(`/economy`);
    }

}