import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Line } from "react-chartjs-2";
import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";

import L from "leaflet";
import markerIcon from "../img/marker.png";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

interface Country {
  country: string;
  countryInfo: {
    _id: number;
    lat: number;
    long: number;
  };
  active: number;
  recovered: number;
  deaths: number;
}

const Dashboard = () => {
  const [countriesData, setCountriesData] = useState<Country[]>([]);
  const [chartData, setChartData] = useState<any>({});

  useEffect(() => {
    const calToSetEffectCountries = async () => {
      const countriesApiUrl = "https://disease.sh/v3/covid-19/countries";
      const response = await fetch(countriesApiUrl);
      const dataCountry = await response.json();
      setCountriesData(dataCountry);
    };
    calToSetEffectCountries();
  }, []);

  useEffect(() => {
    const callToSetLineData = async () => {
      const response = await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      const resData = await response.json();
      if (response.ok === true) {
        const newChartData = {
          labels: Object.keys(resData.cases),
          datasets: [
            {
              label: "Cases",
              data: Object.values(resData.cases),
              fill: false,
              borderColor: "#f50057",
              tension: 0.2,
            },
          ],
        };

        setChartData(newChartData);
      }
    };

    callToSetLineData();
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []);

  const customMarker = L.icon({
    iconUrl: markerIcon,
    iconSize: [20, 25],
    iconAnchor: [15, 30],
  });

  
  console.log(countriesData);
  return (
    <div className="w-full pt-20 px-4 pb-8">
      <h1 className="text-4xl font-bold mb-4 text-pink-600">
        Corona Cases Chart
      </h1>
      <div className="border-2 border-red-100 w-11/12  m-auto 10 auto 10">
        {chartData.datasets ? (
          <Line data={chartData} />
        ) : (
          <h1 className="text-pink-600 mb-4 font-bold text-2xl">Loading...</h1>
        )}
      </div>

      <h1 className="text-4xl font-bold mb-4 mt-4 text-blue-500">
        Corona Cases World Map
      </h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countriesData.map((country) => {
          return (
            <Marker
              key={country.countryInfo._id}
              icon={customMarker}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <h2>{country.country}</h2>
                  <p>
                    Active Cases: {country.active} <br />
                    Recovered Cases: {country.recovered} <br />
                    Deaths: {country.deaths}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* <div className="border-2 border-blue-500 w-11/12  m-auto 5 auto 5">
        <MapContainer
          className="m-auto w-full border-blue-700"
          bounds={[
            [-60, -180],
            [85, 180],
          ]}
          zoom={2}
          center={[20, 40]}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          
        </MapContainer> 
        
        <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
        
        */}
    </div>
  );
};

export default Dashboard;
