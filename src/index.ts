import { Players } from "./players";
import { Server } from "./server";
import { Chat } from "./chat";
import { Economy } from "./economy";
import { PlaceHolderApi } from "./placeholder";
import { Plugins } from "./plugins";
import { Base } from "./base";

import { applyMixins } from "./utils";


class ServerTap extends Base { }
interface ServerTap extends Players, Server, Chat, Economy, PlaceHolderApi, Plugins { }
applyMixins(ServerTap, [Players, Server, Chat, Economy, PlaceHolderApi, Plugins]);

export default ServerTap;