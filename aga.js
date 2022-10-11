let token = 'vk1.a.Raoal_4MrkjiavRBk_hnF63AfffVA4inurn7rggGqmtGQR2gmoWE6pt13vEO8WuQJWuCb3Nm3zImJ0HFxKWXKNX_S9wCcC5XE20MAvWoNQpuoPWjKLvgI-hgaOtVZbci1an-17zboWkMoITOc9moEERd5ddHzt6WNSyPqhq-5eUOOW_qvoDkA_xLo_OQzxIV';
const Markup = require('node-vk-bot-api/lib/markup');
const VkBot = require('node-vk-bot-api/lib');
const Session = require('node-vk-bot-api/lib/session');
const Stage = require('node-vk-bot-api/lib/stage');
const Scene = require('node-vk-bot-api/lib/scene');

const bot = new VkBot(token);
const session = new Session();
const scene = new Scene('begin',
    bot.command('Назад', (ctx) => {
        bot.start()
        key = ctx.reply('Choose', null, Markup
        .keyboard([
            [
            Markup.button('Start', 'positive'),
            Markup.button('Stop', 'negative'),
            ],
        ]));
        
    })
);
const stage = new Stage(scene);

bot.use(session.middleware());
bot.use(stage.middleware());

bot.command('Начать', (ctx) => {
  ctx.scene.enter('begin');
});

bot.startPolling();