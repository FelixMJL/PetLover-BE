const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.chatGpt = async (req, res) => {
	const { question } = req.body;
	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `${question}`,
		temperature: 1,
		max_tokens: 500,
		top_p: 1,
		frequency_penalty: 0.0,
		presence_penalty: 0.0,
	});
	if(!response.data) {
		res.status(400).json({error: 'request error'})
		return;
	}
	const str = response.data.choices[0].text.replace(/\n\n/g, '').replace(/？/g, '');
	res.status(201).json(str)
};