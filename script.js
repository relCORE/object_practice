

var evilGeniuses = new TeamStats("Evil Geniuses", "North America", "10", "5", "2nd", "Cr1t", "SumaiL", "Universe", "zai", "Arteezy");
//Method for the TeamStats object that prints out the stats in a human readable format
TeamStats.prototype.printStats = function(){
  console.log(this.teamName + " is a professional DotA 2 Team from " + this.teamOrigin + ".");
  console.log("During the Internationl 2016 they achieved " + this.wins + " wins, and suffered " + this.fails + " losses.");
  console.log("In the end they placed " + this.place + " in the tournament.");
  console.log("The team consists of " + this.player1 + ", "+ this.player2 + ", "+ this.player3 + ", "+ this.player4 + ", and" + this.player5);
}
evilGeniuses.printStats();


//Constructor Function for TeamStats accepting 10 properties
function TeamStats(teamName, teamOrigin, wins, losses, place, player1, player2, player3, player4, player5){
  this.teamName = teamName;
  this.teamOrigin = teamOrigin;
  this.wins = wins;
  this.fails = losses;
  this.place = place;
  this.player1 = player1;
  this.player2 = player2;
  this.player3 = player3;
  this.player4 = player4;
  this.player5 = player5;
  // this.printStats = function(){
  //   console.log(this.teamName + " is a professional DotA 2 Team from " + this.teamOrigin + ".");
  //   console.log("During the Internationl 2016 they achieved " + this.wins + " wins, and suffered " + this.fails + " losses.");
  //   console.log("In the end they placed " + this.place + " in the tournament.");
  //   console.log("The team consists of " + this.player1 + ", "+ this.player2 + ", "+ this.player3 + ", "+ this.player4 + ", and" + this.player5);


}

//Method for the TeamStats object that prints out the stats in a human readable format
// TeamStats.prototype.printStats = function(){
//   console.log(this.teamName + " is a professional DotA 2 Team from " + this.teamOrigin + ".");
//   console.log("During the Internationl 2016 they achieved " + this.wins + " wins, and suffered " + this.fails + " losses.");
//   console.log("In the end they placed " + this.place + " in the tournament.");
//   console.log("The team consists of " + this.player1 + ", "+ this.player2 + ", "+ this.player3 + ", "+ this.player4 + ", and" + this.player5);
// }
