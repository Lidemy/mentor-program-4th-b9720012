/* eslint-disable */ // 在該檔案關閉 ESLint
// eslint-disable-next-line
const request = require('request');
const options = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': 'qdlbyb1z4qx5wf8r0jblb9tdqsko0c',
	'Accept': 'application/vnd.twitchtv.v5+json'
  },
};function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    const info = JSON.parse(body);
    for (let i = 0; i < info.data.length; i += 1) {
      console.log(info.data[i].id, info.data[i].name);
    }
  }
}request(options, callback);

