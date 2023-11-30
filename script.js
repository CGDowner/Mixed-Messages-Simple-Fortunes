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

//Function That Combines The Randomly Generated Components And Joins Them Into a Combined Message to Create A Fortune For The User 
function createFortune() {
    console.log(`${randomMsgPart1}${randomMsgPart2}${randomMsgPart3}`) //This Represents the Fortune
}

//Calls the Function to Create a Fortune That Will be Logged Into the Console
createFortune();