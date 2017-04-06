//Back-End Logic

var actualCashMath = function(tilTotal) {
  return tilTotal - 300;
};

function weeklyBreakdown(monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
  this.monday = monday;
  this.tuesday = tuesday;
  this.wednesday = wednesday;
  this.thursday = thursday;
  this.friday = friday;
  this.saturday = saturday;
  this.sunday = sunday;
  this.week = [];
}

weeklyBreakdown.prototype.tipPush = function() {
  if (weekday === 1) {
    this.monday = totalTips;
  } else if (weekday === 2) {
    this.tuesday === totalTips;
  } else if (weekday === 3) {
    this.wednesday === totalTips;
  } else if (weekday === 4) {
    this.thursday === totalTips;
  } else if (weekday === 5) {
    this.friday === totalTips;
  } else if (weekday === 6) {
    this.saturday === totalTips;
  } else (weekday === 7)
}


//Front-End Logic
$(document).ready(function () {
  $("form").submit(function(event) {
    event.preventDefault();

    $(".breakdown").show();
    var weekday = $("select#weekdays").val();
    var tilTotal = parseInt($('input#tilTotal').val());
    var posCash = parseInt($('input#posCash').val());
    var cashTips = parseInt($('input#cashTips').val());
    var ccTips = parseInt($('input#ccTips').val());

    $("#outputPOSCash").text(posCash);
    $("#outputCashTips").text(cashTips);
    $("#outputCCTips").text(ccTips);

    var actualCash = actualCashMath(tilTotal);
    $("#actualCash").text(actualCash);

    var difference = actualCash - posCash
    $("#difference").text(difference);

    var totalTips = cashTips + ccTips
    $("#totalTips").text(totalTips);

    var Drop = actualCash - ccTips
    $("#drop").text(Drop);




  });
});
