const { Telegraf } = require('telegraf');

const bot = new Telegraf('2091233490:AAFxEKf7MKPWHLjqi5c4p4SvAttYjlM_Eok');

bot.start((ctx) => {
    ctx.reply(`Hi ${ctx.from.first_name}`)
    bot.telegram.sendMessage(ctx.chat.id, 'Please confirm your age  ?', {})
})

bot.hears(Number, ctx => {
    bot.telegram.sendMessage(ctx.chat.id, `Have you taken the vaccination?`, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Yes",
                    callback_data: 'Yes'
                },
                {
                    text: "No",
                    callback_data: 'No'
                }
                ],

            ]
        }
    })
})


bot.action('Yes', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'You have been given the vaccine?', {
    })

})

bot.action('No', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Are you currently experiencing any of the following symptoms?')
})

bot.command('restart', (response) => {
    response.reply('please use /start ')
})

bot.launch().then(() => console.log('bot is on'))