const { Command } = require('discord.js-commando');

module.exports = class StopMusicTriviaCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'stop-trivia',
      aliases: [
        'stop-music-trivia',
        'skip-trivia',
        'end-trivia',
        'stop-trivia'
      ],
      memberName: 'stop-trivia',
      group: 'music',
      description: 'End the music trivia',
      guildOnly: true,
      clientPermissions: ['SPEAK', 'CONNECT']
    });
  }
   async run(message) {
  message.author.send("IF YOU WANT TO USE THIS COMMAND THEN YOU HAVE TO BUY PRO CODES - **CONTACT CTK WARRIOR TO BUY** https://discord.gg/w8r5U9z");
  message.channel.send("Check your Dm");
  }
}