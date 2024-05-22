---
sidebar_position: 2
---

# Self-hosting Zekuru-v2

Self-hosting refers to running the bot yourself on your own computer or server, instead of using an outside service or server. This way, you control your own resources. Resources refer to your CPU and RAM.

**This is an advanced topic and I assume you already a little of this stuff like what Node.js is and what is a package manager like yarn.**

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) installed.

## Installation

To start chatting seamlessly across your different language channels, do the following steps:

1. Clone this repository and enter its directory

```cmd
git clone git@github.com:Zekumoru/zekuru-v2-demo.git
cd zekuru-v2-demo
```

2. Install necessary dependencies

```cmd
yarn
```

3. Create `.env` file and copy-paste the following providing the correct values within those in angle brackets `<>`.

```env
DISCORD_TOKEN=<DISCORD_TOKEN_HERE>
CLIENT_ID=<CLIENT_ID_HERE>
MONGODB_CONNECTION_STRING=<CONNECTION_STRING_HERE>
CIPHER_SECRET_KEY=<SECRET_KEY_HERE>
CHANNEL_LINK_LIMIT=5
DEBUG="zekuru-v2-demo:*"
```

- **DISCORD_TOKEN**

To get a Discord token, follow the steps on the [Setting up a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) article in the official discord.js guide. It also explains what a Discord token is.

- **CLIENT_ID**

To learn about where to find your bot's client id, check the [Guild commands section](https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands) in the official discord.js guide.

- **MONGODB_CONNECTION_STRING**

To get a MongoDB connection string, follow the two articles in the official MongoDB documentation, especially the instructions for the **Atlas UI** (unless you're a developer and know what you're doing): [Create an Account](https://www.mongodb.com/docs/atlas/tutorial/create-atlas-account/) and [Deploy a Free Cluster](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/).

The MongoDB connection string looks like this: `mongodb+srv://[username:password@]host[/[defaultauthdb][?options]]`. **Somewhere along the deployment of a free cluster you will be asked whether to include the password in your connection string, add it! Unless you know what you're doing.**

- **CIPHER_SECRET_KEY**

It's like a password used for encrypting data. It is used for encrypting the API keys fed to the `/set` command. To create a secret key, run the following command:

```cmd
yarn create-cipher-secret
```

**Don't try to be smart and use the secret key generator unless you know what you're doing.**

> **WARNING: Do not forget to generate and put this secret key, otherwise, the bot will use the default key: `58061f4b4543d65ca7967a55ded720355d9b22307c2d665a501dba2d869e1116`.**

- **CHANNEL_LINK_LIMIT**

This is how many channels **can be linked** together. This is not the number of channels you can set with a language. Default is 5.

- **DEBUG**

**Don't try to change its value unless you know what you're doing.** This is used for logging the output of the bot.

4. Run the bot.

```cmd
yarn start
```

> To have the bot running in the background, you can check out [pm2](https://pm2.keymetrics.io/) which is a process manager. Use the following command to run the bot in the background: `pm2 start ts-node --name "Zekuru-v2 Demo" -- --files app.ts`.

5. Invite the bot to your server using the link below replacing `CLIENT_ID_HERE` with your bot's **CLIENT_ID**.

```link
https://discord.com/oauth2/authorize?client_id=CLIENT_ID_HERE&permissions=137976212544&scope=bot+applications.commands
```

6. And start creating channels, setting languages on them, linking those channels, and finally, chatting!
