const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');

module.exports = class MusicTriviaCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'music-trivia',
      memberName: 'music-trivia',
      group: 'music',
      description: "Engage in a 2000's music quiz with your friends!",
      guildOnly: true,
      clientPermissions: ['SPEAK', 'CONNECT'],
      throttling: {
        usages: 1,
        duration: 10
      }
    });
  }
   async run(message) {
  message.author.send("IF YOU WANT TO USE THIS COMMAND THEN YOU HAVE TO BUY PRO CODES - **CONTACT CTK WARRIOR TO BUY** https://discord.gg/w8r5U9z");
  message.channel.send("Check your Dm");
  }
}