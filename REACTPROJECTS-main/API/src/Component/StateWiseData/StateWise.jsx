import React, { useEffect, useState } from 'react';

const StateWise = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCovidData = async () => {
    try {
      const res = await fetch('https://data.covid19india.org/data.json');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const actualData = await res.json();
      setData(actualData.statewise);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <h1>INDIA COVID-19-2024 DASHBOARD</h1>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5"><span className="font-weight-bold">INDIA</span> COVID-19 DASHBOARD</h1>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
              </tr>
            </thead>
            <tbody>
              {data.map((state, index) => (
                <tr key={index}>
                  <td>{state.state}</td>
                  <td>{state.confirmed}</td>
                  <td>{state.active}</td>
                  <td>{state.recovered}</td>
                  <td>{state.deaths}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StateWise;
