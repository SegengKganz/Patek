/*
    Created & Base By ArxzyDev
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6289513081052
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'aR2QPWI4VnIUHgKO7I9vT3BlbkFJmJOdfUDFPXrFeMKlrCJB' // LOLHUMAN
global.rosekey = 'cba86fac49e37d63f9bd4561' // ROSE

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'GengBotzzTumru'
global.namaowner = 'Geng Store'

//—————「 Setting Owner 」—————//
global.owner = ['6283846677065']
global.nomerowner = '6283846677065'
global.premium = ['6283846677065']

//—————「 Set Wm 」—————//
global.packname = 'By GengBotzz\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = 'Geng Store\n Kecexx'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Gak Tod~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: '🚫 Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/8e63b9b040820311612b2.jpg'
global.link = 'https://youtube.com/@awersgaming'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
