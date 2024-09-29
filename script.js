const form = document.querySelector("form");
const age = document.querySelector(".age");
const result = document.getElementById("result");
for (i = 1; i < 100; i++) {
  let value = `<option value="${i}" >${i}</option>`;
  age.firstElementChild.insertAdjacentHTML("afterend", value);
}
form.addEventListener("submit", (x) => {
  x.preventDefault();
  let weight = document.querySelector(".weight").value;
  let height = document.querySelector(".height").value;
  if (weight === "") {
    alert( "please provide a vali weight(kg)")
  } else if (height === "") {
   alert("please provide a valid height(cm)");
  } else if(isNaN(weight)){
    alert('please provide a vali weight(kg)')
  }
   else{
    let problem = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = problem;
    //    document.querySelector('.weight').value = ''
    //    document.querySelector('.height').value = ''
  }
});
