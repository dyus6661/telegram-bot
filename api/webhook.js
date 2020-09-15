const Slimbot = require("slimbot");
const slashCommand = require("slash-command");
const GROUP_ID = process.env.TG_GROUP_ID;

const slimbot = new Slimbot(process.env.TG_BOT_TOKEN);

// slimbot.setWebhook({ url: "https://telegram-bot-c1cjuaz9c.vercel.app/webhook" });

slimbot.getWebhookInfo();

module.exports = async function webhook(req, res){
	res.status(200).json({
		status: "ok"
	});
};