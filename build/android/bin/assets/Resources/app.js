var win1 = Ti.UI.createWindow({
	backgroundColor: "black"
});

win1.open();

var win2 = Ti.UI.createWindow({
	backgroundColor: "black"
});

var win3 = Ti.UI.createWindow({
	backgroundColor: "black"
});

var homeTitle = Ti.UI.createLabel({
	text: "Study Abroad",
	textAlign: 'center',
	width: 'auto',
	top: 50,
	color: 'white'
	
});

win1.add(homeTitle);


var logo = Ti.UI.createView({
	backgroundImage: 'Pictures/logo.png',
	top: 20,
	width: 110,
	height: 20
});

win1.add(logo);

var logo2 = Ti.UI.createView({
	backgroundImage: 'Pictures/logo.png',
	top: 20,
	width: 110,
	height: 20
});

win2.add(logo2);

var logo3 = Ti.UI.createView({
	backgroundImage: 'Pictures/logo.png',
	top: 20,
	width: 110,
	height: 20
});

win3.add(logo3);




var studyInfo = Ti.UI.createLabel({
	color: "white",
	text: "The mission of Study Abroad is to provide access to international experiences to all University of Idaho students, to promote and facilitate the development of globally competent students, and to contribute to campus internationalization and global learning through the study abroad experience.",
	top: 240,
	right: 10,
	left: 10
});

win1.add(studyInfo);

var homePicture = Ti.UI.createView({
	backgroundImage: 'Pictures/homePicture.jpg',
	top: 90,
	height: 125,
	right: 10,
	left: 10
});

win1.add(homePicture);


var whyButton = Ti.UI.createButton({
	title: "Why Stody Abroad?",
	bottom: 125,
	left: '30%',
	color: 'white',
	backgroundColor: '#BC9B6A'
});

win1.add(whyButton);

var stepsButton = Ti.UI.createButton({
	title: "Steps to Study Abroad",
	bottom: 50,
	right: '22%',
	color: 'white',
	backgroundColor: '#BC9B6A'
});

win1.add(stepsButton);

///////////////////////////////////////////////////////////////////////////////////////////////////
//window 2 stuff


var whyTitle = Ti.UI.createLabel({
	text: "Why Study Abroad?",
	textAlign: 'center',
	width: 'auto',
	top: 50,
	color: 'white'
	
});

win2.add(whyTitle);

var whyPicture = Ti.UI.createView({
	backgroundImage: 'Pictures/whyPicture.jpg',
	top: 90,
	height: 125,
	right: 10,
	left: 10
});

win2.add(whyPicture);


var whyInfoTitle = Ti.UI.createLabel({
	color: "white",
	text: "Is it worth it?",
	top: 230,
	right: 10,
	left: 10
});

win2.add(whyInfoTitle);

var whyInfo = Ti.UI.createLabel({
	color: "white",
	text: "Study abroad is fun. You’ll be able to travel to amazing towns and cities, visit historically significant monuments and incredible museums, sample different and delicious foods, experience interesting and colorful festivals, and best of all, make friends with many of the students and locals you meet.",
	top: 250,
	right: 10,
	left: 20
});

win2.add(whyInfo);

var whyImpactTitle = Ti.UI.createLabel({
	color: "white",
	text: "The Impact of Study Abroad on Students",
	top: 380,
	right: 10,
	left: 10
});

win2.add(whyImpactTitle);

var whyImpactInfo1 = Ti.UI.createLabel({
	color: "white",
	text: "98% Reported the study abroad experience helped them to better understand their own cultural values and biases",
	top: 400,
	right: 10,
	left: 20
});

win2.add(whyImpactInfo1);

var whyImpactInfo2 = Ti.UI.createLabel({
	color: "white",
	text: "97% Reported that studying abroad served as a catalyst for increased maturity",
	top: 460,
	right: 10,
	left: 20
});

win2.add(whyImpactInfo2);

var whyImpactInfo3 = Ti.UI.createLabel({
	color: "white",
	text: "96% Indicated that it increased self confidence",
	top: 500,
	right: 10,
	left: 20
});

win2.add(whyImpactInfo3);

var backButton = Ti.UI.createButton({
	backgroundImage: 'Pictures/backIcon.png',
	top: 5,
	left: 5,
	width: 15,
	height: 15
});
win2.add(backButton);

//////////////////////////////////////////////////////////////////////////////////////
//////win3 stuff


var stepsTitle = Ti.UI.createLabel({
	text: "Steps to Study Abroad",
	textAlign: 'center',
	width: 'auto',
	top: 50,
	color: 'white'
});
win3.add(stepsTitle);
	
var stepsPicture = Ti.UI.createView({
	backgroundImage: 'Pictures/stepsPicture.jpg',
	top: 90,
	height: 125,
	right: 10,
	left: 10
});
win3.add(stepsPicture);

var backButton2 = Ti.UI.createButton({
	backgroundImage: 'Pictures/backIcon.png',
	top: 5,
	left: 5,
	width: 15,
	height: 15
});
win3.add(backButton2);


var step1Button = Ti.UI.createButton({
	color: 'white',
	backgroundColor: '#BC9B6A',
	title: 'Step 1: Pre-Application',
	top: 250,
	left: '25%'
});
win3.add(step1Button);

var step2Button = Ti.UI.createButton({
	color: 'white',
	backgroundColor: '#BC9B6A',
	title: 'Step 2: Apply',
	top: 300,
	left: '25%'
});
win3.add(step2Button);

var step3Button = Ti.UI.createButton({
	color: 'white',
	backgroundColor: '#BC9B6A',
	title: 'Step 3: Post-Application',
	top: 350,
	left: '25%'
});
win3.add(step3Button);

var step4Button = Ti.UI.createButton({
	color: 'white',
	backgroundColor: '#BC9B6A',
	title: 'Step 4: While Abroad',
	top: 400,
	left: '25%'
});
win3.add(step4Button);

var step5Button = Ti.UI.createButton({
	color: 'white',
	backgroundColor: '#BC9B6A',
	title: 'Step 5: Reentry',
	top: 450,
	left: '25%'
});
win3.add(step5Button);




backButton2.addEventListener('click',goHome2);
function goHome2(){
	win1.open();
	win3.close();
}

backButton.addEventListener('click',goHome);
function goHome(){
	win1.open();
	win2.close();
}

stepsButton.addEventListener('click',goToSteps);
function goToSteps(){
	win3.open();
	win1.close();
};


whyButton.addEventListener('click', goToWhy);

function goToWhy(){
	win2.open();
	win1.close();
};
