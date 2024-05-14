let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;


if(sum < 21)
{
    console.log("Do You want to draw a new card");
}

else if(sum === 21)
{
    console.log("Black Jack");
}
else 
{
    console.log("You're out of the game");
}