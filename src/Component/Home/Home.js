import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Subject from "../Subject/Subject";
import Time from "../Time/Time";
import "./Home.css";

const Home = () => {
  const [subjects, setSubject] = useState([]);
  const [AddedList, setAddedList] = useState([]);
  const Add = (subjects) => {
    let newAddedList = [];
    newAddedList = [...AddedList, subjects];
    setAddedList(newAddedList);
  };
  useEffect(() => {
    fetch("subjects.json")
      .then((res) => res.json())
      .then((data) => setSubject(data));
  }, []);
  return (
    <div>
      <div className="home-container">
        <div className="Subject">
          {subjects.map((subject) => (
            <Subject key={subject.id} subjects={subject} Add={Add}></Subject>
          ))}
        </div>
        <div className="Time">
          <Time AddedList={AddedList}></Time>
        </div>
      </div>
      <div className="Blog_container">
        <Blog></Blog>
      </div>
    </div>
  );
};

export default Home;
