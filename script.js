$(function() {
// model
var Cat = function (id, buttonID, name, pic, picID, count, countID) {
	this.id = id;
	this.buttonID = buttonID;
	this.name = name;
	this.pic = pic;
	this.picID = picID;
	this.count = count;
	this.countID = countID;
};

var catOne = new Cat('catOne', 'clickOne', 'Mittens', 'images/cat.jpg', 'catOnePic', 0, 'countOne');
var catTwo = new Cat('catTwo', 'clickTwo', 'Scruffie', 'images/catTwo.jpg', 'catTwoPic', 0, 'countTwo');
var catThree = new Cat('catThree', 'clickThree', 'Paws', 'images/catThree.jpg', 'catThreePic', 0, 'countThree');
var catFour = new Cat('catFour', 'clickFour', 'Fluff', 'images/catFour.jpg', 'catFourPic', 0, 'countFour');
var catFive = new Cat('catFive', 'clickFive', 'Snowball', 'images/catFive.jpg', 'catFivePic', 0, 'countFive');

var cats = [catOne, catTwo, catThree, catFour, catFive];

// octopus
var octopus = {
	init: function() {
		viewOne.addButtons();
	},
	showCat: function(cat) {
		$('.currentCat').remove();

		$('body').append('<div id="' + cat.id + '" class="currentCat"><h1 id="' + cat.buttonID + '" class="blue">' + cat.name + '</h1></div>');
		click = $('#' + cat.buttonID);
		catDiv = $('#' + cat.id);
		catDiv.append('<div id="' + cat.name + '"><h2>Count: <span id="' + cat.countID + '">' + cat.count + '</span></h2></div>')
		countID = $('#' + cat.countID);
		imageDiv = $('#' + cat.name);
		imageDiv.append('<img id="'+ cat.picID + '" src="' + cat.pic + '"></div>');
		catPic = $('#' + cat.picID);

		catPic.on('click', (function (countID, cat) {
			return function() {
				cat.count++;

				countID.text(cat.count);
			}
		})(countID, cat));
		}
};
// view
var viewOne = {
	addButtons: function() {
		for (var i=0; i < cats.length; i++) {
			$('#catList').append('<li><button class="' + cats[i].buttonID + '"> ' + cats[i].name + '</button></li>')

			var button = $('.' + cats[i].buttonID);

			button.on('click', (function(cat){
				return function() {
					octopus.showCat(cat);
				}
			})(cats[i]));
		};

	},
};

octopus.init();
});