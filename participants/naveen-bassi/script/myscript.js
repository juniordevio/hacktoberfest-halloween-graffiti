function displayContent(ele_id){
  var spookLevel = document.getElementById(ele_id).value;
  resetVisibility();
  if(spookLevel == "")
    spookLevel = -1;
  if(spookLevel == 10)
    document.getElementById('eq_10').style.display = "block";
  else if(spookLevel>10)
    document.getElementById('mo_10').style.display = "block";
  else if(spookLevel<10 && spookLevel>0)
    document.getElementById('le_10').style.display = "block";
  else
    document.getElementById('in_10').style.display = "block";
}

function resetVisibility() {
  document.getElementById('eq_10').style.display = "none";
  document.getElementById('mo_10').style.display = "none";
  document.getElementById('le_10').style.display = "none";
  document.getElementById('in_10').style.display = "none";
}
