async function getWeather(cityName) {
    try {
        let result;
        const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${cityName}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '72da11673bmsh1e02e06a2b716e2p1cf062jsn6574f6771a89',
                'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
            }
        };
        const response = await fetch(url, options);
        result = await response.text();
        result_object = JSON.parse(result);
        let { coord, weather, base, main, visibility, wind, clouds, dt, sys, timezone, id, name, cod } = result_object;
        let { lon, lat } = coord;
        // let [first_child] = weather;
        // let { icon, description } = first_child;
        let { temp, feels_like, temp_min, temp_max, pressure, humidity, sea_level, grnd_level } = main;
        let { speed, deg, gust } = wind;
        let { country, sunrise, sunset } = sys;
        cityHeading.innerHTML = cityName;
        cur_temp_id.innerHTML = parseFloat((temp - 273.15).toFixed(2));
        max_temp_id.innerHTML = parseFloat((temp_max - 273.15).toFixed(2));
        min_temp_id.innerHTML = parseFloat((temp_min - 273.15).toFixed(2));
        feels_like_id.innerHTML = parseFloat((feels_like - 273.15).toFixed(2));
        max_temp_id_kelvin.innerHTML = parseFloat((temp_max)).toFixed(2);
        pressure_heading_id.innerHTML = pressure;
        pressure_id.innerHTML = pressure;
        humidity_id.innerHTML = humidity;
        visibility_id.innerHTML = visibility;
        wind_speed_id.innerHTML = speed;
        grnd_level_id.innerHTML = grnd_level;
        lon_id.innerHTML = lon;
        lat_id.innerHTML = lat;
        timezone_id.innerHTML = timezone;
        country_id.innerHTML = country;
        console.log(result);

        // For City 1 - Beijing
        other_city_array = [city1 = {
            "coord": {
                "lon": 116.3972,
                "lat": 39.9075
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 297.09,
                "feels_like": 296.11,
                "temp_min": 297.09,
                "temp_max": 297.09,
                "pressure": 1000,
                "humidity": 22,
                "sea_level": 1000,
                "grnd_level": 996
            },
            "visibility": 10000,
            "wind": {
                "speed": 4.42,
                "deg": 177,
                "gust": 8.92
            },
            "clouds": {
                "all": 99
            },
            "dt": 1744281008,
            "sys": {
                "type": 1,
                "id": 9609,
                "country": "CN",
                "sunrise": 1744235071,
                "sunset": 1744281996
            },
            "timezone": 28800,
            "id": 1816670,
            "name": "Beijing",
            "cod": 200
        },
        // For City 2 - Amsterdam
        city2 = {
            "coord": {
                "lon": 4.8897,
                "lat": 52.374
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 284.54,
                "feels_like": 283.56,
                "temp_min": 283.63,
                "temp_max": 285.92,
                "pressure": 1029,
                "humidity": 70,
                "sea_level": 1029,
                "grnd_level": 1028
            },
            "visibility": 10000,
            "wind": {
                "speed": 5.66,
                "deg": 340
            },
            "clouds": {
                "all": 75
            },
            "dt": 1744281067,
            "sys": {
                "type": 2,
                "id": 2046553,
                "country": "NL",
                "sunrise": 1744260830,
                "sunset": 1744309751
            },
            "timezone": 7200,
            "id": 2759794,
            "name": "Amsterdam",
            "cod": 200
        },
        // For City 3 - Dhaka
        city3 = {
            "coord": {
                "lon": 90.4074,
                "lat": 23.7104
            },
            "weather": [
                {
                    "id": 721,
                    "main": "Haze",
                    "description": "haze",
                    "icon": "50d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 306.14,
                "feels_like": 306.92,
                "temp_min": 306.14,
                "temp_max": 306.14,
                "pressure": 1001,
                "humidity": 40,
                "sea_level": 1001,
                "grnd_level": 1000
            },
            "visibility": 5000,
            "wind": {
                "speed": 2.57,
                "deg": 240
            },
            "clouds": {
                "all": 75
            },
            "dt": 1744280883,
            "sys": {
                "type": 1,
                "id": 9145,
                "country": "BD",
                "sunrise": 1744242109,
                "sunset": 1744287431
            },
            "timezone": 21600,
            "id": 1185241,
            "name": "Dhaka",
            "cod": 200
        },
        // For City 4 - Tel Aviv
        city4 = {
            "coord": {
                "lon": 34.8,
                "lat": 32.0833
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 293.33,
                "feels_like": 292.55,
                "temp_min": 291.64,
                "temp_max": 293.81,
                "pressure": 1016,
                "humidity": 44,
                "sea_level": 1016,
                "grnd_level": 1013
            },
            "visibility": 10000,
            "wind": {
                "speed": 7.72,
                "deg": 300
            },
            "clouds": {
                "all": 40
            },
            "dt": 1744281126,
            "sys": {
                "type": 1,
                "id": 6845,
                "country": "IL",
                "sunrise": 1744255065,
                "sunset": 1744301162
            },
            "timezone": 10800,
            "id": 293396,
            "name": "Tel Aviv",
            "cod": 200
        },
        // For City 5 - Almaty
        city5 = {
            "coord": {
                "lon": 76.95,
                "lat": 43.25
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 292.1,
                "feels_like": 291.1,
                "temp_min": 292.1,
                "temp_max": 292.1,
                "pressure": 1019,
                "humidity": 40,
                "sea_level": 1019,
                "grnd_level": 892
            },
            "visibility": 10000,
            "wind": {
                "speed": 2,
                "deg": 20
            },
            "clouds": {
                "all": 75
            },
            "dt": 1744281145,
            "sys": {
                "type": 1,
                "id": 8818,
                "country": "KZ",
                "sunrise": 1744244312,
                "sunset": 1744291687
            },
            "timezone": 18000,
            "id": 1526384,
            "name": "Almaty",
            "cod": 200
        },
        // For City 6 - Osaka
        city6 = {
            "coord": {
                "lon": 135.5022,
                "lat": 34.6937
            },
            "weather": [
                {
                    "id": 521,
                    "main": "Rain",
                    "description": "shower rain",
                    "icon": "09n"
                },
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist",
                    "icon": "50n"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 289.41,
                "feels_like": 289.34,
                "temp_min": 289.08,
                "temp_max": 290.11,
                "pressure": 1008,
                "humidity": 86,
                "sea_level": 1008,
                "grnd_level": 1004
            },
            "visibility": 4500,
            "wind": {
                "speed": 5.66,
                "deg": 230,
                "gust": 10.8
            },
            "rain": {
                "1h": 4.86
            },
            "clouds": {
                "all": 75
            },
            "dt": 1744280887,
            "sys": {
                "type": 1,
                "id": 8032,
                "country": "JP",
                "sunrise": 1744230785,
                "sunset": 1744277114
            },
            "timezone": 32400,
            "id": 1853909,
            "name": "Osaka",
            "cod": 200
        }]
        city1_temp.innerHTML = other_city_array[0].main.temp;
        city1_pressure.innerHTML = other_city_array[0].main.pressure;
        city1_humidity.innerHTML = other_city_array[0].main.humidity;
        city1_windspeed.innerHTML = other_city_array[0].wind.speed;
        city1_lat.innerHTML = other_city_array[0].coord.lat;
        city1_lon.innerHTML = other_city_array[0].coord.lon;

        city2_temp.innerHTML = other_city_array[1].main.temp;
        city2_pressure.innerHTML = other_city_array[1].main.pressure;
        city2_humidity.innerHTML = other_city_array[1].main.humidity;
        city2_windspeed.innerHTML = other_city_array[1].wind.speed;
        city2_lat.innerHTML = other_city_array[1].coord.lat;
        city2_lon.innerHTML = other_city_array[1].coord.lon;

        city3_temp.innerHTML = other_city_array[2].main.temp;
        city3_pressure.innerHTML = other_city_array[2].main.pressure;
        city3_humidity.innerHTML = other_city_array[2].main.humidity;
        city3_windspeed.innerHTML = other_city_array[2].wind.speed;
        city3_lat.innerHTML = other_city_array[2].coord.lat;
        city3_lon.innerHTML = other_city_array[2].coord.lon;

        city4_temp.innerHTML = other_city_array[3].main.temp;
        city4_pressure.innerHTML = other_city_array[3].main.pressure;
        city4_humidity.innerHTML = other_city_array[3].main.humidity;
        city4_windspeed.innerHTML = other_city_array[3].wind.speed;
        city4_lat.innerHTML = other_city_array[3].coord.lat;
        city4_lon.innerHTML = other_city_array[3].coord.lon;

        city5_temp.innerHTML = other_city_array[4].main.temp;
        city5_pressure.innerHTML = other_city_array[4].main.pressure;
        city5_humidity.innerHTML = other_city_array[4].main.humidity;
        city5_windspeed.innerHTML = other_city_array[4].wind.speed;
        city5_lat.innerHTML = other_city_array[4].coord.lat;
        city5_lon.innerHTML = other_city_array[4].coord.lon;

        city6_temp.innerHTML = other_city_array[5].main.temp;
        city6_pressure.innerHTML = other_city_array[5].main.pressure;
        city6_humidity.innerHTML = other_city_array[5].main.humidity;
        city6_windspeed.innerHTML = other_city_array[5].wind.speed;
        city6_lat.innerHTML = other_city_array[5].coord.lat;
        city6_lon.innerHTML = other_city_array[5].coord.lon;



    } catch (error) {
        console.error(error);
    }
}
submit_city.addEventListener('click', (e) => {
    e.preventDefault();
    let cityName = city_name.value;
    getWeather(cityName);
})
getWeather("Delhi");


