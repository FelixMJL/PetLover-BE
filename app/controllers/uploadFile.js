const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const AWS = require("aws-sdk");
const { v4: uuid } = require("uuid");

const region = process.env.AWS_REGION;
const BUCKET = process.env.BUCKET;

// Configure AWS credentials
AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: region,
});

// Initialize S3 client
const s3 = new S3Client({ region: region });

const uploadToS3 = async ({ file }) => {
	const key = `userFiles/${uuid()}`;
	const command = new PutObjectCommand({
		Bucket: BUCKET,
		Key: key,
		Body: file.buffer,
		ContentType: file.mimeType,
	});
	try {
		await s3.send(command);
		return { key };
	} catch (error) {
		console.log(error);
		return { error };
	}
};

const getObjectUrl = (key) => {
	return `https://${BUCKET}.s3.${region}.amazonaws.com/${key}`;
};

exports.upload = async (req, res) => {
	const { file } = req;
	if (!file) return res.status(400).json({ message: "Bad request" });

	const { error, key } = await uploadToS3({ file });
	if (error) {
		return res.status(500).json({ message: error.message });
	}
	const imageUrl = getObjectUrl(key);
	return res.status(201).json({ key, imageUrl });
};