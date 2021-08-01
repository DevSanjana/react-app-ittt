import React from "react";
// import { Link } from "react-router-dom";
import classes from "./Courses.module.css";

function CourseLibrary() {
  return (
    <section className={classes.CourseLibrary}>
      <div className={classes.clWrap}>
        <div className={classes.clTitle}>
          <h3>Here Comes the search bar</h3>
          <h4>And here the categories</h4>
        </div>
      </div>
    </section>
  );
}

export default CourseLibrary;
