import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./services.css"

const Sevices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("Survices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
        <h2 className="text-primary text-center mt-5">Our Services</h2>
        <div className="survice-container">
      {services.map((service) => (
        <Service
        service={service}
        key={service.id}
        ></Service>
      ))}
    </div>
    </div>
  );
};

export default Sevices;
