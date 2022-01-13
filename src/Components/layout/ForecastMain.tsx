import React, { Fragment, Component } from "react";
import "../../index.css";

const api: { key: string; base: string } = {
  key: "8b81ad63daeaf8e1ca20765c7b3341f9",
  base: "https://api.openweathermap.org/data/2.5/",
};

interface myState {
  input: string;
  weatherInfo: any;
}

class ForecastMain extends Component<{}, myState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      input: "",
      weatherInfo: {},
    };
  }

  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: event.target.value });
  };

  getDate = (data: Date) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let weekDay = days[data.getDay()];
    let date = data.getDate();
    let month = months[data.getMonth()];
    let year = data.getFullYear();

    return `${date} ${month} ${year},${weekDay}`;
  };

  getWeather = async (searchKey: string) => {
    const response = await fetch(
      `${api.base}weather?q=${searchKey}&units=metric&APPID=${api.key}`
    );
    const data = await response.json();
    await this.setState({ weatherInfo: data });
    await this.setState({ input: "" });
  };

  onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (this.state.input !== "") {
      this.getWeather(this.state.input);
    }
  };

  render(): React.ReactNode {
    return (
      <Fragment>
        <main id="forecastMain">
          <div id="Conatiner">
            <form id="formForecast" onSubmit={this.onSubmitHandler.bind(this)}>
              <div id="labelForecast">
                <label htmlFor="forecastInput">Search Location</label>
              </div>
              <div id="inputForecast">
                <input
                  id="forecastInput"
                  type="text"
                  placeholder="Search"
                  value={this.state.input}
                  onChange={this.onChangeHandler.bind(this)}
                />
              </div>
              <div id="buttonSearch">
                <button>
                  <svg id="svgSearch" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                </button>
              </div>
            </form>

            {typeof this.state.weatherInfo.main != "undefined" && (
              <div id="dataTable">
                <table>
                  <thead>
                    <tr>
                      <th>Name of Location</th>
                      <th>Tempreture</th>
                      <th>Type</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {this.state.weatherInfo?.name}{" "}
                        {this.state.weatherInfo?.sys?.country}
                      </td>
                      <td>{this.state.weatherInfo?.main?.temp} °C</td>
                      <td>{this.state.weatherInfo?.weather[0]?.main}</td>
                      <td>{this.getDate(new Date())}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </Fragment>
    );
  }
}

export default ForecastMain;
