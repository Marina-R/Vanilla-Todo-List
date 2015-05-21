var text = document.getElementById('textBox');
var clickButton = document.getElementById('myButton');
var textArray =[];
var sectionContent = document.getElementById('just-section');

function displayText (e) {
	textArray.push(text.value);
	render();
} 

clickButton.addEventListener('click', displayText);

function render () {
	sectionContent.innerHTML = '';
	
	var todoList = '';
	var count = 1;
	for (var i = 0; i<textArray.length; i++) {
		todoList +=  count + '.' + textArray[i] + ' ';
		count++;
	}
	sectionContent.innerHTML = todoList;
}