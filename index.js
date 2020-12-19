// получаем элементы из DOM
let male = document.getElementById('male');
let female = document.getElementById('female');
let age = document.getElementById('age');
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let physica = document.getElementById('physical-activity');
let infoResult = document.getElementById('infoResult');
let result = document.getElementById('result');
function cilo(){
  let eat;
  if(female.value == "Женщина"){
    eat = ((weight.value * 10) + (height.value * 6.25) - (age.value * 5) - 161) * physica.value;
    
  }else{
    eat = ((weight.value * 10) + (height.value * 6.25) - (age.value * 5) + 5) * physica.value;
  }
  result.style = "display:block;";
  infoResult.style = "display:block;";
  infoResult.innerHTML=`${Math.floor(eat)}`;
  return (Math.floor(eat))
}

