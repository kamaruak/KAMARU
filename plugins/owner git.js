const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😎✮𝕶𝖆ͥ𝖒ᷞ𝖆ͦ𝖗ͮ𝖚ͤ║𝖆ͧ𝖐✮😎═════╗*\n           \n*⚜═Kamaru═⚜*\n\n*owner Kamaru AK- http://Wa.me/+919995282316*\n* *\n🔰instagram:-https://www.instagram.com/kamaruak_?r=nametag*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Kamaru ak*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Kamaru Owner Kamaru Ak═💥*\n\n*🚫⛔️🚫⛔️🚫⛔️*\n*     *\n💓Kamaru═Owner Kamaru ak═*\n\n*🚫⛔️🚫⛔️*    *\n\n⚜yt link to set bot:- 🚫⛔️🚫⛔️*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😎Kamaru😎═════╗*\n           \n*⚜═Kamaru═⚜*\n\n*owner Kamaru AK- http://Wa.me/+919995282316*\n* *\n🔰instagram:-https://www.instagram.com/kamaruak_?r=nametag*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Kamaruak*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Kamaru Owner Ak Kamaru═💥*\n\n*🚫⛔️🚫⛔️*\n*     *\n💓Kamaru ak═Owner Kamaru═*\n\n*🚫⛔️🚫⛔️*    *\n\n⚜yt link to set bot:- 🚫⛔️🚫⛔️*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
