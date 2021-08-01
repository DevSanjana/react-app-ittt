import React from "react";
import Cards from "./Cards";
import "./Cards.css";
// import { Button } from "./Button";
import { Link } from "react-router-dom";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",

//     label: "Programming & Framework",
//     path: "/",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",

//     label: "Programming & Framework",
//     path: "/",
//   },
// ];

const PopularCourses = () => {
  return (
    <section>
      <div className="popular-courses">
        <h2>Check out these TRENDING Courses!</h2>
        <h3 className="cards-cap">Popular Courses</h3>
        <Cards />
        <p>
          Take a look at our amazing library of courses, that will prepare you
          for real world challenges and help advance your career.
        </p>
        <Link to="/Course-Library" className="explore-btn">
          EXPLORE COURSE LIBRARY
        </Link>

        {/* <Cards details={DUMMY_DATA} /> */}
      </div>
    </section>
  );
};

export default PopularCourses;
