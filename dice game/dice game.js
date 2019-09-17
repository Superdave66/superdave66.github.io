function rungame(){ 
namegenerator();  //runs the game. note succescfull completion  of game is almost impossible 

}
function namegenerator(name){
	let array_character = [["Ted", "Jeffery", "Ed", "Jack"],[ "Amy", "faye", "Suzan", "Tillie"]];
	let gender  = prompt("type 0 for male type 1 for female ");

	let genderArray = array_character[gender];
	let i= rolldice(4) - 1;
    let namegenerated = genderArray[i]; 
	console.log(namegenerated);
}
function rolldice(x){										//x= number of sides of dice being used with 0 and 1 of the sides 
	return Math.floor(Math.random() * x) + 1;
}	
 // function acceptanceofdeal(answer)
	// let acceptance = prompt("will you accept the offer");
 // 	console.log(acceptanceofdeal(acceptance);

						// prompt to ask if you want to accept the offer or not. if not go to game over screen if accepted go to first encounter 
rungame()