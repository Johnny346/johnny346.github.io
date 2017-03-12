//count correct answers
	var count = 0;
	//show QS when clicked by section
	var s1 = document.getElementById("s1");
	var s2 = document.getElementById("s2");
	var s3 = document.getElementById("s3");
	var s4 = document.getElementById("s4");
	var s5 = document.getElementById("s5");

	var section1= document.getElementById("section1");
	var section2= document.getElementById("section2");
	var section3= document.getElementById("section3");
	var section4= document.getElementById("section4");
	var section5= document.getElementById("section5");

	//setting event listeners to Qs buttons
	s1.addEventListener("click",showQs1);
	function showQs1() {
			section1.className = "show";
			section2.className = "hide";
			section3.className = "hide";
			section4.className = "hide";
			section5.className = "hide";
	}

	s2.addEventListener("click",showQs2);
	function showQs2() {
			section1.className = "hide";
			section2.className = "show";
			section3.className = "hide";
			section4.className = "hide";
			section5.className = "hide";
	}
	s3.addEventListener("click",showQs3);
	function showQs3() {
			section1.className = "hide";
			section2.className = "hide";
			section3.className = "show";
			section4.className = "hide";
			section5.className = "hide";
	}
	s4.addEventListener("click",showQs4);
	function showQs4() {
			section1.className = "hide";
			section2.className = "hide";
			section3.className = "hide";
			section4.className = "show";
			section5.className = "hide";
	}
	s5.addEventListener("click",showQs5);
	function showQs5() {
			section1.className = "hide";
			section2.className = "hide";
			section3.className = "hide";
			section4.className = "hide";
			section5.className = "show";
	}

	//set background color for active Qs link
	s1.className = "bckGroundLI";


	//question1 section
	var button1 = document.getElementById("button1");
	button1.addEventListener("click",q1);

	function q1() {
		var errorMsg = document.getElementById("error1");

		if (!document.getElementById('r1').checked && !document.getElementById('r2').checked) {
			errorMsg.innerHTML = "you must select one";
		}else if(document.getElementById('r1').checked || document.getElementById('r2').checked){
			section1.className = "hide";
			s1.className = "nobckGroundLI";
			section2.className = "show";
			s2.className = "bckGroundLI";
		}

	}

	//question2 section
	var button2 = document.getElementById("button2");
	button2.addEventListener("click",q2);

	function q2() {
		var errorMsg = document.getElementById("error2");
		if(!document.getElementById('qs2a1').checked && !document.getElementById('qs2a2').checked){
			errorMsg.innerHTML = "you must select one";
		}else if(document.getElementById('qs2a1').checked || document.getElementById('qs2a2').checked){
			section2.className = "hide";
			s2.className = "nobckGroundLI";
			section3.className = "show";
			s3.className = "bckGroundLI";
		}

	}

	//question3 section
	var button3 = document.getElementById("button3");
	button3.addEventListener("click",q3);


	function q3() {
		var errorMsg = document.getElementById("error3");
		var qs3 = document.getElementById("qs3").value;
		if(qs3.length > 0){
			//clear error message
			section3.className = "hide";
			s3.className = "nobckGroundLI";
			errorMsg.innerHTML = "";
			section4.className = "show";
			s4.className = "bckGroundLI";
		}else {
			section3.className = "show";
			//tell user to enter text
			errorMsg.innerHTML = "you must enter text";
		}

	}
	//question4 section
	var button4 = document.getElementById("button4");
	button4.addEventListener("click",q4);

	function q4() {
		var qs4 = document.getElementById("qs4").value;
		var errorMsg = document.getElementById("error4");
		if(qs4.length > 0){
			section4.className = "hide";
			s4.className = "nobckGroundLI";
			//clear error message
			errorMsg.innerHTML = "";
			section5.className = "show";
			s5.className = "bckGroundLI";
		}else {
			section4.className = "show";
			//tell user to enter text
			errorMsg.innerHTML = ("you must enter text");
		}

	}

	//question5 section
	var button5 = document.getElementById("button5");
	button5.addEventListener("click",q5);

	function q5() {
		var answer1;
		var answer2;
		var answer3;
		var answer4;
		var answer5;

		var qs5 = document.getElementById("qs5").value;
		var errorMsg = document.getElementById("error5");
		//qs1
		if (document.getElementById('r1').checked) {
			var r1 = document.getElementById('r1').value;
			answer1 = "Wrong a Petabyte is Larger";
		}else if (document.getElementById('r2').checked) {
			var r2 = document.getElementById('r2').value;
			answer1 = "Correct";
			count++;
		}
		//qs2
		if (document.getElementById('qs2a1').checked) {
			var qs2a1 = document.getElementById('qs2a1').value;
			answer2 = "Wrong ISP stands for Internet Service Provider";
		}else if (document.getElementById('qs2a2').checked) {
			var qs2a2 = document.getElementById('qs2a2').value;
			answer2 = "Correct";
			count++
		}
		//qs3
		var qs3 = document.getElementById("qs3").value;
		if(qs3 == "chrome" || qs3 == "Chrome"){
			answer3 = "Correct";
			count++;
		}else {
			answer3 = "Wrong Google Chrome is the most popular";
		}
		//qs4
		var qs4 = document.getElementById("qs4").value;
		if(qs4 == "True" || qs4 == "true"){
			answer4 = "Correct";
			count++;
		}else {
			answer4 = "Wrong HTTP does stands for Hyper Text Transfor Protocol";
		}
		//qs5
		if(qs5.length > 0){
			section5.className = "hide";
			//clear error message
			errorMsg.innerHTML = "";
			button1.className= "hide";
			button2.className= "hide";
			button3.className= "hide";
			button4.className= "hide";
			button5.className= "hide";

			section6.className = "show";
			s5.className = "nobckGroundLI";
			if(qs5 == "False" || qs5 == "false"){
				answer5 = "Correct";
				count++;
			}else {
				answer5 = "Wrong The Internet is 28 years old";
			}
			//change display width depending on count
			if(count < 5){
				var section6FeedBack = document.getElementById("section6");
				section6FeedBack.className = "section6";
			}
		}else {
			//tell user to enter text
			errorMsg.innerHTML = "you must enter text";
		}
		//show answers and feedback

		var fbm1 = document.getElementById("fbm1");
			fbm1.innerHTML = answer1;
		var fbm2 = document.getElementById("fbm2");
			fbm2.innerHTML = answer2;
		var fbm3 = document.getElementById("fbm3");
			fbm3.innerHTML = answer3;
		var fbm4 = document.getElementById("fbm4");
			fbm4.innerHTML = answer4;
		var fbm5 = document.getElementById("fbm5");
			fbm5.innerHTML = answer5;
		var correctAns = document.getElementById("correctAns");
			correctAns.innerHTML = count;

	}