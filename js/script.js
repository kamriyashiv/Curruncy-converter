// Currency Converter
const Currency1 = document.getElementById("Currency1");
const Currency2 = document.getElementById("Currency2");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const rate1 = document.getElementById("rate1");
const rate2 = document.getElementById("rate2");
const Cname1 = document.getElementById("Cname1");
const Cname2 = document.getElementById("Cname2");
const cDateT = document.getElementById("cDate");
const CurrencyData=[
    "USD","AED","ARS","AUD","BGN","BRL","BSD","CAD","CHF","CLP","CNY","COP","CZK","DKK","DOP","EGP","EUR","FJD","GBP","GTQ","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","KZT","MVR","MXN","MYR","NOK","NZD","PAB","PEN","PHP","PKR","PLN","PYG","RON","RUB","SAR","SEK","SGD","THB","TRY","TWD","UAH","UYU","ZAR"
];

CurrencyData.forEach((val)=>{
    if(val==="USD"){
        Currency1.innerHTML+=`<option value="${val}" selected>${val}</option>`;        
    }else if(val==="INR"){
        Currency2.innerHTML+=`<option value="${val}" selected>${val}</option>`;
    }
    Currency1.innerHTML+=`<option value="${val}">${val}</option>`;
    Currency2.innerHTML+=`<option value="${val}" selected>${val}</option>`;
});

function calculate(){
    let cVal1 = Currency1.value;
    let cVal2 = Currency2.value;

    const api = `https://api.exchangerate-api.com/v4/latest/${cVal1}`;
    fetch(api).then((response)=>{
        return response.json();
    }).then((data)=>{       
        let cDate = data.date;       

        let rates = data.rates[cVal2];
        let rateResult = input1.value* rates;  

            cDateT.innerText=`${cDate}`;
            rate1.innerText=`${input1.value}`;
            Cname1.innerText=`${Currency1.value}`;
            rate2.innerText=`${rateResult}`;  
            input2.value=`${rateResult}` ; 
            Cname2.innerText=`${Currency2.value}`;
        
    }).catch((error)=>{
        alert("Data Not Found");
    });

}

Currency1.addEventListener("change",calculate);
Currency2.addEventListener("change",calculate);
input1.addEventListener("change",calculate);

calculate();