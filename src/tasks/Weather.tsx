const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true";

export function Weather() {
 return (
  <div>
   <h1>Weather Dashboard</h1>
   <input type="text" placeholder="Enter city" />
   <button>Get Weather</button>

   <div>
    <h2>Weather in Poznań</h2>
    <p>Temperature: 5°C</p>
    <p>Wind Speed: 4 km/h</p>
   </div>
  </div>
 );
}
