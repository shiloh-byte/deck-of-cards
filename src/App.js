import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <html lang="en">

        <head>
          <meta charset="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Deck of Cards</title>
        </head>
        <body>
          <main class="wrapper">
            <header class="header">
              <div class="header__draw"></div>
              <div class="header__discord"></div>
            </header>
            <footer class="footer">
              <div class="footer__cards">
                <div class="footer__cards--one" id=""></div>
                <div class="footer__cards--two" id=""></div>
                <div class="footer__cards--three" id=""></div>
                <div class="footer__cards--four" id=""></div>
                <div class="footer__cards--five" id=""></div>
              </div>
            </footer>
          </main>
        </body>

      </html>
  );
}

export default App;
