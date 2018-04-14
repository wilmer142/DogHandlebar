$('.dog').click(function(e){
	e.preventDefault();
	var url = $(this).text();
	$.get("http://dog.ceo/api/breed/"+url+"/images/random", function(data){
		var dog = data.message;
		handlebar(dog);
	});
});

function handlebar(dog){
	var st = document.getElementById("dogs-template").innerHTML;
	var template = Handlebars.compile(st);
	console.log(dog);
	var dogs = {
		url: dog
	}
	var html = template({ dogs });
	$('.dogs').html(html);
};
