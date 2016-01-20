var Cat = function (id, clickID, name, pic, picID, count, countID) {
	this.id = id;
	this.clickID = clickID;
	this.name = name;
	this.pic = pic;
	this.picID = picID;
	this.count = count;
	this.countID = countID;
};

Cat.prototype.countIncrement = function () {
	countsSel[this.value].text(count);
};

Cat.prototype.addCat = function () {
	$('body').append('<div id="' + this.id + '" value="' + this.value + '"><h1 id="' + this.clickID + '" class="blue">' + this.name + '</h1></div>');
	click = $('#' + this.clickID);
	catDiv = $('#' + this.id);
	catDiv.append('<div class=hide id="' + this.name + '"><h2>Count: <span id="' + this.countID + '">' + this.count + '</span></h2></div>')
	countID = $('#' + this.countID);
	hiddenDiv = $('#' + this.name);
	hiddenDiv.append('<img id="'+ this.picID + '" src="' + this.pic + '"></div>');
	catPic = $('#' + this.picID);

	click.on('click', (function (hiddenDiv) {
		return function() {
			hiddenDiv.toggleClass('hide');
		};
	})(hiddenDiv));

	catPic.on('click', (function (countID, cat) {
		return function() {
			cat.count++;

			countID.text(cat.count);
		}
	})(countID, this));
}

var catOne = new Cat('catOne', 'clickOne', 'Mittens', 'images/cat.jpg', 'catOnePic', 0, 'countOne');
var catTwo = new Cat('catTwo', 'clickTwo', 'Scruffie', 'images/catTwo.jpg', 'catTwoPic', 0, 'countTwo');
var catThree = new Cat('catThree', 'clickThree', 'Paws', 'images/catThree.jpg', 'catThreePic', 0, 'countThree');
var catFour = new Cat('catFour', 'clickFour', 'Fluff', 'images/catFour.jpg', 'catFourPic', 0, 'countFour');
var catFive = new Cat('catFive', 'clickFive', 'Snowball', 'images/catFive.jpg', 'catFivePic', 0, 'countFive');

var cats = [catOne, catTwo, catThree, catFour, catFive];

catOne.addCat();
catTwo.addCat();
catThree.addCat();
catFour.addCat();
catFive.addCat();


// <section>
// 		<div>
// 			<header id='clicks'>
// 				<h1>Clicks: <span id='clickCountOne'>0</span></h1>
// 				<p> How many times can you click on this cat? </p>
// 			</header>
// 		</div>
// 		<div id="catOne">
// 			<h2 id='catNameOne'><h2>
// 			<picture>
// 				<img id='catPicOne' class='img' src='images/cat.jpg' alt='Cat Picture'  value='0'>
// 			</picture>
// 		</div>
// 	</section>