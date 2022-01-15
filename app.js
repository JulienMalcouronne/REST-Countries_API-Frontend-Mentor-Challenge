console.log("connected")

const messageOne = document.querySelector('#country')


fetch(`https://restcountries.com/v2/all`).then ((response) => {
  response.json().then((data) => {
    if (data.error) {
      messageOne.textContent = data.error
    } else {
      data.forEach((country) => {
        messageOne.insertAdjacentHTML("beforeend",`
        <h2>${country.name}</h2>
        <img src="${country.flags.svg}" alt="Weather Icon"></img>
        <p>population: ${country.population}</p>
        <p>capital: ${country.capital}</p>
        <p>region: ${country.region}</p>`)
      });
    }
  })
})
