const {Client,RichEmbed}=require('discord.js');
const client = new Client();

client.on('ready',()=>{ 
    console.log(`Mi bot está despierto: ${client.user.tag}`);
    if(client.user.presence.status==='dnd'){
        console.log('el bot duerme', client.user.presence.status);
    }else{
        console.log('al 100');
    }
    const TestChannel=client.channels.find(channel=>channel.name==='canal chido');
        console.log('el bot Banea anda chido')
    
});

client.on('message', message=>{
    console.log(message);
    if(message.content === 'ping'){
        message.reply('tu jefa');
    }

    if(message.content==='hola'){
        message.channel.send(`saludo a la jefa de ${message.author}`);
    }

    if(message.content.includes('Martin')){
        message.channel.send('puto');
        
    }

    if(message.content.includes('brayan')){
        message.channel.send('puto');
        
    }

    if(message.content.includes('awayo')){
        message.channel.send('puto');
        
    }

    if(message.content==='cherrybit'){
        message.channel.send('https://elcodigoascii.com.ar/');
        message.channel.send('https://app.schoology.com/login');
    }

    if(message.content==='!pretty'){
        const embed = new RichEmbed()//los mensajes concatenados se vean bonis
        .setTitle('pretty Message')
        .setColor('#f46611')
        .setAuthor('Cherryman','https://i.ytimg.com/vi/hknSgHSxEXM/maxresdefault.jpg')
        message.channel.send(embed);
    }

   
});

client.login('NjUwMDA0NzU0MDY3MzU3NzUz.XeFCQA.RPJUNKCJoNXHVtDiycsuX2V7_5k');

