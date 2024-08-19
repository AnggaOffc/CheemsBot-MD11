//base By Angga Offc
//re-upload? recode? copy code? give credit ya :)
//YouTube: @bacotamatpro03
//Instagram: angga01store
//Telegram: t.me/CobaDuluBaru
//GitHub: @Thomzh
//WhatsApp: +62895411941384
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@MODSDevoloper

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: AnggaOfficial" //ur yt chanel name
global.socialm = "GitHub: Thomzh" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'Chems Bot MD V11' //ur bot name
global.ownernumber = '62895411941384' //ur owner number
global.ownername = '🦄드가이 AnggaOffc' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P6k"
global.wagc = "https://whatsapp.com/channel/0029VaaEwLG72WU0Auv7JO0t"
global.themeemoji = '🪀'
global.wm = "AnggaOffc Bot Inc."
global.botscript = 'https://github.com/Thomzh/CheemsBot-MD11' //script link
global.packname = "Sticker By AnggaOffc"
global.author = "🦄림 가 AnggOffc\n\n+916909137213"
global.creator = "62895411941384@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["62895411941384"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
