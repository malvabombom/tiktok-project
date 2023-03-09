const { WebcastPushConnection } = require('tiktok-live-connector');
require('dotenv').config();


const tiktokUsername = process.env.USER_NAME;
const tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

tiktokLiveConnection.connect().then(state => {

}).catch(err => {
    console.error('Failed to connect', err);
})

tiktokLiveConnection.on('gift', data => {
    if (data.giftType === 1 && !data.repeatEnd) {
        console.log(`${data.nickname} muchas gracias!! 🦸`);
    } else {
        console.log(`${data.nickname} muchas gracias por tu regalo!! 🦸🎁 `);
    }
})

tiktokLiveConnection.on('like', data => {
    console.log(`${data.nickname} muchas gracias por tus likes 👩‍🚀😸`);
})

tiktokLiveConnection.on('comment', data => {
    console.log(data);
})

tiktokLiveConnection.on('follow', (data) => {
    console.log(data.nickname, "gracias por tu follow!!! 🦄✨");
})

