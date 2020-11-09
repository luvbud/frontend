var fs = require('fs');
var openApiURL = 'http://aiopen.etri.re.kr:8000/WiseASR/Pronunciation';
var accessKey = 'eb3339f4-461c-4c3f-acb5-269b3a43b0fa';
var languageCode = 'english';
var script = 'misunderstanding';
var audioFilePath = '../audio.mp3';
var audioData;

var audioData = fs.readFileSync(audioFilePath);

var requestJson = {
	'access_key': access_key,
	'argument': {
		'language_code': languageCode,
		'script': script,
		'audio': audioData.toString('base64')
	}
};

var request = require('request');
var options = {
	url: openApiURL,
	body: JSON.stringify(requestJson),
	headers: {'Content-Type':'application/json; charset=UTF-8'}
};
request.post(options, function (error, response, body) {
	console.log('responseCode = ' + response.statusCode);
	console.log('responseBody = ' + body);
});
