
	var bio = {
		'name' : 'John Mulcahy',
		'role' : 'Web Developer',
		'contacts' : {
			'mobile' : '+353879007991',
			'email' : 'Johnnymul346@gmail.com',
			'github' : 'Johnny346',
			'location' : 'Co. Limerick, Ireland'
			},
		'welcomeMessage' : 'Hi my name is John Mulcahy and I am pursuing my passion in web development',
		'skills' : [
			'HTML', 'CSS' , 'Programming' , 'JavaScript' , 'Bootstrap' , 'Git'
			],
		'biopic' : 'images/profile.png'
	};

bio.display = function () {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var image = HTMLbiopic.replace('%data%', 'images/profile.png');
	var welcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedContactInfo = [];
		formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
		formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
		formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));
		formattedContactInfo.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
	//prepend or append variables
	$('#header').prepend(formattedName,formattedRole);
	$('#header').append(image);
	$('#header').append(welcomeMessage);

	if(bio.skills.length) {
		$('#header').append(HTMLskillsStart);
		for( var i in bio.skills)
			if(bio.skills.length > 0) {
				$('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
			}
		for(i in formattedContactInfo)
			if(bio.skills.length > 0) {
				$('#topContacts').append(formattedContactInfo[i]);
				$('#footerContacts').append(formattedContactInfo[i]);
			}
	}
};


	var work = {
		'jobs': [
			{
				'employer': 'Kostal',
				'title': 'Factory Operator',
				'location': 'Abbeyfeale, Co. Limerick, Ireland',
				'dates': 'September 2013 - Present',
				'description': 'I am currently working full time in the Kostal Factory as a general operator. I Work as part of a team on the production of circuit boards for hybrid electric cars. Through my experience as an operator in the automobile electronics industry I have developed an ability to be observant of defects and detail while working in a time efficient manner.'
			}
		]
	};

work.display = function () {
	for(var i in work.jobs)
		if(work.jobs.length){
			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace('%data%', work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(formattedEmployerWorkTitle,formattedWorkLocation,formattedDatesWorked,formattedWorkDescription);
		}
};


	var education = {
		'schools': [
			{
				'name': 'Cork Institute of Technology',
				'dates': '2010 - 2013',
				'location': 'Cork, Ireland',
				'degree': 'B.Sc.Horticulture',
				'majors' : [
							'Computers'
							],
				'url': 'www.cit.ie'
			}
			],
		'onlineCourses': [
			{
				'school': 'Udacity',
				'title': 'Object-Oriented Javascript',
				'date': 'January 2016',
				'url': 'https://www.udacity.com/course/ud015'
			},
			{
				'school': 'Udacity',
				'title': 'Javascript Basics',
				'date': 'October 2015',
				'url': 'https://www.udacity.com/course/ud804'
			},
			{
				'school': 'Udacity',
				'title': 'Front-end developer Nano-Degree',
				'date': 'June 2016',
				'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
			}
		]
	};

education.display = function () {
	for(var i in education.schools)
		if(education.schools.length > 0 || education.onlineCourses.length > 0) {
			var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
			$('.education-entry:last').append(formattedSchoolDates,formattedSchoolLocation,formattedSchoolMajor);
		}
	for( i in education.onlineCourses)
		if(education.onlineCourses.length) {
			var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title).replace('#', education.onlineCourses[i].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
			var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].date);
			var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url).replace('#', education.onlineCourses[i].url);
			$('#education').append(HTMLonlineClasses);
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
			$('.education-entry:last').append(formattedOnlineDates,formattedOnlineURL);
		}
};



	var projects = {
		'projects': [
			{
				'title': 'www.collegeresultscalculator.com',
				'dates': 'December 2014 - January 2015',
				'description': 'Created an online calculator for students who receive their results as fractions at the end of the year.',
				'images': ['images/program1.png'],
				'url': 'www.myresultscalculator.com'
			},
			{
				'title': 'Online Portfolio',
				'dates': 'July 2015',
				'description': 'Created an online portfolio of work',
				'images': ['images/portfolioPageSmall.png'],
				'url': 'http://www.johnmulcahydesigns.com/'
			},
			{
				'title': 'Website project Goat farm',
				'dates': 'September 2015 - November 2015',
				'description': 'Created a goat farm website as a project.',
				'images': ['images/murphys.png'],
				'url': 'http://murphysgoatfarm.com'
			}
		]
	};

projects.display = function () {
	for(var i in projects.projects)
		if(projects.projects.length) {
			var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title).replace('#', projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);

			$('#projects').append(HTMLprojectStart);
			$('.project-entry:last').append(formattedProjectTitle,formattedProjectDates,formattedProjectDescription);

	for(var img in projects.projects[i].images)
		if(projects.projects.length > 0){
			var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[img]);
			$('.project-entry:last').append(formattedProjectImage);
		}
	}
};

bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);