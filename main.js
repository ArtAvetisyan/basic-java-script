// var JohnsTeamScored1 = 130;
// var JohnsTeamScored2 = 120;
// var JohnsTeamScored3 = 123;
// var JTM = (JohnsTeamScored1 + JohnsTeamScored2 + JohnsTeamScored3)/3
// console.log(JTM);
// var MikesTeamScored1 = 116;
// var MikesTeamScored2 = 94;
// var MikesTeamScored3 = 123;
// var MTM = (MikesTeamScored1 + MikesTeamScored2 + MikesTeamScored3)/3;
// console.log(MTM);
// if (JTM > MTM) {
//   console.log('The Winner is John\'s team');
// } else
// console.log('The Winner is Mike\'s team');
// var MaryTeamScored1 = 97;
// var MaryTeamScored2 = 134;
// var MaryTeamScored3 = 105;
// var MeryTM = (MaryTeamScored1 + MaryTeamScored2 + MaryTeamScored3)/3;
// console.log(MeryTM);
// if (MeryTM > MTM && MTM > JTM){
//   console.log('The winner is Mery\'s team')
// } else if (MTM > MeryTM && MeryTM > JTM){
//   Console.log('The winner is Mike\'s team');
// } else console.log('The winner is John\'s team');

//  function

function calculatebills(waitheramount){
  if (waitheramount < 50) {
     console.log( 0.2 * waitheramount)
   } else if (waitheramount >= 50 && waitheramount <=200){
     console.log(0.15 * waitheramount);
   } else {
     console.log(0.1 * waitheramount);
   };

}
calculatebills(124);
calculatebills(48);
calculatebills(268);

var myArrayBills = [18.6, 9.6, 26.8]
console.log(myArrayBills[2]);
