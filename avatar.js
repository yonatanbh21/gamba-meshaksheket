/**
 * Send a user a link to their avatar
 */
const settings = require('./token');
// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NjkyNzgzMjg0MjMyNjUwODk3.Xnzj_w.gzmlyhOv6bx4kPn3-YwWmRc2w0E');