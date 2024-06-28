const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setActivity('Rick', {type : 'PLAYING'} )
  console.log(`Logged in as ${client.user.tag}!`);
});


// This allows pinging for commands! Module
let isPingCommandEnabled = true; // Ping commands enabled by default

    client.on('message', async (message) => {
      if (message.author.bot) return;
    
      // Check for disable ping commands (adjust prefix as needed)
      if (message.content.startsWith(',Disable ping commands')) {
        isPingCommandEnabled = false;
        await message.channel.send('Ping commands disabled!');
        return;
      }
    
      // Respond to pings only if enabled
      if (isPingCommandEnabled && message.mentions.users.has(client.user.id)) {
        message.reply(`**Hi I'm Mom and here are my commands!**
  __1__. __|rick__ - "This will give you a rick joke"
  __2__. __|info__ - "information if you didn't know what it was"
  __3__ __|ping__ - "The ping."
  __4__ __|invite__ - "The Invite for the bot."
  __5__ __|rick lyrics__ - "The lyrics!"
  **My prefix is |**`)
  return
}
  });

// Keep track of last reply time to avoid spamming
let lastReplyTime = 0;


// Message responses! Module
client.on('message', async message => {
  if (message.author.bot) return;

  // List of messages to check for
  const messagesToCheck = [
    {words: ['ping'], reply: 'Never going to give you up never going to let you down Never going to turn around and desert you!'},
    {words: ['invite'], reply: `**Here is my invite!**
    [https://discord.com/api/oauth2/authorize?client_id=957000837794762782&permissions=380104615942&scope=bot]`},
    {words: ['never'], reply: `I'm never gonna to give you up.`},
    {words: ['rick lyrics'], reply: `We're no strangers to love
    You know the rules and so do I
    A full commitment's what I'm thinking of
    You wouldn't get this from any other guy
    I just wanna tell you how I'm feeling
    Gotta make you understand
    Never gonna give you up
    Never gonna let you down
    Never gonna run around and desert you
    Never gonna make you cry
    Never gonna say goodbye
    Never gonna tell a lie and hurt you
    We've known each other for so long
    Your heart's been aching but you're too shy to say it
    Inside we both know what's been going on
    We know the game and we're gonna play it
    And if you ask me how I'm feeling
    Don't tell me you're too blind to see
    Never gonna give you up
    Never gonna let you down
    Never gonna run around and desert you
    Never gonna make you cry
    Never gonna say goodbye
    Never gonna tell a lie and hurt you
    Never gonna give you up
    Never gonna let you down
    Never gonna run around and desert you
    Never gonna make you cry
    Never gonna say goodbye
    Never gonna tell a lie and hurt you
    Never gonna give, never gonna give
    (Give you up)
    We've known each other for so long
    Your heart's been aching but you're too shy to say it
    Inside we both know what's been going on
    We know the game and we're gonna play it
    I just wanna tell you how I'm feeling
    Gotta make you understand
    Never gonna give you up
    Never gonna let you down
    Never gonna run around and desert you
    Never gonna make you cry
    Never gonna say goodbye
    Never gonna tell a lie and hurt you
    Never gonna give you up
    Never gonna let you down
    Never gonna run around and desert you
    Never gonna make you cry
    Never gonna say goodbye
    Never gonna tell a lie and hurt you
    Never gonna give you up
    Never gonna let you down
    Never gonna run around and desert you
    Never gonna make you cry
    Never gonna say goodbye`},
  ];

  for (const messageToCheck of messagesToCheck) {
    if (messageToCheck.words.some(word => message.content.toLowerCase().includes(word)) &&
        (Date.now() - lastReplyTime) > 10000) {
      await message.reply(messageToCheck.reply);
      lastReplyTime = Date.now();
      break;
    }
  }
});


// Information module
client.on('message', message => {
  // Here is where you need to code
 if(message.content == "|info3535234") {
    message.channel.send(`__Hazel Mom bot, works seamlessly alongside Daniel Dad bot to create a delightful and balanced experience for your server. They make a perfect duo!__
    Here's what I can do for you:
    :star: Tell you hilarious mom jokes (,mom).
    :star: Challenge you with riddles (,mompuzzle).
    :star: Shared functionality pretty much says what's on the tin. It shares the functionality of the other bot meaning everything the other bot did you get with this command enabled! Remember it does reset When the bots restart!. These bots are made to run independent of each other.

__Note: You'll need the "Manage Server" permission to activate shared functionality.__
Both Hazel Mom and Daniel Dad are open-source bots, meaning their code is publicly available for anyone to inspect or modify. This ensures transparency and allows for community contributions.
Feel free to invite them to your server and discover the fun they bring! You can invite them by clicking on their profile picture and selecting "Add to Server".`);
 }


if(message.content == "|rick_answers") {
  message.channel.send(`Here are the riddle answers!
  __1__ __A mother's love__
  __2__ __Are you finished cleaning your room?__
  __3__ __A historian__
  __4__ __A mother's heart__
  __5__ __A mother's lap__
  __6__ __Neptune__
  __7__ __Gravity__
  __8__ __Black hole__
  __9__ __Picture__
  __10__ __Appliance__
  `);
}


// Jokes module
if(message.content === `|rick`){
  const advices = [
  `What do you do when you do the Rick, You do the roll It's called a Rick roll!`,
    //1
];
  // get a random number based on the array's length
var randomIndex = Math.floor(Math.random() * advices.length);
// creates the random output of your array
var randomElement = advices[randomIndex];
    
  message.reply(`Here's a Rick joke: ${randomElement}`);
  }

  if(message.content == "|rick") {
    message.delete();
  }
    });




//client.login(process.env.Token);
client.login("Your token here from Discord!");
client.on('ready', () => {
console.log(`Key is accepted now running the bot!`);
  });