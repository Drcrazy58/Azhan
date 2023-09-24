const result = document.querySelector(".ip-result");
const ipdisplay = document.querySelector(".ip-display");
const Livelocation = document.querySelector(".location");
const wifiversion = document.querySelector(".Version");
const Countrynamwe = document.querySelector(".Country");
const Networknam = document.querySelector(".Network-com");
const Countrycode = document.querySelector(".C-code");


result.addEventListener("click" , () =>{
    axios.get('https://ipapi.co/198.16.74.204/json/').then ( response =>{
    ipdisplay.textContent = `Ip: ${response.data.ip}`;
    Livelocation.textContent = `Location: ${response.data.city} `;
    wifiversion.textContent = `Version: ${response.data.version} `;
    Countrynamwe.textContent = `Countryname: ${response.data.country_name} `;
Networknam.textContent = `Network Company Name: ${response.data.org} `;
    Countrycode.textContent = `CountryCode: ${response.data.country_calling_code} `;
});
} );
