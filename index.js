import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://swidosbmstlvrjawtmct.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3aWRvc2Jtc3RsdnJqYXd0bWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NTIxMjgsImV4cCI6MjAyNzIyODEyOH0.KuxmeN-I_akCqgK1aqcpK5GZ1jP0Zmf9oLloXRaE3s8'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getWeekDaysAndWeather() {
  try {
    let { data: weekDaysWeather, error } = await supabase
      .from('weather')
      .select('*');

    const weekDaysWeatherList = document.getElementById('week-days-weather');

    weekDaysWeather.forEach(day => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${day.day}</td>
        <td>${day.weather}</td>
      `;
      weekDaysWeatherList.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching week days and weather:', error.message);
  }
}

getWeekDaysAndWeather();
  
  