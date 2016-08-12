var index = require ('./views/index.hbs')
var Enemy = require ('./enemy.js')
var Player = require ('./player.js')

document.addEventListener('DOMContentLoaded', start)

//proof of concept below


function start(){
  var target = document.getElementById('body')
  target.innerHTML = index({story: 'This is the story.'})
  var introButton = document.getElementById("introButton")
  console.log('i am a button', introButton)
  introButton.addEventListener('click', introduction);


  var player = new Player({health: 1000,  minAttackPower: 50, maxAttackPower: 75})
  var testEnemy = new Enemy({health: 650,  minAttackPower: 15, maxAttackPower: 20})
  while(testEnemy.health > 0){
    var startingPlayerHealth = player.health
    var startingEnemyHealth = testEnemy.health
    console.log('player health: ', startingPlayerHealth, ' enemy health: ', startingEnemyHealth)
    player.attack(testEnemy)
    console.log('player took ', startingPlayerHealth - player.health ,' damage! Enemy took ',startingEnemyHealth - testEnemy.health, ' damage!')
  } console.log('the enemy was defeated!')
  var attackButton = document.getElementById("attackButton")
  attackButton.addEventListener("click", attack)
}

function attack(player) {
  // var playerPower = player.minAttackPower
  var damage = 50 + Math.floor(Math.random() * 25)
  var target = document.getElementById('attackDamage')
  target.innerHTML = damage
  console.log("You did " + damage + " damage!")
  // console.log("You did this: ", playerPower );
}


var introArray = ['this is part one', 'this is part 2', 'this is part 3']
var battleText = 'we are battling like champions!'
var indexIntro = -1
var introduction = function(){
  indexIntro ++
  var target = document.getElementById('story-text')
  target.innerHTML = introArray[indexIntro]

  var beginAdventure = function(){
    var target = document.getElementById('story-text')
    target.innerHTML = battleText
  }

  if (indexIntro == 2){
    introButton.removeEventListener('click', introduction)
    introButton.addEventListener('click', beginAdventure)
  }
  console.log('hello i am a test sting');
 };
