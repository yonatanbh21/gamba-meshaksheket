  // Extract the required classes from the discord.js module
const { Client, MessageAttachment } = require('discord.js');
const settings = require('./token');
// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  // If the message is '!rip'
  if (message.content === 'trump') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://pmcvariety.files.wordpress.com/2019/03/trump-1.jpg?w=1000&h=563&crop=1');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NjkyNzgzMjg0MjMyNjUwODk3.Xnzj_w.gzmlyhOv6bx4kPn3-YwWmRc2w0E');