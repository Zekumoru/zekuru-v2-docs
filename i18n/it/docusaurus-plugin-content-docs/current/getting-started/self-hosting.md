---
sidebar_position: 2
---

# Auto-hosting di Zekuru-v2

L'auto-hosting (self-hosting) consiste nell'eseguire il bot da soli sul proprio computer o server, invece di utilizzare un servizio o server esterno. In questo modo, gestisci le tue risorse in maniera indipendente. Le risorse si riferiscono alla CPU e alla RAM del tuo dispositivo.

**Questo è un argomento avanzato e presuppongo che tu abbia già alcune nozioni di base, come cos'è Node.js e cos'è un gestore di processi come yarn.**

## Prerequisiti

Assicurati di avere installati [Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) e [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).

## Installazione

Per iniziare a chattare senza soluzione di continuità tra i tuoi canali con lingue diverse, segui questi passaggi:

1. Clona questo repository e accedi alla sua directory

```cmd
git clone git@github.com:Zekumoru/zekuru-v2-demo.git
cd zekuru-v2-demo
```

2. Installa le dipendenze necessarie

```cmd
yarn
```

3. Crea il file `.env` e copia-incolla le seguenti righe inserendo i valori corretti all'interno di quelle tra parentesi angolari `<>`.

```env
DISCORD_TOKEN=<DISCORD_TOKEN_HERE>
CLIENT_ID=<CLIENT_ID_HERE>
MONGODB_CONNECTION_STRING=<CONNECTION_STRING_HERE>
CIPHER_SECRET_KEY=<SECRET_KEY_HERE>
CHANNEL_LINK_LIMIT=5
DEBUG="zekuru-v2-demo:*"
```

- **DISCORD_TOKEN**

Per ottenere un token Discord, segui i passaggi nell'articolo [Setting up a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) nella guida ufficiale di discord.js. Spiega anche cosa sia un token Discord.

- **CLIENT_ID**

Per sapere dove trovare l'ID client del tuo bot, controlla la sezione [Guild commands section](https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands) nella guida ufficiale di discord.js.

- **MONGODB_CONNECTION_STRING**

Per ottenere una stringa di connessione MongoDB, segui i due articoli nella documentazione ufficiale di MongoDB, in particolare le istruzioni per Atlas UI (a meno che tu non sia uno sviluppatore e sappia cosa stai facendo): [Create an Account](https://www.mongodb.com/docs/atlas/tutorial/create-atlas-account/) e [Deploy a Free Cluster](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/).
La stringa di connessione MongoDB è simile a questa: `mongodb+srv://[username:password@]host[/[defaultauthdb][?options]]`. **Da qualche parte durante la distribuzione di un cluster gratuito ti verrà chiesto se includere la password nella stringa di connessione, aggiungila! A meno che tu non sappia cosa stai facendo.**

- **CIPHER_SECRET_KEY**

È come una password utilizzata per crittografare i dati. Serve per crittografare le chiavi API di Deepl inserite nel comando `/set`. Per creare una chiave segreta, esegui il seguente comando:

```cmd
yarn create-cipher-secret
```

**Non provare a fare il furbo e usare il generatore di chiavi segrete se non sai quello che stai facendo.**

> **ATTENZIONE: Non dimenticare di generare e inserire questa chiave segreta, altrimenti il bot utilizzerà la chiave predefinita `58061f4b4543d65ca7967a55ded720355d9b22307c2d665a501dba2d869e1116`.**

- **CHANNEL_LINK_LIMIT**

Questo è il numero di canali che **possono essere collegati** insieme. Non è il numero di canali a cui puoi assegnare una lingua. Il valore predefinito è 5.

- **DEBUG**

**Non provare a modificare il suo valore a meno che tu non sappia cosa stai facendo.** Questo viene usato per registrare l'output del bot.

4. Fai partire il bot.

```cmd
yarn start
```

> Per mantenere il bot in esecuzione in background, puoi consultare [pm2](https://pm2.keymetrics.io/), un gestore di processi. Utilizza il seguente comando per avviare il bot in background: `pm2 start ts-node --name "Zekuru-v2 Demo" -- --files app.ts`.

5. Invita il bot nel tuo server utilizzando il link seguente, sostituendo `CLIENT_ID_HERE` con il **CLIENT_ID** del tuo bot.

```link
https://discord.com/oauth2/authorize?client_id=CLIENT_ID_HERE&permissions=137976212544&scope=bot+applications.commands
```

6. E comincia alla creazione di canali, all'impostazione delle lingue, al collegamento tra canali e, infine, inizia chattare!
