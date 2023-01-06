var clearinput = document.getElementById('Div').cloneNode(true);
document.getElementById('RemoveBtn').onclick = remove;
document.getElementById('UpBtn').onclick = moveUp;
document.getElementById('DwnBtn').onclick = moveDown;
clearinput.id = "Div-1";
var parentNode = document.getElementById('ContDiv');
var i = 0;
document.getElementById('AddBtn').onclick = addElement;
document.getElementById('SaveBtn').onclick = save;

function GetElementInsideContainer(containerID, childID) {
	var element = {};
	var elements = document.getElementById(containerID).getElementsByTagName("*");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].id === childID) {
			element = elements[i];
			break;
		}
	}
	return element;
}

function addElement(){
	var clone = clearinput.cloneNode(true);
	clone.id = "Div" + ++i;
	parentNode.appendChild(clone);
	var x = GetElementInsideContainer('Div'+i, "RemoveBtn");
	x.onclick = remove;
	x = GetElementInsideContainer('Div'+i, "UpBtn");
	x.onclick = moveUp;
	x = GetElementInsideContainer('Div'+i, "DwnBtn");
	x.onclick = moveDown;
}

function remove(){
	this.parentNode.remove();
}

function moveUp() {
	var span = this.parentNode;
	var	contdiv = span.parentNode;		
	if (span.previousElementSibling) {
		contdiv.insertBefore(span, span.previousElementSibling);
	}
}

function moveDown() {
	var span = this.parentNode;
	var	contdiv = span.parentNode;
	if (span.nextElementSibling) {
		contdiv.insertBefore(span, span.nextElementSibling.nextElementSibling)
	}
}

function save() {
	var ResultString = "{"
	var divs = document.getElementsByClassName("RowDiv");
	var i = 1;
	[].forEach.call(divs, function(el){
		let x = GetElementInsideContainer(el.id, "name");
		let y = GetElementInsideContainer(el.id, "number");
		ResultString = ResultString + '"' + x.value + '":"' + y.value + '"';
		if(i != divs.length)
		{
			ResultString = ResultString + ',';
			i++;
		}
	});
	ResultString = ResultString + "}";
	document.getElementById("str").textContent = ResultString;
}