//Back-End Logic
// tilTotal - 300 = actualCash
//
// posCash - actualCash = difference
//
// cashTips + ccTips = totalTips
//
// actualCash - ccTips = drop

// function Breakdown(tilTotal, posCash, cashTips, ccTips) {
//   this.tilTotal = tilTotal;
//   this.posCash = posCash;
//   this.cashTips = cashTips;
//   this.ccTips = ccTips;
// }
//
// breakdown.prototype.cashMath = function() {
//   return this.tilTotal - 300;
// }
//
// breakdown.prototype.cashDifference = function() {
//   return ac
// }

var actualCashMath = function(tilTotal) {
  return tilTotal - 300;
};




//Front-End Logic
$(document).ready(function () {
  $("form").submit(function(event) {
    event.preventDefault();

    var tilTotal = parseInt($('input#tilTotal').val());
    var actualCash = actualCashMath(tilTotal);
    $("#actualCash").text(actualCash);

    var posCash = parseInt($('input#posCash').val());

    var difference = actualCash - posCash
    $("#difference").text(difference);

    var cashTips = parseInt($('input#cashTips').val());
    var ccTips = parseInt($('input#ccTips').val());

    var totalTips = cashTips + ccTips
    $("#totalTips").text(totalTips);

    var Drop = actualCash - ccTips
    $("#drop").text(Drop);

  });
});
