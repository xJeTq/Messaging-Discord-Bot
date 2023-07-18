const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project Is Running!");
})

app.get("/", (req, res) => {
  res.send("Hello World!");
})

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("message", message => {
  if(message.content.includes("Chungus")) {
    message.channel.send("Did someone say my name?");
  }
  if(message.content.includes("chungus")) {
    message.channel.send("Did someone say my name?");
  }
})

client.login(process.env.token);