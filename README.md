<h1 align="center">
ServerTap-JS
</h1>
<p align="center">
A small client for interacting with https://github.com/phybros/servertap using Typescript or Javascript
</p>
<hr>
# Installation
```bash
npm install --save servertap-js
```

# Usage
```javascript
const ServerTap = require('servertap-js');

const server = new ServerTap({apiKey: "xxxxxxxxxx", baseUrl: "http://localhost:4567"});
(async () => {
    const players = await server.getPlayers();
    const worlds = await server.getWorlds();
    const plugins = await server.getPlugins();

    console.log(players, worlds, plugins);
})();
```


