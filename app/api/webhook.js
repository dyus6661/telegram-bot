const Slimbot = require("slimbot");
const slashCommand = require("slash-command");
const GROUP_ID = process.env.TG_GROUP_ID;

const slimbot = new Slimbot(process.env.TG_BOT_TOKEN);

// slimbot.setWebhook({ url: "https://telegram-bot-c1cjuaz9c.vercel.app/webhook" });

module.exports = async function webhook(req, res){
	slimbot.sendMessage(GROUP_ID, "Message received");
	res.status(200).json({
		status: "UPDATED"
	});
};