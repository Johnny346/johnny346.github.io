$(document).ready(function(hide){
	$(".help").hide(function(){	});
});




	function singleYear() {
		var numerSYr1 = document.getElementById('numerSYr1').value;
		var denSYr1 = document.getElementById('denomSYr1').value;
		var yearPercentage= document.getElementById('percentage').value;
		var fractionYr1 = numerSYr1 / denSYr1;
		var totalFraction =(fractionYr1 * 100);

		var singleYear1 = (yearPercentage / 100 * totalFraction);
		var total = Math.round(singleYear1 * 100)/100;

		var r = isNaN(total);

		if (r === true){
			singleGrade.innerHTML = "You must fill in all boxes, enter numbers and not text!";

		} else {
			 singleGrade.innerHTML = "Your total grade is = "+ total + "%.";
		}

		return singleYear;
	}


function runcalulation() {
	//Run main function
	//year1
	var numerYr1 = document.getElementById('numerYr1').value;
	var denYr1 = document.getElementById('denomYr1').value;
	var yearPercentage8= document.getElementById('percentage8').value;
	//year2
	var numerYr2 = document.getElementById('numerYr2').value;
	var denomYr2= document.getElementById('denomYr2').value;
	var yearPercentage7= document.getElementById('percentage7').value;
	//year3
	var numerYr3 = document.getElementById('numerYr3').value;
	var denomYr3 = document.getElementById('denomYr3').value;
	var yearPercentage6= document.getElementById('percentage6').value;
	//year4
	var numerYr4 = document.getElementById('numerYr4').value;
	var denomYr4 = document.getElementById('denomYr4').value;
	var yearPercentage5= document.getElementById('percentage5').value;

	function calculateFractions(x,y,z) {
		var fractionYr1 = x / y;
		var totalFraction =(fractionYr1 * 100);
		var year1 = (z / 100 * totalFraction);
	return year1;
	}

	//calling function for each yr section
	var year1 = calculateFractions(numerYr1,denYr1,yearPercentage8);
	var year2 = calculateFractions(numerYr2,denomYr2,yearPercentage7);
	var year3 = calculateFractions(numerYr3,denomYr3,yearPercentage6);
	var year4 = calculateFractions(numerYr4,denomYr4,yearPercentage5);

	var total_year1 = Math.round(year1 * 100)/100;
	var total_year2 = Math.round(year2 * 100)/100;
	var total_year3 = Math.round(year3 * 100)/100;
	var total_year4 = Math.round(year4 * 100)/100;

	var total = total_year1 + total_year2 + total_year3 + total_year4;

	var total_Grade = Math.round(total * 100)/100;

	return total_Grade;
}



function scheduleA() {
	   var theSelection = document.form1.sel1.selectedIndex;
	    var p = "";

		if (theSelection === 1){
			//level 8 selection
			total_Grade = runcalulation();
			 p = isNaN(total_Grade);

			if (p === true){

				finalGrade.innerHTML = "You must fill in all boxes, enter numbers and not text!";

			} else if (total_Grade >= 70) {
				finalGrade.innerHTML = "This is a First Class Honours and your percentage is " + total_Grade + "%.";
			} else if (total_Grade >= 60) {
				finalGrade.innerHTML = "This is a Second Class Honours Grade 1 and your percentage is " + total_Grade + "%.";
			} else if (total_Grade >= 50) {
				finalGrade.innerHTML = "This is a Second Class Honours Grade 2 and your percentage is " + total_Grade + "%.";
			} else if (total_Grade >= 45) {
				finalGrade.innerHTML = "This is a Third Class Honours and your percentage is " + total_Grade + "%.";
			} else if (total_Grade >= 40) {
				finalGrade.innerHTML = "This is a Pass Grade and your percentage is " + total_Grade + "%.";
			} else if (total_Grade >= 0) {
				finalGrade.innerHTML = "This is a Fail Grade and your percentage is " + total_Grade + "%.";
			}


		}
		else if (theSelection === 2){
			//level 7 selection
			total_Grade = runcalulation();

			p = isNaN(total_Grade);

			if (p === true){
				var theSelection = document.form1.sel1.selectedIndex;
				finalGrade.innerHTML = "You must fill in all boxes, enter numbers and not text!";

			}  else if (total_Grade >= 70) {
				finalGrade.innerHTML = "This is a Pass with Distinction and your percentage is " + total_Grade + "%.";
			} else if (total_Grade >= 60) {
				finalGrade.innerHTML = "This is a Pass with a Merit  Grade 1 and your percentage is " + total_Grade + "%.";
			} else if (total_Grade >= 50) {
				finalGrade.innerHTML = "This is a Pass with a Merit Grade 2 and your percentage is " + total_Grade + "%.";
			}  else if (total_Grade >= 40) {
				finalGrade.innerHTML = "This is a Pass Grade and your percentage is " + total_Grade + "%.";
			} else if (total_Grade >= 0) {
				finalGrade.innerHTML = "This is a Fail Grade and your percentage is " + total_Grade + "%.";
			}

		}
		else if (theSelection === 3){
			//level 5 selection
			total_Grade = runcalulation();

			p = isNaN(total_Grade);

			if (p === true){
				var theSelection = document.form1.sel1.selectedIndex;
				finalGrade.innerHTML = "You must fill in all boxes, enter numbers and not text!";

			}  else if (total_Grade >= 70) {
				finalGrade.innerHTML = "This is a Pass with Distinction and your percentage is " + total_Grade + "%.";
			} else if (total_Grade >= 60) {
				finalGrade.innerHTML = "This is a Pass with a Merit  Grade 1 and your percentage is " + total_Grade + "%.";
			} else if (total_Grade >= 50) {
				finalGrade.innerHTML = "This is a Pass with a Merit Grade 2 and your percentage is " + total_Grade + "%.";
			}  else if (total_Grade >= 40) {
				finalGrade.innerHTML = "This is a Pass Grade and your percentage is " + total_Grade + "%.";
			} else if (total_Grade >= 0) {
				finalGrade.innerHTML = "This is a Fail Grade and your percentage is " + total_Grade + "%.";
			}
		}

	}

	$(document).ready(function(){
		$(".resetSingle").click(function(){
			$(".singleReset").show();
		});
	});

