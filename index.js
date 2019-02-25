require('dotenv').config()

const Telegraf = require('telegraf')
const fs = require('fs')

// Variables
let JSON_PATH = "phrases.json"

const bot = new Telegraf(process.env.TOKEN)

const phrasesContent = fs.readFileSync(JSON_PATH)
const phrases = JSON.parse(phrasesContent)

bot.hears(/mate/i, (ctx) => {

    var random = Math.floor(Math.random() * phrases.length);

    ctx.reply(phrases[random])
})

console.log("Matesulis start working..")
bot.launch()