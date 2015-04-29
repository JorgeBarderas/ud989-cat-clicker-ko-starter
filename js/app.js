var initialCats = [
	{
		clickCount: 0,
		name: "Tabby",
		imgSrc: "./img/22252709_010df3379e_z.jpg",
		imgAttribution: "http://www.flickr.com",
		nicknames: ['Tabtab','T-Bone','Mr. T','Tabitha','Tab']
	},
	{
		clickCount: 0,
		name: "Josh",
		imgSrc: "./img/434164568_fea0ad4013_z.jpg",
		imgAttribution: "http://www.flickr.com",
		nicknames: ['Joshy','J']
	},
	{
		clickCount: 0,
		name: "Stuard",
		imgSrc: "./img/1413379559_412a540d29_z.jpg",
		imgAttribution: "http://www.flickr.com",
		nicknames: ['Stu','Big S']
	},
	{
		clickCount: 0,
		name: "Martin",
		imgSrc: "./img/4154543904_6e2428c421_z.jpg",
		imgAttribution: "http://www.flickr.com",
		nicknames: ['Marti','M Boy']
	},
	{
		clickCount: 0,
		name: "Nick",
		imgSrc: "./img/9648464288_2516b35537_z.jpg",
		imgAttribution: "http://www.flickr.com",
		nicknames: ['Nicky','Sleepy Nick']
	}
];
var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.stage = ko.computed(function() {
		var stg = "";
		switch (true) {
			case (this.clickCount() < 10):
				stg = "Newborn";
				break;
			case (this.clickCount() >= 10 && this.clickCount() < 50):
				stg = "Infant";
				break;
			case (this.clickCount() >= 50 && this.clickCount() < 100):
				stg = "Child";
				break;
			case (this.clickCount() >= 100 && this.clickCount() < 200):
				stg = "Teen";
				break;
			case (this.clickCount() >= 200 && this.clickCount() < 500):
				stg = "Adult";
				break;
			case (this.clickCount() >= 500):
				stg = "Ninja";
				break;
			default:
				stg = "No idea";
				break;
		}
		return stg;
	}, this);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);
}
var ViewModel = function() {
	var self = this;
	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCount = function() {
		self.currentCat().clickCount(self.currentCat().clickCount()+1);
	};

	this.changeCat = function(cat) {
		self.currentCat(cat);
	};
}

ko.applyBindings(new ViewModel());
