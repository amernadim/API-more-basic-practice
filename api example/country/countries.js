const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};

const displayCountry = countries => {
  const countryContainer = document.getElementById("country-container");
  countries.forEach( countrie => {
    // console.log(countrie.capital);
    const countrieDiv = document.createElement("div");
    countrieDiv.classList.add("country");
    countrieDiv.innerHTML = `
        <h1>Name : ${countrie.name.common} </h1>
        <h3>Capital : ${
          countrie.capital ? countrie.capital[0] : "No Capital"
        } </h3>
        <button onclick="loadCountryDetails('${countrie.cca2}')">Delails</button>
    `;
    countryContainer.appendChild(countrieDiv);
  });
};

const loadCountryDetails = code => {
  // https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
     .then(res => res.json())
     .then(data => displayCountryDetail(data[0]))
};
const displayCountryDetail = country => {
    console.log(country);
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
       <h2>Details : ${country.name.common}</h2>
       <img src="${country.flags.png}" alt="">
    `;

}

loadCountry();
