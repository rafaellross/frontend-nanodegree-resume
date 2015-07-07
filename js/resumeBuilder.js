var bio = {
	"name" : "Rafael Ross",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "+55 11 98278-8156",
		"email" : "rafaellross@gmail.com",
		"github": "rafaellross",
		"twitter": "rafaellross",
		"location": "Sao Paulo, SP"
	},
	"welcomeMessage": "Welcome to my resume, look my skills bellow",
	"skills": ["JavaScript", "CSS", "HTML", "Databases: SQL Server, Oracle and MySQL"],
	"biopic": "images/my-picture.jpg",
	display: function(){
		HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
		$('#header').prepend(HTMLheaderRole);

		HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
		$('#header').prepend(HTMLheaderName);

		HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$('#header').append(HTMLbioPic);

		HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$('#topContacts').append(HTMLmobile);

		HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
		$('#topContacts').append(HTMLemail);

		HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$('#topContacts').append(HTMLgithub);

		HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$('#topContacts').append(HTMLlocation);

		HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$('#header').append(HTMLwelcomeMsg);

		if(bio.skills.length > 0){
			$('#header').append(HTMLskillsStart);
			for(skill in bio.skills){
				formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$('#skills').append(formattedSkill);
			}
		}
	}
}; //End of bio object

var education = {
	"schools": [
	{
		"name": "Instituto Brasileiro de Tecnologia Avancada - IBTA",
		"location": "Sao Paulo",
		"degree": "Undergraduate",
		"majors": ["Database Administration"],
		"dates": 2014,
		"url": "MBA in Database Administration"
	},
	{
		"name": "Faculdade Sumare",
		"location": "Sao Paulo",
		"degree": "Undergraduate",
		"majors": ["Computer Science", "Information Technology"],
		"dates": 2013,
		"url": "http://www.sumare.edu.br/?page_id=1944"
	},
	{
		"name": "Centro Tecnico Profissionalizante Sequencial",
		"location": "Sao Paulo",
		"degree": "Certificate",
		"majors": ["Health and Risk Communication", "Public Health Administration"],
		"dates": 2008,
		"url": "http://www.sequencialctp.com.br/cursos/det/6"
	}
	],
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	],
	display: function(){
		$('#education').append(HTMLschoolStart);
		for(school in education.schools){
			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$('.education-entry:last').append(formattedSchool + formattedDegree);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$('.education-entry:last').append(formattedDates);

			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$('.education-entry:last').append(formattedLocation);

			for(major in education.schools[school].majors){
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$('.education-entry:last').append(formattedMajor);
			}
		}
	}
}; //End of education object

var work = {
	"jobs": [
	{
		"employer": "CMS Consultoria",
		"title": "ERP Analyst",
		"location": "Atibaia - SP",
		"dates": "2015 May - Future",
		"description": "Reporting development, database installation and implementation. Set up the parameters to make the system attend payroll rules. Supporte for clientes via phone, e-mail and presential"
	},
	{
		"employer": "Totvs Nacoes Unidas",
		"title": "ERP Analyst",
		"location": "Sao Paulo - SP",
		"dates": "2014 December - 2015 April",
		"description": "Reporting development, database installation and implementation. Set up the parameters to make the system attend payroll rules. Supporte for clientes via phone, e-mail and presential"
	},
	{
		"employer": "Formula Tecnologia e Desenvolvimento",
		"title": "ERP Analyst",
		"location": "Sao Paulo - SP",
		"dates": "2011 July - Apr 2014",
		"description": "Reporting development, database installation and implementation. Set up the parameters to make the system attend payroll rules. Supporte for clientes via phone, e-mail and presential"
	}
	],
	display: function(){
		for(job in work.jobs){
			$('#workExperience').append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			$('.work-entry:last').append(formattedEmployer + formattedTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$('.work-entry:last').append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$('.work-entry:last').append(formattedDescription);
		}
	}
}; //End of work object

var projects = {
	"projects": [
	{
		"title": "Payroll Implementation",
		"dates": "Oct 2014 - Feb 2014",
		"description": "Setup the system",
		"images":[
		"http://placehold.it/350x150",
		"http://placehold.it/350x150"
	]
	},
	{
		"title": "Payroll Implementation",
		"dates": "Feb 2015 - May 2015",
		"description": "Setup the system",
		"images":[
		"http://placehold.it/350x150",
		"http://placehold.it/350x150"
	]
	}],
	display : function (){
		for(project in projects.projects){
			$('#projects:last').append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$('.project-entry:last').append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$('.project-entry:last').append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$('.project-entry:last').append(formattedDescription);
			for(img in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
};//End of projetcs object

//Build the resume
bio.display();
work.display();
projects.display();
education.display();
$('#map-div').append(googleMap);