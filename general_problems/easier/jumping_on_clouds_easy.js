/* There is a new mobile game that starts with consecutively numbered clouds. 
Some of the clouds are thunderheads and others are cumulus. 
The player can jump on any cumulus cloud having a number that is equal to 
the number of the current cloud plus  or 1 or 2
The player must avoid the thunderheads. 
Determine the minimum number of jumps it will take to jump 
from the starting postion to the last cloud. 
It is always possible to win the game.

c= [0, 1, 0, 0, 0, 1, 0] ====> 3

For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.*/


function jumpingOnClouds(c) {

  let minJumps = 0;
  let i = 0;
  while (true) {
    if (c[i + 1] === 1 && c[i + 2] === 0) {
      i += 2;
      minJumps++;
    } else if (c[i + 1] === 0 && c[i + 2] === 0) {
      i += 2;
      minJumps++;
    } else if (c[i + 1] === 0 && c[i + 2] === undefined) {
      i++;
      minJumps++;
    } else if (c[i + 1] === 0 && c[i + 2] === 1) {
      i++;
      minJumps++;
    } else if (c[i + 1] === undefined) {
      break;
    }
  }
  return minJumps;

}