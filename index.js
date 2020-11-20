//country name of all countries get from Country name excel sheet then processing the Country
//name coloumn with Excel concatanation and transpose method, then stored as javascript array
var rawCountries=["Andorra,","United Arab Emirates,","Afghanistan,","Antigua and Barbuda,","Anguilla,","Albania,","Armenia,","Angola,","Antarctica,","Argentina,","American Samoa,","Austria,","Australia,","Aruba,","Aland Islands,","Azerbaijan,","Bosnia and Herzegovina,","Barbados,","Bangladesh,","Belgium,","Burkina Faso,","Bulgaria,","Bahrain,","Burundi,","Benin,","Saint Barthelemy,","Bermuda,","Brunei,","Bolivia,","Bonaire,","Brazil,","Bahamas,","Bhutan,","Bouvet Island,","Botswana,","Belarus,","Belize,","Canada,","Cocos Islands,","Democratic Republic of the Congo,","Central African Republic,","Republic of the Congo,","Switzerland,","Ivory Coast,","Cook Islands,","Chile,","Cameroon,","China,","Colombia,","Costa Rica,","Cuba,","Cabo Verde,","Curacao,","Christmas Island,","Cyprus,","Czechia,","Germany,","Djibouti,","Denmark,","Dominica,","Dominican Republic,","Algeria,","Ecuador,","Estonia,","Egypt,","Western Sahara,","Eritrea,","Spain,","Ethiopia,","Finland,","Fiji,","Falkland Islands,","Micronesia,","Faroe Islands,","France,","Gabon,","United Kingdom,","Grenada,","Georgia,","French Guiana,","Guernsey,","Ghana,","Gibraltar,","Greenland,","Gambia,","Guinea,","Guadeloupe,","Equatorial Guinea,","Greece,","South Georgia and the South Sandwich Islands,","Guatemala,","Guam,","Guinea-Bissau,","Guyana,","Hong Kong,","Heard Island and McDonald Islands,","Honduras,","Croatia,","Haiti,","Hungary,","Indonesia,","Ireland,","Israel,","Isle of Man,","India,","British Indian Ocean Territory,","Iraq,","Iran,","Iceland,","Italy,","Jersey,","Jamaica,","Jordan,","Japan,","Kenya,","Kyrgyzstan,","Cambodia,","Kiribati,","Comoros,","Saint Kitts and Nevis,","North Korea,","South Korea,","Kosovo,","Kuwait,","Cayman Islands,","Kazakhstan,","Laos,","Lebanon,","Saint Lucia,","Liechtenstein,","Sri Lanka,","Liberia,","Lesotho,","Lithuania,","Luxembourg,","Latvia,","Libya,","Morocco,","Monaco,","Moldova,","Montenegro,","Saint Martin,","Madagascar,","Marshall Islands,","North Macedonia,","Mali,","Myanmar,","Mongolia,","Macao,","Northern Mariana Islands,","Martinique,","Mauritania,","Montserrat,","Malta,","Mauritius,","Maldives,","Malawi,","Mexico,","Malaysia,","Mozambique,","Namibia,","New Caledonia,","Niger,","Norfolk Island,","Nigeria,","Nicaragua,","Netherlands,","Norway,","Nepal,","Nauru,","Niue,","New Zealand,","Oman,","Panama,","Peru,","French Polynesia,","Papua New Guinea,","Philippines,","Pakistan,","Poland,","Saint Pierre and Miquelon,","Pitcairn,","Puerto Rico,","Palestinian Territory,","Portugal,","Palau,","Paraguay,","Qatar,","Reunion,","Romania,","Serbia,","Russia,","Rwanda,","Saudi Arabia,","Solomon Islands,","Seychelles,","Sudan,","South Sudan,","Sweden,","Singapore,","Saint Helena,","Slovenia,","Svalbard and Jan Mayen,","Slovakia,","Sierra Leone,","San Marino,","Senegal,","Somalia,","Suriname,","Sao Tome and Principe,","El Salvador,","Sint Maarten,","Syria,","Eswatini,","Turks and Caicos Islands,","Chad,","French Southern Territories,","Togo,","Thailand,","Tajikistan,","Tokelau,","Timor Leste,","Turkmenistan,","Tunisia,","Tonga,","Turkey,","Trinidad and Tobago,","Tuvalu,","Taiwan,","Tanzania,","Ukraine,","Uganda,","United States Minor Outlying Islands,","United States,","Uruguay,","Uzbekistan,","Vatican,","Saint Vincent and the Grenadines,","Venezuela,","British Virgin Islands,","U.S. Virgin Islands,","Vietnam,","Vanuatu,","Wallis and Futuna,","Samoa,","Yemen,","Mayotte,","South Africa,","Zambia,","Zimbabwe,","Serbia and Montenegro,","Netherlands Antilles"]
countries=[];
//for each element of rawCountries, leading comma is removed and stored as a new array countries;
rawCountries.forEach(i=>(countries.push(i.slice(0, -1))));
console.log(countries.length);
//HTML element is accessed by getElementById method and stored as javascript varriable
const input=document.getElementById('input');
const btn= document.getElementById('btn');
const result=document.getElementById('result');
const result2=document.getElementById('result2');
//When submit button is clicked showName function gets executed
btn.addEventListener('click',showName);
//showName function accessed input entered value and capitalized it then store as name varriable
// then it checks whether name is present in country list array if yes then creates a p element
//inside result2 div and renders the searched country name
function showName(){
    var name=input.value;
    name=name.charAt(0).toUpperCase() + name.slice(1);
    if (countries.includes(name)){
      result2.innerHTML=`<p>You searched for ${name}</p>`;
    }
}
//when a character is entered in input, this addEventListener executes a arrow function
input.addEventListener('input',()=>{
  result2.innerHTML='';
  result.innerHTML='';
  //input entered character is converted to toLowerCase character
  var val=input.value.toLowerCase();
  //for elements of countries a arrray filter is generated which filters the elements
  //which are started with entered character and stored as an array suggestedName
  const suggestedName=countries.filter(country=>country.toLowerCase().startsWith(val));
  console.log(suggestedName);
  //for every elements of suggestedName arrray a p HTML element is created and its value is rendered
  for(var i of suggestedName){
    var suggestion=document.createElement('p');
    suggestion.innerHTML=i;
    // then suggestion is appended in result div as a child node
    result.appendChild(suggestion);
  };
  if (val==''){
    result.innerHTML='';
  }
});
