import React, {useState } from 'react';
const Component = () => {
const [city, setCity] = useState(null);
const [search, setSearch] = useState("Mumbai");
let handleSubmit = async (e) => {
    e.preventDefault();
     const fetchApi = async()=>{
const url =` https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a0e7472f6aed76256cb75e86e1b59dce&units=metric`;
try {
   const response = await fetch(url);
   const resJson = await response.json();
   setCity(resJson.main);
 } catch (error) {
  }
};
        await fetchApi();

    }
    return (
        <>
            <div className="box">
                <form onSubmit={handleSubmit}>

                    <div className="inputData">
                        <input
                            type="search"
                            className="inputField"
                            value={search}
                            onChange={(event) => { setSearch(event.target.value) }}
                        />
                    </div>
                    
                </form>
                {!city ? (
                    <p>No Data Found</p>
                ) : (
                    <div className="info">
                        <h2 className="location">
                            <i className="fa fa-street-view animated-icon"></i> {search}
                        </h2>
                        <h1 className="temp">{city.temp}°C</h1>
                        <h3 className="tempmin_max">Min: {city.temp_min}°C | Max: {city.temp_max}°C</h3>
                    </div>
                )}
                
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                </div>
            
        </>
    )
}
export default Component



