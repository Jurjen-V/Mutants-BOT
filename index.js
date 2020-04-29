const commando = require('discord.js-commando');
// var bot = new commando.Client({commandPrefix: '.'});
const n = "\n";
const prefix = ".";
const bot = new commando.Client({
    commandPrefix: 'Mutants-bot',
    owner: '507478124318031883',
    unknownCommandResponse: false
});
bot.login('NTA3NDc4MTI0MzE4MDMxODgz.DrxSng.JZT3o-PyjQ4mRlo6Bg6o_JpGLGM');
const Discord = require('discord.js'); 
var cli = new Discord.Client({autoReconnect:true});
bot.registry.registerDefaults();
bot.on('ready', () => {
    bot.user.setActivity(".help");
    console.log("\x1b[42m%s\x1b[0m","succesfully Booted! ");
})
bot.on('guildMemberAdd', member =>{
    console.log('\x1b[42m%s\x1b[0m', 'User ' + member.user.username + ' has joined the server!');
    //welcome message // member.guild.channels.get('507505615849914379').send("Welcome " + member + "lul van een vent"); 
	member.send("Welcome " + member + " to **The mutants**! Have a great time here :wink: !" + n + n + " __**Here are a few rules**__" + n + n + "1. Be nice in chat" + n + "2. don't be mad ad admin's" + n + "3. don't spam the bots" + n + "4. don't spam in chat" + n +"**(if you don't follow these rules you can get banned or kicked)**" + n + n + "__**Available commands in The Mutants**__" + n + n + "__Random__" + n + "**.roll**: Generates a random sentence" + n + n + "__Invite__" + n + "**.invite**: Generates a invite link");
    var role = member.guild.roles.find('name', 'Leden');
    var roletest = member.guild.roles.find('name', 'Bot-test');
    var bot = member.guild.roles.find('name', 'bots');
    if(member.user.username == "jurjen_veenstra"){
        member.addRole(roletest);
        member.addRole(role);
    }else if(member.user.bot){
        member.addRole(bot);
    }else{
        member.addRole(role);
    }
})
bot.on('guildMemberRemove', member =>{
    console.log('\x1b[41m%s\x1b[0m', 'User ' + member.user.username + ' has left the server!');
})
bot.on("message", (message) => {
    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments
    if (msg.startsWith(prefix + "BEK")) {
        var member= message.mentions.members.first();
        if(member == undefined){
            message.channel.send('You need to @mention someone');
            return false;
        }
        if (!message.member.roles.find("name", "admin")) { // This checks to see if they DONT have it, the "!" inverts the true/false
            message.channel.send('You need the \`ADMIN\` role to use this command.').then(sentMessage => {
                sentMessage.delete(5000);
        }); // This tells the user in chat that they need the role.
        return; // this returns the code, so the rest doesn't run.
        }
        member.setMute(true, 'It needed to be done')
        .then(() => 
            console.log('\x1b[43m%s\x1b[0m',`Muted ${message.member.displayName}`))
            message.channel.send(member.displayName + " houd voorlopig zijn bek.")
    }
    //unmute
    if (msg.startsWith(prefix + "UNBEK")) {
        var member= message.mentions.members.first();
        if(member == undefined){
            message.channel.send('You need to @mention someone');
            return false;
        }
        if (!message.member.roles.find("name", "admin")) { // This checks to see if they DONT have it, the "!" inverts the true/false
            message.channel.send('You need the \`ADMIN\` role to use this command.').then(sentMessage => {
                sentMessage.delete(5000);
        }); // This tells the user in chat that they need the role.
        return; // this returns the code, so the rest doesn't run.
        }
        member.setMute(false, 'It needed to be done')
        .then(() => 
            console.log('\x1b[43m%s\x1b[0m',`Unmuted ${message.member.displayName}`))
            message.channel.send(member.displayName + " heeft weer spreek recht.")
    }  
    //ban
    if (msg.startsWith(prefix + "BAN")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        if(member == undefined){
            message.channel.send('You need to @mention someone');
            return false;
        }
        if (!message.member.roles.find("name", "admin")) { // This checks to see if they DONT have it, the "!" inverts the true/false
            message.channel.send('You need the \`ADMIN\` role to use this command.').then(sentMessage => {
                sentMessage.delete(5000);
        }); // This tells the user in chat that they need the role.
        return; // this returns the code, so the rest doesn't run.
        }
        // Kick
        member.ban().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully banned.");
            console.log('\x1b[43m%s\x1b[0m',member.displayName + " has been banned.")
            message.react("✅");
        }).catch(() => {
             // Failmessage
            message.channel.send("The person you are trying to ban is a \`ADMIN\`");
            message.react("❌");
        });
    }
    //kick
    if (msg.startsWith(prefix + "KICK")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        if(member == undefined){
            message.channel.send('You need to @mention someone');
            return false;
        }
        if (!message.member.roles.find("name", "admin")) { // This checks to see if they DONT have it, the "!" inverts the true/false
            message.channel.send('You need the \`ADMIN\` role to use this command.').then(sentMessage => {
                sentMessage.delete(5000);
        }); // This tells the user in chat that they need the role.
        return; // this returns the code, so the rest doesn't run.
        }
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked.");
            message.react("✅");
            console.log('\x1b[43m%s\x1b[0m',member.displayName + " has been kicked.")
        }).catch(() => {
             // Failmessage
            message.channel.send("The person you are trying to ban is a \`ADMIN\`");
            message.react("❌");
        });
    }
    //delete messages 

    // Commands
    // Purge
    if (msg.startsWith(prefix + 'PURGE')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(5000); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.
            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.roles.find("name", "admin")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('You need the \`ADMIN\` role to use this command.').then(sentMessage => {
                    sentMessage.delete(5000);
                }); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }
            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>').then(sentMessage => {
                    sentMessage.delete(5000);
                }); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }
            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log('\x1b[43m%s\x1b[0m',fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting
            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.
        }
        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)
    }
    //help command
    if(msg.startsWith(prefix + 'HELP')){
		sender.send("These are the available commands in __**The Mutants**__" + n + n + "__Random__" + n + "**.roll**: Generates a random sentence" + n + n + "__Invite__" + n + "**.invite**: Generates a invite link");	
		message.reply("Please check your DM for info").then(sentMessage => {
    		sentMessage.delete(5000);
		});
		message.react("✅");
		message.delete(5000);
    }
    //dom detmer iets
    if(msg.startsWith(prefix + 'DETMER STINKT')){
		message.reply('facts');
    }
    //nog meer troep
    if(msg.startsWith(prefix + 'SAD')){
		message.reply('Sorry __alexa__ meme is not funny 😢');
    }    
    //als er iets word gezegd in het vakantie spreek kanaal
    if(message.channel.id === '534477909939847209') {
        if(message.member.user.id != null){
            if(message.member.user.id != '507478124318031883'){
                var bericht = message.content.toString(); 
                message.delete().then((console.log('\x1b[41m%s\x1b[0m',"Deleting...")));
                console.log('\x1b[43m%s\x1b[0m',bericht);
                message.channel.send(bericht).then((console.log("\x1b[42m%s\x1b[0m","Sending...")));
                message.channel.send("-------------------------------------------------");
            }
            if (msg.startsWith('http')){
                message.react('➕').then(() => message.react('➖'));
            }
        }
    }
    //invite
    if (msg.startsWith(prefix + 'INVITE')) {
        message.channel.send("Feel free to invite your friends " + "https://discord.gg/jBwmmEz");
        message.react("✅");
    }
    // skyward lyrcis woord bij woord
    if(msg.startsWith(prefix + 'SKYWARD')){
        string_to_array = function (str) {
            return str.trim().split(" ");
        };
        var myStringArray = string_to_array("Eat, sleep and please Independent on her knees There's more to her Free as a bee 'Til the queen will disagree There's more to her On Sunday she will loudly pray Please don't care what other people say But Mondays always stay the same She builds so they can break Oh, they want you to crawl, fuck 'em all You just gotta go skyward, aim higher When you've had enough You should rise above And go skyward with high force They can't get you down When you're off the ground So tell them what you wanna say 'Cause they won't hear you anyway And go skyward, aim higher When you've had enough You should rise above Feel that she's real Though the fake will seal the deal Make room for her Or she'll leave every meal 'Til she's skinny as a needle Root for her Oh, convincing herself everyday I don't care what other people say Oh, they know she's lying anyway She builds so they can break Still they want her to crawl, fuck 'em all You just gotta go skyward, aim higher When you've had enough You should rise above And go skyward with high force They can't get you down When you're off the ground So tell them what you wanna say (tell them what you wanna say) 'Cause they won't hear you anyway (they won't hear you anyway) And go skyward, aim higher When you've had enough You should rise above Skyward, higher She's more than a provider More than you desire Skyward, higher Make room for all the failures Root for all the fighters ou just gotta go skyward, aim higher  When you've had enough You should rise above And go skyward with high force They can't get you down When you're off the ground So tell them what you wanna say (tell them what you wanna say) 'Cause they won't hear you anyway (they won't hear you anyway) And go skyward, aim higher When you've had enough  ou should rise above  Skyward");
        var no_child_in_time = string_to_array("Sweet child in time You'll see the line The line that's drawn between Good and bad See the blind man Shooting at the world Bullets flying Ohh taking toll If you've been bad Oh Lord I bet you have And you've not been hit Oh by flying lead You'd better close your eyes Ooohhhh bow your head Wait for the ricochet Oooooo ooooooo ooooooo Oooooo ooooooo ooooooo Ooo, ooo ooo Ooo ooo ooo Oooooo ooooooo ooooooo Oooooo ooooooo ooooooo Ooo, ooo ooo Ooo ooo ooo Aaaahh aaaahh aaaahh Aaaahh aaaahh aaaahh Aahh, aahh aahh Aah I wanna hear you sing Aaaahh aaaahh aaaahh Aaaahh aaaahh aaaahh Aahh, aahh aahh Aaahhhh Aaaahh aaaahh aaaahh Aaaahh aaaahh aaaahh Aahh, aahh aahh Aaaahh aaaahh aaaahh Aaaahh aaaahh aaaahh Aahh, aahh aahh Sweet child in time You'll see the line The line that's drawn between Good and bad See the blind man Shooting at the world Bullets flying Mmmm taking toll If you've been bad Lord I bet you have And you've not been hit Oh by flying lead You'd better close your eyes Ooohhhhhhh bow your head Wait for the ricochet Oooooo ooooooo ooooooo Oooooo ooooooo ooooooo Ooo, ooo ooo Ooo ooo ooo Oooooo ooooooo ooooooo Oooooo ooooooo ooooooo Ooo, ooo ooo Ooo ooo ooo Aaaahh aaaahh aaaahh Aaaahh aaaahh aaaahh Aahh, aahh aahh Aah I gotta hear you sing Aaaahh aaaahh aaaahh Aaaahh aaaahh aaaahh Aahh, aahh aahh Aah Aaaahh aaaahh aaaahh Aaaahh aaaahh aaaahh Aahh, aahh aahh Aah Aaaahh aaaahh aaaahh Aaaahh aaaahh aaaahh Aahh, aahh aahh Oh..God oh no..oh God no..oh..ah..no ah AAh..oh.. Aawaah..ohh")
        var arrayLength = no_child_in_time.length;
        for (var i = 0; i < arrayLength; i++) {
            message.channel.send(no_child_in_time[i]);
            sender.send(no_child_in_time[i]);
        }
    }    
})
