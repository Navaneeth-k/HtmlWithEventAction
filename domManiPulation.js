// First we have get the elements from the html
// then we have read the entered value in the input box
// Then need to create an node list and a text node
// then append the created node list to that value

var inputEntered = document.getElementById('id2');
var buttonClick = document.getElementById('id1');
var listUo = document.querySelector('ul');

buttonClick.addEventListener("click", addingElements)
buttonClick.addEventListener('keypress',adddWhileKeyPress);

function addingElements()
{
	if (inputEntered.value.length>0)
	{
	creatingNewElementAndAppending();
	}
}

function adddWhileKeyPress(event)
{
	if (inputEntered.value.length>0 && event.keyCode===13)
	{
		creatingNewElementAndAppending();
	}
}

function creatingNewElementAndAppending()
{
	var elem = document.createElement('li');
	elem.appendChild(document.createTextNode(inputEntered.value));
	listUo.appendChild(elem);
	inputEntered.value="";
}