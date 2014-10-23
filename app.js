/**
 *  Creating Google's Music app with FramerJS.
 *
 *  @author: Amha Mogus <amha.mogus@gmail.com>
 *  @date: March 14, 2014
 **/


//Variables
var listenNow = PSD.ListenNowScreenScroll
var phone = PSD.MyPhone
var screen = PSD.ScreenBG
var actionBar = PSD.ActionBar
var systemBar = PSD.SystemBar

//Setting up system bar, action bar
phone.x = 0
phone.y = 0
systemBar.superView = phone
systemBar.x = 0
systemBar.y = 0
actionBar.superView = phone
actionBar.x = 0
actionBar.y = systemBar.maxY

//Initializing Screen
screen.superView = phone
screen.x = 0
screen.y = actionBar.maxY

//Initializing Listen Now Screen
listenNow.superView = screen
listenNow.x = 10
listenNow.y = 10
listenNow.height = screen.height - 10

//Navigation Panel
PSD.NavigationPanel.x = -518

//Setting Up Toggle Behavior to Navigation Panel
showNav = function(){
	PSD.NavigationPanel.animate({
		properties: {x:0},
		curive: "ease-out",
		time: 400
		});
}
hideNav = function(){
	PSD.NavigationPanel.animate({
		properties: {x:-518},
		curve: "ease-out",
		time: 400
		});
}
navToggle = utils.toggle(showNav, hideNav);

//Adding toggle behavior to Navigation Drawer Object
PSD.NavigationDrawerBtn.on("click", function(event){
	navToggle()()
});

//Radio Button Event Handler
PSD.NavRadioBtn.on("click", function(event){
	hideNav()
	PSD.ListenNowScreenScroll.visible = false;
	PSD.RadioScreen.animate({
		properties: {x:12},
		curve: "ease-out",
		time: 400
	});
});

//Listen Now Event Handler
PSD.NavListenNowBtn.on("click", function(event){
	hideNav()
	PSD.RadioScreen.animate({
		properties: {x:600},
		curve: "ease-out",
		time: 100
	});
	PSD.BachContent.animate({
		properties: {x:600},
		curve: "ease-out",
		time: 300
	});
	PSD.ListenNowScreenScroll.visible = true;
	PSD.ListenNowScreenScroll.animate({
		properties: {x:12},
		curve: "ease-out",
		time: 300
		});
});

PSD.BachAlbumCardBtn.on("click", function(event){
	PSD.ListenNowScreenScroll.animate({
		properties: {x:-518},
		curve: "ease-out",
		time: 400
		});
	PSD.BachContent.animate({
		properties: {x:0, y:actionBar.maxY},
		curve: "ease-out",
		time: 500
	});
});
