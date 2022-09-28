import React, { useEffect, useState } from "react";
import Subject from "../Subject/Subject";
import Time from "../Time/Time";
import "./Home.css";

const Home = () => {
  const [subjects, setSubject] = useState([]);
  useEffect(() => {
    fetch("subjects.json")
      .then((res) => res.json())
      .then((data) => setSubject(data));
  }, []);
  return (
    <div className="home-container">
      <div className="Subject">
        {subjects.map((subject) => (
          <Subject key={subject.id} subjects={subject}></Subject>
        ))}
      </div>
      <div className="Time">
        <Time></Time>
      </div>
    </div>
  );
};

export default Home;
