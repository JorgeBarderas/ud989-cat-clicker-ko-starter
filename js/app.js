var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Tabby");
	this.stage = ko.computed(function() {
		var stg = "";
		switch (true) {
			case (this.clickCount() < 10):
				stg = "Newborn";
				break;
			case (this.clickCount() >= 10):
				stg = "Infant";
				break;
			case (this.clickCount() >= 100):
				stg = "Teen ";
				break;
			default:
				stg = "No idea";
				break;
		}
		return stg;
	}, this);
	this.imgSrc = ko.observable("./img/22252709_010df3379e_z.jpg");
	this.imgAttribution = ko.observable("http://www.flicker.com");
    this.cats = ko.observableArray([
        { name: "Josh", nickname: 'Tabtab'},
        { name: "Martin", nickname: 'T-Bone'},
        { name: "Nicholas", nickname: 'Mr. T'},
        { name: "Sara", nickname: 'Tabitha'},
        { name: "Tim", nickname: 'Tab'}
    ]);

	this.incrementCount = function() {
		this.clickCount(this.clickCount()+1);
	};

}
ko.applyBindings(new ViewModel());
