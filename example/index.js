const ServerTap = require("../dist");

(async () => {
  const server = new ServerTap({ baseUrl: "http://localhost:4567" });
  const players = await server.getPlayers();
  console.log(players);
  const me = players.find((p) => p.displayName === "ATechAdventurer");
  console.log(me);
  console.log(await server.addOp(me.uuid));
})();
