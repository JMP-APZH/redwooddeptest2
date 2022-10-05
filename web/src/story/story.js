// bg
const microphone = require("./bg/microphone.jpeg");
const entrance = require("./bg/entrance.jpeg");
// bgm
//const take = require("./bgm/take.mp3");
// speakers
const b = "Swiss Climate";
// sprites
const bn = require("./sprites/swiss.png");

let story = [
  {
    bg: microphone,
    //bgm: take,
    sprite: bn,
    speaker: b,
    text: "Our planet is suffering"
  },
  {
    text: "And it’s up to us to save"
  },
  {
    text: "To take action"
  },
  {
    text:
      "We can sit down and come up with excuses, 'what can I do?', 'Why do I care?'"
  },
  { text: "Together we can!" },
  { text: "Together we will make a better future for our planet." },

  //first options of choices
  { choicesExist: true, receiveJump: "features" },
  
  // /Effects
  { routeBegins: "showEffects", sprite: bn, text: "In the worst case scenario where we decide as species to stand idle the wildlife we love" },
  { spriteEffect: "shake", text: 'spriteEffect: "shake"' },
  { spriteEffect: "shrink", text: 'spriteEffect: "shrink"' },
  {
    spriteEffect: "shrink",
    text:
      "Before I grow back, one thing to note is that the sprite can stay in its altered state if the effect is continuously set."
  },

  { spriteEffect: "shrink", text: "and their habitat will be destroyed, leading to mass species extinction.  " },
  { spriteEffect: "shrink", sprite: bn, text: "Superstorms, drought, and heat waves would become increasingly common and more extreme, leading to major health crises and illness. " },
  {
    spriteEffect: "shrink",
    text: "Agricultural production would plummet, likely leading to global food shortages and famine."
  },
  {
    spriteEffect: "shrunk",
    text: 'We are now witnessing the huge reduction of water while hiking,'
  },
  { sprite: bn, spriteEffect: "shrunk", text: "during heatwaves and all of this is due to 2 degrees rise in temperature.  " },

  {
    spriteEffect: "shrunk",
    sprite: bn,
    text:
      'Now imagine what our future would be if it gets worse.'
  },
  {
    spriteEffect: "grow-back",
    sprite: bn,
    text: "RCP 8.5(worst case) to follow..."
  },


  // /Best Case Scenario
  {
    routeBegins: "showTransitions",
    sprite: "",
    text: "Let’s create the best case scenario."
  },
  {
    text: "Let us give the future generation a white snowy christmas."
  },
  { text: "This could be created with RCP 2.6" },
  { bg: entrance },
  {
    bgTransition: "scene-change",
    bg: microphone,
    text: "A good life!"
  },
  { sprite: bn },

  { text: "Let’s not be afraid that we will not have enough energy, have better agriculture,", sprite: "" },
  {
    speaker: "",
    spriteLeftTransition: "from-right-leave-left",
    spriteLeft: bn,
    text: ' improve our health, not harm the species around us and their habitat'
  },
  {
    spriteLeftTransition: "from-right-leave-left",
    spriteLeft: "",
    text: 'and stop the decline of glaciers and snowlines.'
  },
  {
    spriteLeftTransition: "from-left-leave-right",
    spriteLeft: bn,
    text: "The government can Keep fossil fuels in the ground. ..."
  },
  {
    spriteLeftTransition: "move-right",
    spriteLeft: "",
    spriteTransition: "move-right",
    sprite: bn,
    text:
      'Invest in renewable energy. ... '
  },
  { speaker: b, text: "Switch to sustainable transport. ... " },
  {
    text:
      "Help us keep our homes cozy. ... "
  },
  { text: "Anyway, let's continue." },
  {
    speaker: "",
    spriteRightTransition: "from-right-leave-left",
    spriteRight: bn,
    text: 'Improve farming and harm fewer animals in the process.. '
  },
  {
    spriteRightTransition: "move-left-far",
    spriteRight: "",
    spriteLeftTransition: "move-left-far",
    spriteLeft: bn,
    text:
      'Restore nature to absorb more carbon. ... '
  },
  { speaker: b, text: "Protect forests like the Amazon. …  ", jumpTo: "features" },

  // /Storing choices
  /*
  {
    spriteLeft: "",
    routeBegins: "showStoringChoices",
    text: "The user is jumped to a specific index depending on what choice is clicked on."
  },
  { text: "For some projects, that is enough." },
  {
    text: "But if you want the game to the user's choices, you can use the `store` property in 'choices.js'."
  },
  { text: "For example, let's say the user is friends with a character." },
  { text: "The user can pick choices that will raise affection points for that character." },
  { text: "If the user accumulated enough points by a certain point, the user will jump to a certain scene." },
  { text: "Let's see it in application." },
  {
    sprite: bp,
    text: "Hey, can you help me carry the microphone."
  },

  // /choices vs routes
  { choicesExist: true, text: "Help? (Refer to choices.js to see the properties.)" },
  {
    routeBegins: "helpBlock",
    speaker: "nashkenazy",
    text: "No problem."
  },
  {
    sprite: bn,
    speaker: b,
    text: "Thanks.",
    jumpTo: "blockHelp"
  },
  {
    routeBegins: "noHelpBlock",
    speaker: "nashkenazy",
    text: "Nah, I'm good."
  },
  {
    speaker: "",
    sprite: "",
    text: "The block trips and falls.",
    jumpTo: "blockHelp"
  },

  // /routes converges to blockHelp
  {
    receiveJump: "blockHelp",
    text: "(Back to common route) Some weeks pass."
  },
  { text: "Block asked me to hang out at his place." },
  { text: "Did I accept?", choicesExist: true },
  {
    routeBegins: "hangOutWithBlock",
    text: "It was fun. We ate some pizza and watched a movie.",
    jumpTo: "blockHangOut"
  },
  {
    routeBegins: "noHangOutWithBlock",
    text: "I said I was busy, but I just didn't feel like it.",
    jumpTo: "blockHangOut"
  },
  {
    receiveJump: "blockHangOut",
    text: "(Back to common route) I haven't seen Block for a few years now."
  },
  { text: "I text him to see how he's doing.", jumpToBecauseStore: "blockAffection" },
  
  
  // Goes to next index if the user's choices do not fulfill any `receiveJumpBecauseStore` requirements.
  {
    text: "I put my phone down and continue with life."
  },
  { text: "He never texted back." },
  { text: "blockAffection score: 0. (Technically anything not 1 or 2)", jumpTo: "skitDone" },
  {
    receiveJumpBecauseStore: ["blockAffection", 1],
    text: "A few hours later, he texts back."
  },
  {
    speaker: b,
    text: "Sorry, I've been a bit busy organizing my wedding."
  },
  { text: "I forgot to send you a letter, but would you like to come?" },
  { speaker: "", text: "blockAffection score: 1.", jumpTo: "skitDone" },
  {
    receiveJumpBecauseStore: ["blockAffection", 2],
    text: "He texts back immediately."
  },
  {
    speaker: b,
    text: "Hey, nashkenazy! It's been so long since we'd last talked."
  },
  { text: "I was thinking about making you my best man for a wedding I've been planning." },
  { text: "I know it's a bit sudden, but you're the only one I think is best for the role." },
  { text: "blockAffection score: 2.", jumpTo: "skitDone" },
  {
    receiveJump: "skitDone",
    text: "(Done with skit) It takes a bit more work to get the choices done, but it should work out in the end.",
    jumpTo: "features"
  },

  */
 
  // /Leave
  {
    routeBegins: "leave",
    sprite: bn,
    spriteEffect: "shake",
    text: "Thank you for trying out the demo.",
    jumpTo: "title-screen"
  }
];

// The code below is to set undefined properties to the last defined property.
// It is optional and based on preference, so feel free to add or remove any function calls.

setFutureProperties("bg");
setFutureProperties("bgm");
setFutureProperties("speaker");
setFutureProperties("sprite");
setFutureProperties("spriteLeft");
setFutureProperties("spriteRight");

function setFutureProperties(key) {
  let cache = "";
  for (let obj of story) {
    if (obj[key] || obj[key] === "") {
      cache = obj[key];
    } else {
      obj[key] = cache;
    }
  }
}
export default story;
