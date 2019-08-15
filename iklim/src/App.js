import React, { useState, useEffect } from 'react';
import './App.css';

function toDateTime(sec) {
  var t = new Date(1970, 0, 1);
  t.setSeconds(sec);
  return t;
}

function App() {
  const optionCity = [
    {
      id: '1880252',
      city: 'Singapore'
    },
    {
      id: '1642911',
      city: 'Jakarta'
    },
    {
      id: '1609350',
      city: 'Bangkok'
    },
  ];
  const [apiData, setApi] = useState(null);
  const [city, setCity] = useState('Jakarta');
  const [dataFilled, setFilled] = useState(false);
  
  const fetchApi = (cityID) => {
    const apiURL = fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&q=&mode=json&units=metric&cnt=5&appid=271da6b323b05ebaf2b4aaa0f3378f89`);
    apiURL.then(res=> {
      if(res.status === 200){
        return res.json();
      } else {
        console.log('error');
      }
    }).then(resJson => {
      setApi(resJson);
      setFilled(true);
      console.log(resJson)
    });
  }

  useEffect(() => {
    fetchApi('1642911');
  }, []);
  
  const handleChangeCity = (e) => {
    fetchApi(e.target.value);
  }
  
  const getSuhuAvg = (data) => {
    let total = 0;
    for ( let i = 0; i < data.length; i++) {
      total = total + data[i].main.temp;
    }
    const average = total / data.length;
    return average;
  }
  const getPerbedaanAvg = (data) => {
    let total = 0;
    for ( let i = 0; i < data.length; i++) {
      total = total + (data[i].main.temp_max - data[i].main.temp_min);
    }
    const average = total / data.length;
    return average;
  }
  return (
    <div className="App">
      <div class="filter">
        <select onChange={(e) => handleChangeCity(e)}>
          {optionCity.map((item,index) => (
            <option key={index} value={item.id}>{item.city}</option>
          ))}
        </select>
      </div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>{city}</th>
            <th>Suhu</th>
            <th>Perbedaan</th>
          </tr>
        </thead>
        {dataFilled ? (
          <tbody>
            {apiData.list.map((item, index) => {
              const date = toDateTime(item.dt);
              return (
                <tr key={index.toString()}>
                  <td>{date.toDateString()}</td>
                  <td>{item.main.temp}C</td>
                  <td>{item.main.temp_max - item.main.temp_min}C</td>
                </tr>
              )
            })}
            <tr>
              <td>
                <strong>Rata-rata</strong>
              </td>
              <td>
                <strong>{getSuhuAvg(apiData.list)}</strong>
              </td>
              <td>
                <strong>{getPerbedaanAvg(apiData.list)}</strong>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            <tr><td><h3>Loading...</h3></td></tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default App;
