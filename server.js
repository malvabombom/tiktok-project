const { WebcastPushConnection } = require('tiktok-live-connector');
let tiktokUserName = "holasoymalva"; // π Change this
let tiktokLiveConnection = new WebcastPushConnection(tiktokUserName);

tiktokLiveConnection.connect().then(state => {

}).catch(err => {
    console.error('Failed to connect', err);
})

tiktokLiveConnection.on('gift', data => {
    if (data.giftType === 1 && !data.repeatEnd) {
        console.log(`${data.nickname} muchas gracias por esos regalos!!! π¦Έ`);
    } else {
        console.log(`${data.nickname} muchas gracias por tus regalos!! π¦Έπ `);
    }
})

tiktokLiveConnection.on('chat', data => {
    console.log(`π¬ ${data.nickname} dice : ${data.comment} `);
})

tiktokLiveConnection.on('like', data => {
    console.log(`${data.nickname} muchas gracias por tus likes π©βππΈ`);
})

tiktokLiveConnection.on('follow', (data) => {
    console.log(data.nickname, "gracias por tu follow!!! π¦β¨");
})

