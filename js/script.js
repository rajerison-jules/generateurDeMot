
var inpt = document.querySelector('.user');
var btn = document.querySelector('.btn');
var validation = document.querySelector('.validation')
btn.addEventListener('click',(e)=>{
	e.preventDefault();
	var user= inpt.value;
	document.querySelector(".texte").innerHTML = renverser(user);
})
function renverser(texte) {
	var transmot = texte.split('');
	var transtab = transmot.reverse();
	var unionmot = transtab.join('');
	return unionmot;
}
btn.addEventListener('click',f_valid);
function f_valid(e){
	if (inpt.value == "") {
		e.preventDefault();
		validation.innerHTML = "champ requis";
		
	}
	else{
		validation.innerHTML = "";
		inpt.value ="";
	}
}


