constul = document.querysel('.items');

//ul.remove();

// ul.lastElementChild.remove();

ul.firstElementchild.textContent= 'Hello';
ul.childern[1].innerText= 'Brad'
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');

btn.addEventListener('click',), (e) =>{
	console.log('click');
	document.querySelector('#my-form')
	.document.querySelector.background = '#ccc';
	document.querySlector('body').classList.add('bgdark')
	document.querySelector('.items').lastElememntChild.innerHTML=
	'<h1>Hello</h1>';
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('Submit' onSubmit);

function onSubmit(e) {
	e.preventDefault();

	if(nameInput.value === '' email.Input.value==='') {
		alert('Please enter fields');
	} else {
		console.log('success');
	}
}

const li = document.createElement(li);
li.appendChild(document.creatTextNode('{$nameInput.value'}: ${emailInput.value}'));	
));


userList.appenedChild(li);

//Clear fields
nameInput.value ='';
emailInput.value ='';
