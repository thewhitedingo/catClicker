$(function() {
// model
var Cat = function (id, name, pic, picID, count, countID) {
	this.id = id;
	this.name = name;
	this.pic = pic;
	this.picID = picID;
	this.count = count;
	this.countID = countID;
};

Cat.prototype.giveCats = function() {
	var catOne = new Cat('catOne', 'Mittens', 'images/cat.jpg', 'catOnePic', 0, 'countOne');
	var catTwo = new Cat('catTwo', 'Scruffie', 'images/catTwo.jpg', 'catTwoPic', 0, 'countTwo');
	var catThree = new Cat('catThree', 'Paws', 'images/catThree.jpg', 'catThreePic', 0, 'countThree');
	var catFour = new Cat('catFour', 'Fluff', 'images/catFour.jpg', 'catFourPic', 0, 'countFour');
	var catFive = new Cat('catFive', 'Snowball', 'images/catFive.jpg', 'catFivePic', 0, 'countFive');

	var cats = [catOne, catTwo, catThree, catFour, catFive];

	return cats;
} 

var catArray = new Cat(null, null, null, null, null, null);


// octopus
var octopus = {
	init: function() {
		view.addButtons();
	},
	getCats: function() {
		return catArray.giveCats();
	},

};
// view
var view = {
	addButtons: function() {
		var getCats = octopus.getCats();
		for (var i=0; i < getCats.length; i++) {
			$('#catList').append('<li><button class="' + getCats[i].id + '"> ' + getCats[i].name + '</button></li>')

			var button = $('.' + getCats[i].id);

			button.on('click', (function(cat){
				return function() {
					view.showCat(cat);
				}
			})(getCats[i]));
		};
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
	},
};

octopus.init();
});