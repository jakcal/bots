const TelegramBot = require('node-telegram-bot-api');
const https = require('https');
// Bot config
const token = '786638534:AAEJ9o7rrbloswCGgMrMhg4bc1diQA1QmSI';
const bot = new TelegramBot(token, {polling: true});

// Init Firebase
// Reply to /bookmark
bot.onText(/\/anime (.+)/, (msg, match) => {
    https.get('https://snoanime.com/api/new/', (resp) => {
    let data = ''
    resp.on('data', (chunk) => {
        data += chunk;
    });
      resp.on('end', () => {
      var datas = JSON.parse(data);
      var i;
      for (i = 0; i < 10; i++) {
          var photo = datas[i].image;
          $url = "snoanime.com/info.php?id="+datas[i].id+"&image="+datas[i].image+"&name="+datas[i].name+"&year="+datas[i].year+"&status="+datas[i].status;
          $telegramMessage = 
         '<strong> ألاسم : </strong> '+datas[i].name+' \n'+
         '<strong> الحلقة : </strong> '+datas[i].epName+' \n';
          bot.sendPhoto(id.chat.id, photo, {caption: $telegramMessage ,parse_mode: 'HTML'})
         }
       });
      }).on("error", (err) => {
       console.log("Error: " + err.message);
      });
    setTimeoutAgain(msg);
});
function setTimeoutAgain(id)
{
   var t = setTimeout(function()
   {
          
  https.get('https://snoanime.com/api/new/', (resp) => {
    let data = ''
    resp.on('data', (chunk) => {
        data += chunk;
    });
      resp.on('end', () => {
      var datas = JSON.parse(data);
      var i;
      for (i = 0; i < 10; i++) {
          var photo = datas[i].image;
          $url = "snoanime.com/info.php?id="+datas[i].id+"&image="+datas[i].image+"&name="+datas[i].name+"&year="+datas[i].year+"&status="+datas[i].status;
          $telegramMessage = 
         '<strong> ألاسم : </strong> '+datas[i].name+' \n'+
         '<strong> الحلقة : </strong> '+datas[i].epName+' \n';
          bot.sendPhoto(id.chat.id, photo, {caption: $telegramMessage ,parse_mode: 'HTML'})
         }
       });
      }).on("error", (err) => {
       console.log("Error: " + err.message);
      });
        setTimeoutAgain(id);
   },3600000);
} 