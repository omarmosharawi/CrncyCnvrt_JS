# Currency Converter

- This is a currency converter app that uses JavaScript, HTML, and CSS.
- It allows users to convert between different currencies using the latest exchange rates from ExchangeRate-API.

## Features

- **Simple and intuitive interface**: Users can easily select the currencies they want to convert from and to, and enter the amount they want to convert.
- **Real-time conversion**: Users can see the converted amount as they type, without having to click any buttons or refresh the page.
- **Responsive design**: The app adapts to different screen sizes and devices, ensuring a smooth user experience.

## How to use

- Clone this repository or download the zip file.
- Open the index.html file in your browser.
- Select the currencies you want to convert from and to, and enter the amount you want to convert.
- Enjoy the app!

## How to change the API

- This app uses the ExchangeRate-API to fetch the latest exchange rates.
- You need a valid API key to use this service.
- The app comes with a default API key, but it may expire or become invalid over time.
- If that happens, you will need to get a new API key and update it in the app.
- To get a new API key, you can sign up for a free or paid plan on the ExchangeRate-API website.
- You will receive an email with your API key and instructions on how to use it.
- To update the API in the app, you need to open the script.js file.
- Replace the value of the variables with your new API.
- `let apiKey = "your-api-key";`
- `const apiURL = "your-api-url";`
- `fetch('your-api-url', options)`
- `let url = your-api-url${fromCurrency.value}&symbols=${toCurrency.value}&app_id=${apiKey};`
- Save the file and reload the app.
- You should be able to use the app with the new API.

## Contributing
- If you want to contribute to this project, please feel free to fork the repository and make a pull request.
- You can also contact me at omarmosharawi@gmail.com for any suggestions or feedback.
