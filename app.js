console.log("connected")

const messageOne = document.querySelector('.countries-layout')


fetch(`https://restcountries.com/v2/all`).then ((response) => {
  response.json().then((data) => {
    if (data.error) {
      messageOne.textContent = data.error
    } else {
      data.forEach((country) => {
        messageOne.insertAdjacentHTML("beforeend",`
        <div id="country">
        <img src="${country.flags.png}" alt="Country flag"></img>
        <h3>${country.name}</h3>
        <p>population: ${country.population}</p>
        <p>capital: ${country.capital}</p>
        <p>region: ${country.region}</p>
        <div>`)
      });
    }
  })
})
