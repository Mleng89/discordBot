const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
// const frog = require('../src/frog');
dotenv.config();
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});
/* const user = client.users
.fetch('process.env.MY_ID')
.then((user) => console.log(user))
.catch(console.error);
*/

// console.log('......', users);

/*
USING ! TO INTERACT WITH BOT W/ RESPONSE
*/

client.on('message', (message) => {
	/**
	 * COMMANDS FOR THE BOT
	 */
	if (message.content === '!commands') {
		message.channel.send(
			`Hey, ${message.author}, these are the commands I can do so far: 
			\`\`\` 
			!server
			!user-info
			!heybuddy
			!frog
			!pikachu
			\`\`\` 
			`
		);
	}
	/**
	 * RESPONSE FOR HELLO
	 */
	if (message.content === '!heybuddy') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send(`GFY, don't hey buddy me, ${message.author}`);
	}
	/**
	 * RESPONSE FOR FROG
	 */
	if (message.content === '!frog') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send(`\`\`\` 
	┼┼┼┼┼┼┼┼┼┼███┼┼┼┼┼███
	┼┼┼┼┼┼┼┼███████┼███████
	┼┼┼┼┼┼┼┼██░░░█████░░░██
	┼┼┼┼┼┼┼██░██░░███░██░░██
	┼┼┼┼┼┼┼██░██░░███░██░░██
	┼┼┼┼┼┼┼██░░░░░███░░░░░██
	┼┼┼┼┼┼┼███░░░█████░░░███
	┼┼┼┼┼┼███████████████████
	┼┼┼┼┼███████░░██░░████████
	┼┼┼┼███████████████████████
	┼┼┼██████▒▒▒▒▒▒▒▒▒▒▒▒▒██████
	┼┼┼██▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒▒▒░▒▒██
	┼┼┼█▒░▒▒▒░▒▒▒▒▒░▒▒▒▒▒▒▒▒▒▒▒█
	┼┼██▒▒░░░▒▒░▒▒▒▒▒▒▒▒▒▒░░░▒▒██
	┼┼██▒░░█░░▒▒▒▒▒▒▒░▒▒▒░░█░░▒██
	┼███▒░░░██░░░░░░░░░░░██░░░▒███
	█████▒▒░░░███████████░░░▒▒█████
	█████┼▒▒▒░░░░░░░░░░░░░▒▒▒┼█████
	┼█████┼▒▒▒▒░░░░░░░░░▒▒▒▒┼█████
	┼┼██████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███████
	┼█████████┼┼┼┼┼┼┼┼┼┼┼██████████
	███┼███┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼███┼████
	┼┼┼┼███┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼███ 
\`\`\``);
	}
	/**
	 * RESPONSE FOR PIKACHU
	 */
	if (message.content === '!pikachu') {
		message.channel.send(`\`\`\` 
	⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣠⣤⣶⣶
	⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿
	⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣾⣿⣿⣿⣿
	⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
	⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
	⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
	⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿
	⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿
	⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
	⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
	⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
	⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
	⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
	⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿
	\`\`\``);
	}
	if (message.content === '!server') {
		message.channel.send(`Your servername: ${message.guild.name}`);
	}
	if (message.content === '!user-info') {
		message.channel.send(
			`Your username: ${message.author.username}\nYour ID: ${message.author.id}`
		);
	}

	if (message.content === '!members') {
		// console.log('........', client.guilds);
		const list = client.guilds.cache.get(process.env.GUILD_ID);
		list.members.cache.forEach((member) =>
			message.channel.send(`Testing ${member.user.username}`)
		);
	}

	if (message.content === '!gfy') {
		client.users
			.fetch(process.env.RR_ID, false)
			.then((user) => user.send('GFY'))
			.then(console.log('Message sent!'));
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
