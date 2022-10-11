let token = 'vk1.a.Raoal_4MrkjiavRBk_hnF63AfffVA4inurn7rggGqmtGQR2gmoWE6pt13vEO8WuQJWuCb3Nm3zImJ0HFxKWXKNX_S9wCcC5XE20MAvWoNQpuoPWjKLvgI-hgaOtVZbci1an-17zboWkMoITOc9moEERd5ddHzt6WNSyPqhq-5eUOOW_qvoDkA_xLo_OQzxIV';
const VkBot = require('node-vk-bot-api');
const Markup = require('node-vk-bot-api/lib/markup');
const bot = new VkBot(token);


let aga = (ctx) => {
  bot.start()
  key = ctx.reply('Choose', null, Markup
    .keyboard([
      [
        Markup.button('Start', 'positive'),
      ],
    ]));
}

bot.command('/start|Назад|Начать', aga);


bot.command('Start', (ctx) => {
  ctx.reply('Выберите', null, Markup
    .keyboard([
      'Заглушка',
      'Расписание',
      'Назад',
    ])
    .oneTime());
    key;
});




bot.startPolling()