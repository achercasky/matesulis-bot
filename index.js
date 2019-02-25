require('dotenv').config()

const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.TOKEN)

var frases = [
    'Salen unos matesulis',
    'Encendamos los motores',
    'Esta para unos Matthew mcconaughey',
    'Esta para unos matienzos',
    'Sale unos Matt Damon?',
    'Que ganas de unos matematicos'
]

bot.hears(/mate/i, (ctx) => {

    var random = Math.floor(Math.random() * frases.length);

    ctx.reply(frases[random])
})

console.log("Matesulis start working..")
bot.launch()