
var inpt = document.querySelector('.user');
var btn = document.querySelector('.btn');
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


