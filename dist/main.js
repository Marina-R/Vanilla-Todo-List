var text = document.getElementById('textBox');
var clickButton = document.getElementById('myButton');
var sectionContent = document.getElementById('just-section');
var textArray = [];
var textArray = JSON.parse(localStorage.getItem('list'));
render();

function displayText (e) {
	textArray.push(text.value);
	render();
	storage(textArray);
} 

clickButton.addEventListener('click', displayText);

function pressEnter (e) {
	if (e.keyCode == 13) {
		textArray.push(text.value);
	}
	render();
	storage(textArray);
} 

text.addEventListener('keyup', pressEnter);

function render () {
	var todoList = '';
	for (var i = 0; i<textArray.length; i++) {
		todoList += textArray[i] + '<br>';
	}
	sectionContent.innerHTML = todoList;
}

function storage (textArray) {
	localStorage.setItem('list', JSON.stringify(textArray));
}

