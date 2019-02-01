var numsquare = 6;
var colors = generaterandomcolors(numsquare);
var squares = document.querySelectorAll(".square");
var pickedcol= pickcol();
var coldis=document.getElementById('coldis');
var messagedis = document.getElementById('message');
var h1= document.querySelector("h1");
var resbtn = document.getElementById('resbtn');
var easybtn = document.getElementById('easybtn');
var hardbtn = document.getElementById('hardbtn');
var mode = document.getElementsByClassName("mode");

coldis.textContent = pickedcol;


resbtn.addEventListener("click",function() {
	reset();
})

for(var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor= colors[i];

	squares[i].addEventListener("click",function(){
		var clickedcol = this.style.backgroundColor;
		if (clickedcol === pickedcol){
			messagedis.textContent = "correct!";
			changecolors(clickedcol);
			h1.style.backgroundColor = clickedcol;
			resbtn.textContent = "PLAY AGAIN";		
		}
		else{
			this.style.backgroundColor = "#232323";
			messagedis.textContent = "try again";		
		}
	});

}

for (var i = 0; i < mode.length; i++) {
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent == "EASY" ? numsquare = 3 : numsquare = 6;
		reset();	
	})	
}

function reset () {
colors = generaterandomcolors(numsquare);
	pickedcol = pickcol();
	coldis.textContent = pickedcol;

	for (i = 0; i < squares.length; ++i) {
		if (colors[i]){ 
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		}
		else{
		squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resbtn.textContent = "NEW COLORS";
	messagedis.textContent = "";
	
}

function changecolors(color){
	for (var i = 0; i <squares.length; i++) {
		squares[i].style.backgroundColor = color;
		}
}

function pickcol() {
	var rnd = Math.floor(Math.random()* colors.length);
	return colors[rnd];
}

function generaterandomcolors (num) {
	var arr = [];
	for (var i = 0; i <num; i++)
	{
		arr[i]=randomcolor();
	}
	return arr;
}

function randomcolor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return("rgb("+r+", "+g+", "+b+")");
}


// easybtn.addEventListener("click",function(){
// 	h1.style.backgroundColor = "steelblue";
// 	this.classList.add("selected");
// 	hardbtn.classList.remove("selected");
// 	numsquare = 3;
// 	colors = generaterandomcolors(numsquare);
// 	pickedcol = pickcol();
// 	coldis.textContent = pickedcol;

// 	for (i = 0; i < squares.length; ++i) {
// 		if(colors[i]){
// 		squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 		squares[i].style.display = "none";
// 		}
// 	}

// })

// hardbtn.addEventListener("click",function(){
// 	h1.style.backgroundColor = "steelblue";
// 	this.classList.add("selected");
// 	easybtn.classList.remove("selected");
// 	numsquare = 6;
// 	colors = generaterandomcolors(numsquare);
// 	pickedcol = pickcol();
// 	coldis.textContent = pickedcol;

// 	for (i = 0; i < squares.length; ++i) {
// 		squares[i].style.display = "block";
// 		squares[i].style.backgroundColor = colors[i];
// 	}

// })

