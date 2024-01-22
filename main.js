let number;

document.addEventListener('input', function grabNumber(){
    number = Number(document.querySelector('#degree').value);
    console.log(number);
    console.log(typeof number);
})


function toFahrenheit(c){
    let tempF = ((c * 1.8) + 32).toFixed(1);
    let result = document.querySelector('#result');
    result.innerHTML = `${tempF}º F`;
}

function toCelsious(f){
    let tempC = ((f - 32) / 1.8).toFixed(1);
    let result = document.querySelector('#result');
    result.innerHTML = `${tempC}º C`;
}