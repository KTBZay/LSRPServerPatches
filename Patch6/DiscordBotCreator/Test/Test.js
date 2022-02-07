
    try{ 
 const Discord = require('discord.js');

    const client = new Discord.Client({intents: ['GUILDS', 'GUILD_MESSAGES']});

    client.on('ready',()=>{

        console.log('Test is starting')

    });

    client.on('message',(msg)=>{

        if(msg.content==='!ping'){

            msg.reply('Pong!')

        }
    }
    );

    client.on('message',(msg)=>{
 
        if(msg.content==='!CreatorsGitHub'){

            msg.reply('https://github.com/KTBZay/')
        }

    });

    client.on('message',(msg)=>{
 
        if(msg.content==='!issues'){

            msg.reply('https://github.com/KTBZay/LSRPServer/issues')
        }

    });



    client.login('');
}catch (error){

        fs.writeFileSync('./error.txt', error)

    }
        