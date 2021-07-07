const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
dotenv.config();
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

/*
USING ! TO INTERACT WITH BOT W/ RESPONSE
*/
client.on('interaction', async (interaction) => {
	if (!interaction.isCommand()) return;
	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});
client.on('message', (message) => {
	if (message.content === '!ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
});
/*
TESTING BOT COMMUNICATION WITH PREFIX VARIABLE
*/
client.on('message', (message) => {
	const prefix = 'helloword?';
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`Don't argue with me, ${message.author}!`);
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	}
});

/*
 	SLASH COMMANDS
	 WORK IN PROGRESS
*/
client.api
	.applications(process.env.CLIENT_ID)
	.guilds(process.env.SERVER_ID)
	.commands.post({
		data: {
			name: 'ping',
			description: 'ping pong!',
		},
	});

client.ws.on('INTERACTION_CREATE', async (interaction) => {
	if (interaction.data === 'ping') {
		console.log(interaction);
		return client.api
			.interactions(interaction.id, interaction.token)
			.callback.post({
				data: {
					type: 4,
					data: {
						content: 'hello world!',
					},
				},
			});
	}
});

client.login(process.env.DISCORD_TOKEN);
