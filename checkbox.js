function check(){
	var checkboxes = document.getElementsByClassName('check');
	// var checkboxes = document.getElementsByName('nm');
  var checkboxesChecked = [];
  for (var i=0; i<checkboxes.length; i++) {
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i].value);
     }
  }
  document.getElementById("show").value = checkboxesChecked.join(' ');
  // document.getElementById("show").parentElement.innerText = checkboxesChecked.join(' ');

}