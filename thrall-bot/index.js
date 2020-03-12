require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "Thrall?") {
    msg.reply("Yes my son?");
  }
});

client.on("message", msg => {
  if (msg.content.includes("alliance")) {
    msg.reply(" Alliance scum");
  }
});

client.on("message", msg => {
  if (msg.content === "f") {
    msg.reply("f");
  }
});

client.on("message", msg => {
  if (msg.content === "F") {
    msg.reply("f");
  }
});

client.on("message", msg => {
  if (msg.content === "!roll") {
    let roll_value = Math.ceil(Math.random() * 100);
    msg.reply(roll_value);
  }
});

client.on("message", msg => {
  if (msg.content === "!AlsvinsDice") {
    let roll_value = Math.ceil(Math.random() * 100);
    while (roll_value < 90) {
      roll_value = Math.ceil(Math.random() * 100);
    }
    msg.reply(roll_value);
  }
});

client.on("message", msg => {
  if (msg.content.includes("lol")) {
    msg.reply("That's so funny lel");
  }
});

client.on("message", msg => {
  if (msg.content.includes("lmao")) {
    msg.reply("I'm actually rolling on the ground rn bahah");
  }
});

/*CLASS ROLES */
const mageID = "616372337327079437";
const hunterID = "616372566579347536";
const shamanID = "616371789995704362";
const warriorID = "616372369107189762";
const priestID = "616372602641973278";
const rogueID = "616372697718456326";
const warlockID = "616373016703533335";
const druidID = "616373263664414778";

client.on("message", msg => {
  if (msg.content === "!hunter") {
    msg.member.setRoles([hunterID]);
    msg.reply(
      "We could always use another Marksman. Is that a stainless steel 1911??"
    );
  }
  return;
});
client.on("message", msg => {
  if (msg.content === "!mage") {
    msg.member.setRoles([mageID]);
    msg.reply("You are a wizard Harry");
  }
  return;
});
client.on("message", msg => {
  if (msg.content === "!shaman") {
    msg.member.setRoles([shamanID]);
    msg.reply("Ah, another badass. Welcome");
  }
  return;
});
client.on("message", msg => {
  if (msg.content === "!warrior") {
    msg.member.setRoles([warriorID]);
    msg.reply("If you think you are so strong, why do you wear so much armor?");
  }
  return;
});
client.on("message", msg => {
  if (msg.content === "!priest") {
    msg.member.setRoles([priestID]);
    msg.reply("Thank you for joining us bishop");
  }
  return;
});
client.on("message", msg => {
  if (msg.content === "!rogue") {
    msg.member.setRoles([rogueID]);
    msg.reply("Where did you go?");
  }
  return;
});
client.on("message", msg => {
  if (msg.content === "!warlock") {
    msg.member.setRoles([warlockID]);
    msg.reply("Tbh not a fan of you guys but I guess you can come in");
  }
  return;
});
client.on("message", msg => {
  if (msg.content === "!druid") {
    msg.member.setRoles([druidID]);
    msg.reply("Ah hello Archdruid. How is Cenarius?");
  }
  return;
});
client.on("message", msg => {
  if (msg.content === "!stahura") {
    msg.reply("Hello padawan");
  }
  return;
});

client.on("message", msg => {
  if (msg.content === "!chucknorris") {
    msg.reply("Just google chuck norris jokes. smh");
  }
  return;
});

client.on("guildMemberAdd", member => {
  member.guild.channels.get("611735551506251779").send(
    `Hello ${member}, welcome to my Church.

    For your chat color to match your WoW main class, type !(class).
    
    Guild role information is in the #member-roles channel. 
    
    To commune with Thrall, type "!thrall"
    `
  );
});

// MY JSON FUNCTIONS
/*
client.on("message", msg => {
    if (msg.content === "!roleinfo") {
        msg.reply("What character are you inquiring about?");
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

        let request = new XMLHttpRequest();
        console.log("Making role request");
        request.open('GET', 'roles.json', false);
        request.send(null);

        let response = JSON.parse(request.responseText);

        let character_name = response["Talimondras"];
        console.log(character_name);
        let character_class;
        let character_proff;
        let character_role;a



        client.on("message", msg2 => {
            character_name = response[`${msg2}`];
            character_class = character_name.Class;
            character_proff = character_name.Profession;
            character_role = character_name.Roles;

            msg.reply(`The class is ${character_class}`);
        });
    }
});

function setRoleRequest() {
    let roleRequest = new XMLHttpRequest();
    console.log("Making role request");

    let character_name;
    let character_class;
    let character_proff;
    let character_role;

    roleRequest.open("POST", "roles.json", false);
    roleRequest.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );

    request.send(null);
}

function updateRole() {}

function createRole() {}
*/
client.login(process.env.BOT_TOKEN);
