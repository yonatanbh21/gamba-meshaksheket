const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./token');
const ytdl = require('ytdl-core');

client.login(settings.token);

client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', async message => {
  console.log('message recieved');
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;
  let fileName = 'https://www.youtube.com/watch?v=5OtbSxGnCS0';
  console.log('after play');
  if (message.content.startsWith('/play')) {
    console.log('message is play');
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      console.log('message before join');
      const connection = await message.member.voice.channel.join();
      console.log('message after join');
      // ReadableStreams, in this example YouTube audio
      const arr = message.content.split(' ');
      if (arr.length > 1) {
        fileName = arr[1];
      }
      connection.play(ytdl(fileName, { filter: 'audioonly' }));

      // Files on the internet
      // connection.play('http://www.sample-videos.com/audio/mp3/wave.mp3');

      // Local files
      //connection.play('/home/discord/audio.mp3');
    }
  }
});
