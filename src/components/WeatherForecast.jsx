import "./WeatherForecast.css";

const WeatherForecast = ({ weather }) => {
  return (
    <div className="weather">
      <h2>{weather.day}</h2>
      <img src={weather.img} alt={weather.imgalt} />
      <p>
          <span>conditons: </span>{weather.conditions}
      </p>
      <p>
        <span>time: </span>{weather.time}
      </p>
    </div>
  );
};

export default WeatherForecast;
