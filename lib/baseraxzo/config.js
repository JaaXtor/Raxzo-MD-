const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6282183659801']
global.ownernomer = "6282183659801"
global.premium = ['6282183659801']
global.packname = 'Raxzo STOREE'
global.author = 'Quen BOT'
global.sessionName = 'raxzo'  //jangan diganti bro nanti error
global.prefa = ['','!','.','#','&']
global.sp = ''
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./lib/baseraxzo/image/raxzo.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
