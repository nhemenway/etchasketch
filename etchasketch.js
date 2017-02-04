$(document).ready(function(){
	make_grid(4);
});


function make_grid(size) {
	$("#grid").remove();
	$("main").append("<div id='grid'></div>")

	var width = 800;
	var blockWidth = (width/size) - 1;

	for (var i = 0; i < (size * size); i++) {
		$("#grid").append("<div></div>");
	}

	$("#grid").width(width);

	$("#grid div").width(blockWidth);
	$("#grid div").height(blockWidth);

	$("#grid div").mouseover(function() {
		$(this).addClass("black");
	});
}

function reset() {
	size = prompt("Select number of blocks per side");
	make_grid(size);
}

