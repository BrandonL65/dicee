var ran=Math.random();
ran=ran*6;
ran=Math.floor(ran);
ran=ran+1;

var ran2=Math.random();
ran2=ran2*6;
ran2=Math.floor(ran2);
ran2=ran2+1;


if (ran ==1)
{
  var leftDice=document.querySelectorAll(".dice-value-left");
  for (i=0; i < leftDice.length; i++)
  {
    leftDice[i].style.backgroundColor="red";
    leftDice[i].style.color="red";
  }
  leftDice[4].style.backgroundColor="white";
  leftDice[4].style.color="white";
}
if (ran==2)
{
  var leftDice=document.querySelectorAll(".dice-value-left");
  for (i=0; i < leftDice.length; i++)
  {
    leftDice[i].style.backgroundColor="red";
    leftDice[i].style.color="red";
  }
  leftDice[2].style.backgroundColor="white";
  leftDice[2].style.color="white";
  leftDice[6].style.backgroundColor="white";
  leftDice[6].style.color="white";
}
if (ran==3)
{
  var leftDice=document.querySelectorAll(".dice-value-left");
  for (i=0; i < leftDice.length; i++)
  {
    leftDice[i].style.backgroundColor="red";
    leftDice[i].style.color="red";
  }

  leftDice[2].style.backgroundColor="white";
  leftDice[2].style.color="white";
  leftDice[4].style.backgroundColor="white";
  leftDice[4].style.color="white";
  leftDice[6].style.backgroundColor="white";
  leftDice[6].style.color="white";
}
if (ran==4)
{
  var leftDice=document.querySelectorAll(".dice-value-left");
  for (i=0; i < leftDice.length; i++)
  {
    leftDice[i].style.backgroundColor="red";
    leftDice[i].style.color="red";
  }

  leftDice[0].style.backgroundColor="white";
  leftDice[2].style.backgroundColor="white";
  leftDice[6].style.backgroundColor="white";
  leftDice[8].style.backgroundColor="white";
  leftDice[0].style.color="white";
  leftDice[2].style.color="white";
  leftDice[6].style.color="white";
  leftDice[8].style.color="white";
}
if (ran==5)
{
  var leftDice=document.querySelectorAll(".dice-value-left");
  for (i=0; i < leftDice.length; i++)
  {
    leftDice[i].style.backgroundColor="red";
    leftDice[i].style.color="red";
  }
  leftDice[0].style.backgroundColor="white";
  leftDice[2].style.backgroundColor="white";
  leftDice[4].style.backgroundColor="White";
  leftDice[6].style.backgroundColor="white";
  leftDice[8].style.backgroundColor="white";
  leftDice[0].style.color="white";
  leftDice[2].style.color="white";
  leftDice[4].style.color="white";
  leftDice[6].style.color="white";
  leftDice[8].style.color="white";
}
if (ran==6)
{
  var leftDice=document.querySelectorAll(".dice-value-left");
  for (i=0; i < leftDice.length; i++)
  {
    leftDice[i].style.backgroundColor="red";
    leftDice[i].style.color="red";
  }
  leftDice[0].style.backgroundColor="white";
  leftDice[2].style.backgroundColor="white";
  leftDice[3].style.backgroundColor="white";
  leftDice[5].style.backgroundColor="white";
  leftDice[6].style.backgroundColor="white";
  leftDice[8].style.backgroundColor="white";
  leftDice[0].style.color="white";
  leftDice[2].style.color="white";
  leftDice[3].style.color="white";
  leftDice[5].style.color="white";
  leftDice[6].style.color="white";
  leftDice[8].style.color="white";
}
if (ran2 ==1)
{
  var rightDice=document.querySelectorAll(".dice-value-right");
  for (i=0; i < rightDice.length; i++)
  {
    rightDice[i].style.backgroundColor="red";
    rightDice[i].style.color="red";
  }
  rightDice[4].style.backgroundColor="white";
  rightDice[4].style.color="white";
}
if (ran2==2)
{
  var rightDice=document.querySelectorAll(".dice-value-right");
  for (i=0; i < rightDice.length; i++)
  {
    rightDice[i].style.backgroundColor="red";
    rightDice[i].style.color="red";
  }
  rightDice[2].style.backgroundColor="white";
  rightDice[2].style.color="white";
  rightDice[6].style.backgroundColor="white";
  rightDice[6].style.color="white";
}
if (ran2==3)
{
  var rightDice=document.querySelectorAll(".dice-value-right");
  for (i=0; i < rightDice.length; i++)
  {
    rightDice[i].style.backgroundColor="red";
    rightDice[i].style.color="red";
  }

  rightDice[2].style.backgroundColor="white";
  rightDice[2].style.color="white";
  rightDice[4].style.backgroundColor="white";
  rightDice[4].style.color="white";
  rightDice[6].style.backgroundColor="white";
  rightDice[6].style.color="white";
}
if (ran2==4)
{
  var rightDice=document.querySelectorAll(".dice-value-right");
  var i=0;
  while (i < rightDice.length)
  {
    rightDice[i].style.backgroundColor="red";
    rightDice[i].style.color="red";
    i=i+1;
  }
  rightDice[0].style.backgroundColor="white";
  rightDice[2].style.backgroundColor="white";
  rightDice[6].style.backgroundColor="white";
  rightDice[8].style.backgroundColor="white";
  rightDice[0].style.color="white";
  rightDice[2].style.color="white";
  rightDice[6].style.color="white";
  rightDice[8].style.color="white";
}
if (ran2==5)
{
  var rightDice=document.querySelectorAll(".dice-value-right");
  var i=0;
  while (i < rightDice.length)
  {
    rightDice[i].style.backgroundColor="red";
    rightDice[i].style.color="red";
    i=i+1;
  }
  rightDice[0].style.backgroundColor="white";
  rightDice[2].style.backgroundColor="white";
  rightDice[4].style.backgroundColor="white";
  rightDice[6].style.backgroundColor="white";
  rightDice[8].style.backgroundColor="white";
  rightDice[0].style.color="white";
  rightDice[2].style.color="white";
  rightDice[4].style.color="white";
  rightDice[6].style.color="white";
  rightDice[8].style.color="white";
}
if (ran2==6)
{
  var rightDice=document.querySelectorAll(".dice-value-right");
  var i=0;
  while (i < rightDice.length)
  {
    rightDice[i].style.backgroundColor="red";
    rightDice[i].style.color="red";
    i=i+1;
  }
  rightDice[0].style.backgroundColor="white";
  rightDice[2].style.backgroundColor="white";
  rightDice[3].style.backgroundColor="white";
  rightDice[5].style.backgroundColor="white";
  rightDice[6].style.backgroundColor="white";
  rightDice[8].style.backgroundColor="white";
  rightDice[0].style.color="white";
  rightDice[2].style.color="white";
  rightDice[3].style.color="white";
  rightDice[5].style.color="white";
  rightDice[6].style.color="white";
  rightDice[8].style.color="white";
}

if (ran==ran2)
{
  var win=document.querySelector("#winner h2");
  win.innerHTML="TIE!!!";
}
if (ran > ran2)
{
  var win=document.querySelector("#winner h2");
  win.innerHTML="PLAYER 1 WINS!!!";
}
if (ran2 > ran)
{
  var win=document.querySelector("#winner h2");
  win.innerHTML="PLAYER 2 WINS!!!";
}
