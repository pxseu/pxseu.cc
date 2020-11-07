# [pxseu.com](https://www.pxseu.com)

### About

This repo contains the full content of my website for free! (under a license)
Please check it out and contribute if you wish to do so!

### Installation

The website requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.
To use it to it's full potential it requires a [Discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).
For development use:

```sh
$ nano .env
WEBHOOK = (Your webhook token.)
$ npm install
$ npm run dev
```

And for production please do:

```sh
$ nano .env
WEBHOOK = (Your webhook token.)
$ npm install
$ npm run deploy
$ npm run prod
```
