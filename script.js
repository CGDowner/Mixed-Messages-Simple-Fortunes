// Each Variable Holds An Array Holding Elements That Represent Message Components
const msgPart1 = ['Today you will', 'Tommorow you will', 'In the near future you will'];
const msgPart2 = [' face', ' be introduced to', ' come across' ];
const msgPart3 = [' a noble hero.', ' an extreme evil.', ' a massive fortune.'];

//Randomly Picks a Component From The First Array of Messages
let randomMsgPart1 = msgPart1[Math.floor(Math.random()*msgPart1.length)];

//Randomly Picks a Component From The Second Array of Messages
let randomMsgPart2 = msgPart2[Math.floor(Math.random()*msgPart2.length)];

//Randomly Picks a Component From The Third Array of Messages
let randomMsgPart3 = msgPart3[Math.floor(Math.random()*msgPart3.length)];

function TestMessages() {
    //Logs Each Variable
    console.log(randomMsgPart1);
    console.log(randomMsgPart2);
    console.log(randomMsgPart3);
}

//Calls a Function To Test if the Messages are Generating Correctly
TestMessages();