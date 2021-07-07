# discordBot (Work in Progress)

Building out a Discord bot that can handle calandar management

# Running bot

```
Setting up your environment with Discord:
```
Visit: https://discord.com/developers/applications
Have a Discord account and your own server, or access as Admin on a server.

1. Click `New Application` & name your application
3. Visit [Discord permissions](https://discordapi.com/permissions.html#2147732544), select your permissions & add in your `Client ID`
4. Click on the link once everything has been selected and it should ask you to allow your bot to join the server
5. Clone this repository
6. `npm install` to install the discord.js dependency
7. Create a `.env` file within the discordBot folder and insert the following:
  ```
  DISCORD_TOKEN= CLICK ON OAUTH2 -> UNDER CLIENT SECRET, CLICK ON COPY 
  SERVER_ID= MAKE SURE YOU ARE UNDER DEVELOPER MODE WITH YOUR ACCOUNT, RIGHT CLICK THE SERVER YOU HAVE ADMIN ACCESS & COPY ID
  CLIENT_ID= OAUTH2 -> COPY CLIENT ID
  ```
 8. `npm run start` should start up the bot on your local machine
 9. Head over to the discord channel where your bot has been invited to and type `!ping` the bot should respond with a "Pong."

## Documentation
- [Discord permissions](https://discordapi.com/permissions.html#2147732544)
- [Guide](https://discordjs.guide/)
- [Discord Developer](https://discord.com/developers/docs/intro)


