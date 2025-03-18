weather-app
├── @eslint/js@9.20.0
├── @types/react-dom@19.0.4
├── @types/react@19.0.10
├── @vitejs/plugin-react@4.3.4
├── axios@1.7.9
├── eslint-plugin-react-hooks@5.1.0
├── eslint-plugin-react-refresh@0.4.19
├── eslint-plugin-react@7.37.4
├── eslint@9.20.1
├── globals@15.15.0
├── moment@2.30.1
├── react-dom@19.0.0
├── react@19.0.0
└── vite@6.1.1

Väder Applikation
En React-baserad väderapplikation som ger realtids väderdata, prognoser och låter användare söka efter platser, se väderdetaljer och spara favoritplatser.

Funktioner
Sök: Sök efter väderinformation baserat på plats (stöder stadnamn och koordinater).
Geolocation: Använder webbläsarens geolocation för att hämta användarens aktuella plats om den är tillgänglig.
Aktuellt väder: Visar väderförhållanden för den valda platsen.
5-dagars prognos: Visar en 5-dagars väderprognos.
Detaljerad väderinformation: Ger detaljerad information som temperatur, vindhastighet och luftfuktighet.
Favoriter: Användare kan spara sina favoritplatser och snabbt få tillgång till väderdata för dessa.
Felhantering: Visar felmeddelanden vid ogiltiga platsinmatningar eller problem med att hämta väderdata.
Laddningsindikator: Visar en laddningsindikator medan data hämtas.
Teknisk Stack
React: JavaScript-bibliotek för att bygga användargränssnitt.
CSS: För styling av applikationen.
Geolocation API: Används för att hämta användarens aktuella plats.
Installation
För att komma igång med detta projekt, följ stegen nedan:

1. Klona repositoryt:
bash
git clone https://github.com/ditt-användarnamn/vader-app.git
2. Gå till projektkatalogen:
bash
cd vader-app
3. Installera beroenden:
bash
npm install
4. Starta utvecklingsservern:
bash
npm run dev
Detta kommer att starta applikationen i din webbläsare, vanligtvis på http://localhost:3000.

Användning
Sök efter en plats: Använd sökfältet för att ange en plats (stadnamn eller koordinater). Väderdata kommer att visas för den platsen.
Lägg till en favorit: Klicka på knappen "Lägg till favoritplats" för att spara en plats till din lista med favoritplatser.
Visa favoriter: Dina sparade favoritplatser kommer att visas, och du kan klicka på dem för att snabbt se vädret för den platsen.
Använd geolocation: Om tillgängligt, kommer appen att använda din webbläsares geolocation för att automatiskt hämta väderdata för din aktuella plats.
Felhantering: Om det finns ett problem med väderdata (t.ex. ogiltig plats eller API-fel), kommer ett felmeddelande att visas.
Laddningstillstånd: När appen hämtar väderdata kommer en laddningsindikator att visas.
Komponenter
WeatherCard: Visar aktuell väderinformation för den valda platsen.
WeatherForecast: Visar en 5-dagars väderprognos.
WeatherDetail: Visar detaljerad väderdata som vindhastighet, luftfuktighet m.m.
WeatherSearch: Ett sökfält för att ange en plats.
FavoritePlaces: Visar en lista över favoritplatser och låter användaren ta bort dem.
Loader: En laddningsindikator som visas när data hämtas.
ErrorMessage: Visar felmeddelanden om det finns problem med att hämta väderdata.
useGeolocation: En anpassad hook som hanterar geolocation.
Lokal lagring
Appen använder webbläsarens lokal lagring för att spara:

Senaste sökta plats.
En lista med favoritplatser.
Licens
Detta projekt är licensierat under MIT-licensen.