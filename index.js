import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://swidosbmstlvrjawtmct.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3aWRvc2Jtc3RsdnJqYXd0bWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NTIxMjgsImV4cCI6MjAyNzIyODEyOH0.KuxmeN-I_akCqgK1aqcpK5GZ1jP0Zmf9oLloXRaE3s8'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase
  .from('weather')
  .select('*')
  .then(weatherData => {
    supabase
      .from('week_days')
      .select('*')
      .then(weekDaysData => {
        const weatherForecastDiv = document.getElementById('weather-forecast');
        // Iterate over each row of weekDaysData
        weekDaysData.forEach(day => {
          // Find corresponding weather for the day
          const weatherForDay = weatherData.find(weather => weather.id === day.id);
          const paragraph = document.createElement('p');
          paragraph.textContent = `${day.day}: ${weatherForDay.weather}`;
          weatherForecastDiv.appendChild(paragraph);
        });
      })
      .catch(error => console.error('Error fetching week days data:', error));
  })
  .catch(error => console.error('Error fetching weather data:', error));