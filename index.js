import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://swidosbmstlvrjawtmct.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3aWRvc2Jtc3RsdnJqYXd0bWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NTIxMjgsImV4cCI6MjAyNzIyODEyOH0.KuxmeN-I_akCqgK1aqcpK5GZ1jP0Zmf9oLloXRaE3s8'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getWeatherAndWeekDays() {
    try {
      // Fetch data from Supabase tables
      const { data: weatherData } = await supabase
        .from('Weather')
        .select('*');
  
      const { data: weekDaysData } = await supabase
        .from('WeekDays')
        .select('*');
  
      const tableBody = document.getElementById('weather-weekdays');
  
      // Combine weather and week days data
      weekDaysData.forEach(day => {
        // Find corresponding weather for the day
        const weatherForDay = weatherData.find(weather => weather.id === day.id);
        if (weatherForDay) {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${day.day}</td>
            <td>${weatherForDay.weather}</td>
          `;
          tableBody.appendChild(row);
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  getWeatherAndWeekDays();
  
  