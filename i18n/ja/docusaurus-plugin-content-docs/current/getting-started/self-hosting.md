---
sidebar_position: 2
---

# Zekuru-v2 のセルフホスティング

セルフホスティングとは、外部サービスやサーバーではなく、自分のコンピューターやサーバーで自分でボットを実行することを指します。 このようにして、CPU や RAM など、リソースを自分で管理します。

**これは上級者向けのトピックであり、Node.js とは何か、yarnのようなプロセスマネージャーとは何かなど、ある程度の知識があることを前提としています。**

## 前提条件

[Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) と [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) がインストールされていることを確認してください。

## Zekuru-v2 のインストール

さまざまな言語チャンネル間でシームレスにチャットを開始するには、以下の手順を実行してください。

1. このリポジトリをクローンし、そのディレクトリに入ります。

```cmd
git clone git@github.com:Zekumoru/zekuru-v2-demo.git
cd zekuru-v2-demo
```

2. 必要ないくつかの依存関係をインストールします。

```cmd
yarn
```

3. `.env` ファイルを作成し、次の内容をコピー アンド ペーストして、山括弧 `<>` 内の値を適切な値に置き換えます。

```env
DISCORD_TOKEN=<DISCORD_TOKEN_HERE>
CLIENT_ID=<CLIENT_ID_HERE>
MONGODB_CONNECTION_STRING=<CONNECTION_STRING_HERE>
CIPHER_SECRET_KEY=<SECRET_KEY_HERE>
CHANNEL_LINK_LIMIT=5
DEBUG="zekuru-v2-demo:*"
```

- **DISCORD_TOKEN**

Discord トークンを取得するには、公式の discord.js ガイドにある [ボットアプリケーションの設定](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) 記事の手順に従ってください。 同記事では、Discord トークンについても説明されています。

- **CLIENT_ID**

ボットのクライアント ID を見つける場所については、公式の discord.js ガイドにある [ギルドコマンドセクション](https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands) を確認してください。

- **MONGODB_CONNECTION_STRING**

MongoDB 接続文字列を取得するには、公式の MongoDB ドキュメントにある 2 つの記事、特に **Atlas UI** (開発者でなければ) 向けの説明に従ってください: [アカウントの作成](https://www.mongodb.com/docs/atlas/tutorial/create-atlas-account/) と [無料クラスターのデプロイ](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/)。

MongoDB 接続文字列は次のような形式になります: `mongodb+srv://[username:password@]host[/[defaultauthdb][?options]]` 。**無料クラスターのデプロイ中に、接続文字列にパスワードを含めるかどうか聞かれるので、知識がない限りは含めてください。**

- **CIPHER_SECRET_KEY**

これは、データを暗号化するためのパスワードのようなものです。 `/set` コマンドに入力された API キーを暗号化するために使用されます。 シークレットキーを作成するには、次のコマンドを実行します:

```cmd
yarn create-cipher-secret
```

**知識がない限り、シークレットキー ジェネレータを使用して巧妙に作成しようとするのはお勧めできません。**

> **警告: 生成したシークレットキーを必ず設定してください。 そうしないと、ボットはデフォルトのキー `58061f4b4543d65ca7967a55ded720355d9b22307c2d665a501dba2d869e1116` を使用します。**

- **CHANNEL_LINK_LIMIT**

これは、**リンクできる** チャネルの数です。 言語を設定できるチャネル数ではありません。 デフォルトは 5 です。

- **DEBUG**

**知識がない限り、この値を変更しないでください。** これは、ボットの出力をログ記録するために使用されます。

4. ボットを実行します。

```cmd
yarn start
```

> バックグラウンドでボットを実行するには、プロセスマネージャである [pm2](https://pm2.keymetrics.io/) を利用できます。 次のコマンドを使用して、バックグラウンドでボットを実行します: `pm2 start ts-node --name "Zekuru-v2 Demo" -- --files app.ts`

5. 下のリンクを使用して、ボットをサーバーに招待します。 `CLIENT_ID_HERE` をボットの **CLIENT_ID** に置き換えてください。

```link
https://discord.com/oauth2/authorize?client_id=CLIENT_ID_HERE&permissions=137976212544&scope=bot+applications.commands
```

6. チャネルを作成し、言語を設定し、それらのチャネルをリンクして、チャットを開始しましょう!
