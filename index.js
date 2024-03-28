import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://swidosbmstlvrjawtmct.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3aWRvc2Jtc3RsdnJqYXd0bWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NTIxMjgsImV4cCI6MjAyNzIyODEyOH0.KuxmeN-I_akCqgK1aqcpK5GZ1jP0Zmf9oLloXRaE3s8'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getWeekDaysWeatherAndAccuracy() {
    try {
      // Fetch data from 'weather' table
      let { data: weatherData } = await supabase
        .from('weather')
        .select('*');
  
      // Fetch data from 'accuracy' table
      let { data: accuracyData } = await supabase
        .from('accuracy')
        .select('*');
  
      const tableBody = document.getElementById('week-days-weather');
  
      // Loop through each day's data and add a row to the table
      weatherData.forEach((day, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${day.day}</td>
          <td>${day.weather}</td>
          <td>${accuracyData[index].percent}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error('Error fetching week days, weather, and accuracy:', error.message);
    }
  }
  
  getWeekDaysWeatherAndAccuracy();