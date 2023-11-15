let country_list = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW"
};

let apiKey = "a5b62b7f9257c7abd20595564a122941";
const dropList = document.querySelectorAll("form select"),
      fromCurrency = document.querySelector(".from select"),
      toCurrency = document.querySelector(".to select"),
      getButton = document.querySelector("form button");

const proxyURL = "https://cors-anywhere.herokuapp.com/";
const apiURL = "http://api.exchangeratesapi.io/v1/latest";
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    base: fromCurrency.value,
    symbols: toCurrency.value,
    app_id: apiKey,
  }),
};

fetch(proxyURL + apiURL, options)
  .then((response) => response.json())
  .then((data) => {
    const exchangeRate = data.rates[toCurrency.value];
    exchangeRateElement.textContent = `${fromCurrency.value} 1 = ${toCurrency.value} ${exchangeRate}`;
  })
  .catch((error) => {
    console.error('Error fetching exchange rate:', error);
});


fetch('http://api.exchangeratesapi.io/v1/latest', options)
  .then((response) => response.json())
  .then((data) => {
    const exchangeRate = data.rates[toCurrency.value];
    exchangeRateElement.textContent = `${fromCurrency.value} 1 = ${toCurrency.value} ${exchangeRate}`;
  })
  .catch((error) => {
    console.error('Error fetching exchange rate:', error);
});



// const apiKey = "e759f92560e41c99ee6213a2";
// const dropList = document.querySelectorAll("form select");
// const fromCurrency = document.querySelector("#fromCurrency");
// const toCurrency = document.querySelector("#toCurrency");
// const exchangeRateElement = document.querySelector("#exchangeRate");
// const getButton = document.querySelector("form button");



for (let i = 0; i < dropList.length; i++) {
  for (let currency_code in country_list) {
    let selected =
      i == 0
        ? currency_code == "USD"
          ? "selected"
          : ""
        : currency_code == "EGP"
        ? "selected"
        : "";
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
  dropList[i].addEventListener("change", (e) => {
    loadFlag(e.target);
  });
}

function loadFlag(element) {
  for (let code in country_list) {
    if (code == element.value) {
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagcdn.com/48x36/${country_list[
        code
      ].toLowerCase()}.png`;
    }
  }
}

window.addEventListener("load", () => {
  getExchangeRate();
});

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", () => {
  let tempCode = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = tempCode;
  loadFlag(fromCurrency);
  loadFlag(toCurrency);
  getExchangeRate();
});

function getExchangeRate() {
  const amount = document.querySelector("form input");
  const exchangeRateTxt = document.querySelector("form .exchange-rate");
  let amountVal = amount.value;
  if (amountVal == "" || amountVal == "0") {
    amount.value = "1";
    amountVal = 1;
  }
  exchangeRateTxt.innerText = "Getting exchange rate...";

  let url = `http://api.exchangeratesapi.io/v1/latest?${fromCurrency.value}&symbols=${toCurrency.value}&app_id=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let exchangeRate = result.conversion_rates[toCurrency.value];
      let totalExRate = (amountVal * exchangeRate).toFixed(2);
      exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    })
    .catch(() => {
      exchangeRateTxt.innerText = "Something went wrong";
    });
}







// function getExchangeRate() {

//   const amount = document.querySelector("form input");
//   const exchangeRateTxt = document.querySelector("form .exchange-rate");
//   let amountVal = amount.value;
//   if (amountVal == "" || amountVal == "0") {
//     amount.value = "1";
//     amountVal = 1;
//   }
//   exchangeRateTxt.innerText = "Getting exchange rate...";
//   const url = `https://openexchangerates.org/api/latest?base=${fromCurrency.value}&symbols=${toCurrency.value}&app_id=${apiKey}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const exchangeRate = data.rates[toCurrency.value];
//       exchangeRateElement.textContent = `${fromCurrency.value} 1 = ${toCurrency.value} ${exchangeRate}`;
//       let totalExRate = (amountVal * exchangeRate).toFixed(2);
//       exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
//     })
//     .catch((error) => {
//       console.error("Error fetching exchange rate:", error);
//     });
// }
// fromCurrency.addEventListener("change", getExchangeRate);
// toCurrency.addEventListener("change", getExchangeRate);
// getExchangeRate();





// let exchangeRates = {};

// function getExchangeRate(fromCurrency, toCurrency) {
//   if (exchangeRates[fromCurrency] === undefined) {
//     fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`)
//       .then((response) => response.json())
//       .then((result) => {
//         exchangeRates[fromCurrency] = result.conversion_rates;
//       })
//       .catch(() => {
//         console.error("Error fetching exchange rates");
//       });
//   }

//   return exchangeRates[fromCurrency][toCurrency];
// }





// const fetchExchangeRates = async (fromCurrency, toCurrency) => {
//   try {
//     const response = await axios.get('https://api.exchangerate-api.com/v4/latest/' + fromCurrency);
//     const exchangeRate = response.data.rates[toCurrency];
//     return exchangeRate;
//   } catch (error) {
//     console.error('Error fetching exchange rates:', error);
//   }
// };





// const form = document.querySelector('form');
// const amountInput = document.querySelector('input[type="text"]');
// const fromSelect = document.querySelector('select:first-of-type');
// const toSelect = document.querySelector('select:last-of-type');
// const exchangeRate = document.querySelector('.exchange-rate');

// let rates;

// const populateSelects = async () => {
//  const response = await fetch('https://api.exchangeratesapi.io/symbols');
//  const data = await response.json();
//  rates = data.rates;

//  Object.entries(data.symbols).forEach(([currency, symbol]) => {
//     const option = document.createElement('option');
//     option.value = currency;
//     option.textContent = `${currency} - ${symbol}`;
//     fromSelect.add(option.cloneNode(true));
//     toSelect.add(option);
//  });
// };

// populateSelects();

// form.addEventListener('submit', async (e) => {
//  e.preventDefault();
//  const amount = parseFloat(amountInput.value);
//  const fromCurrency = fromSelect.value;
//  const toCurrency = toSelect.value;

//  try {
//     const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`);
//     const data = await response.json();
//     const exchangeRateValue = data.rates[toCurrency];
//     exchangeRate.textContent = `1 ${fromCurrency} = ${exchangeRateValue.toFixed(4)} ${toCurrency}`;
//  } catch (error) {
//     exchangeRate.textContent = 'Error: Unable to retrieve exchange rate.';
//  }
// });
