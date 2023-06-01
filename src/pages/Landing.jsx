import React, { useState, useEffect } from "react";
import { Input, Button, Row, Col } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import TableWeather from "../components/Table/TableWeather";

function Landing() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [table, showTable] = useState(false);
  const { user } = useAuth0();

  console.log("user", user);

  const displayWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_API_WEATHER
        }`
      );
      setWeather(response?.data);
      showTable(true);
      console.log("response weather", response);
    } catch (error) {
      console.log("response error", error);
    }
  };

  return (
    <div className="container">
      <Row className="mt-5">
        <Col md={12} lg={12} xs={12}>
          <Row className="justify-content-center">
            <Col md={6} lg={6} xs={12}>
              {table === true ? (
                <div>
                  <TableWeather data={weather} />
                  <div className="text-right float-right">
                    <Button type="button" onClick={() => showTable(false)}>
                      Back
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="mb-5">
                  <h2 className="text-center mb-2">
                    {user?.name ? user?.name : user?.nickname}
                  </h2>
                  <h4 className="text-center mb-2">{user?.sub}</h4>
                  <Input
                    className="mb-5 mt-5"
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <div className="mx-auto text-center">
                    <Button type="button" onClick={displayWeather}>
                      Display Weather{" "}
                    </Button>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Landing;
