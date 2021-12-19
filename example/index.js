import ServerTap from "../dist/index.js";

const client = new ServerTap({ baseUrl: "http://localhost:4567" });

(async () => {
  const allPlayers = await client.getAllPlayers();
  const players = await client.getPlayers();
  const server = await client.getServer();
  const worlds = await client.getWorlds();
  const scoreboards = await client.getScoreBoard();
  const plugins = await client.getPlugins();
  const ping = await client.ping();
  const results = await client.execCommand("/help");
  const whitelist = await client.getWhitelist();
  console.log(server);
  console.log(worlds);
  console.log("Current Players: ", players);
  console.log("All Players: ", allPlayers);
  console.log("Scoreboards: ", scoreboards);
  console.log("Plugins: ", plugins);
  console.log("Ping: ", ping);
  console.log("Results: ", results);
  console.log("Whitelist: ", whitelist);
})();
