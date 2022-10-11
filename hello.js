const VkBot = require('node-vk-bot-api');
let token = 'vk1.a.Raoal_4MrkjiavRBk_hnF63AfffVA4inurn7rggGqmtGQR2gmoWE6pt13vEO8WuQJWuCb3Nm3zImJ0HFxKWXKNX_S9wCcC5XE20MAvWoNQpuoPWjKLvgI-hgaOtVZbci1an-17zboWkMoITOc9moEERd5ddHzt6WNSyPqhq-5eUOOW_qvoDkA_xLo_OQzxIV';
const bot = new VkBot(token);

bot.on((ctx) => {
  ctx.reply('Hello!');
});

bot.startPolling();
