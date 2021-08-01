import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://www.ittoolstraining.com/upload/je/9c448519647355720113974b1cc0ac0f.jpg"
              title="AWS Solution Architect & Sys Admin certification"
              label="Cloud Computing"
              path="/services"
            />
            <CardItem
              src="https://www.ittoolstraining.com/upload/je/e9534c4dd8f06123ffd051a21a4d6813.jpg"
              title="Core Java Programming for Complete Beginners"
              label="Programming & Framework"
              path="/services"
            />
            <CardItem
              src="https://www.ittoolstraining.com/upload/je/dc7af199787c5ab7b3e7615aa010a1f3.jpg"
              title="Azure Solution Architect(AZ300, AZ301) Certification Preparation"
              label="Cloud Computing"
              path="/services"
            />
            <CardItem
              src="https://www.ittoolstraining.com/upload/je/88b82e357f2db042d4e447c1eed2d594.jpg"
              title="Salesforce Basic Admin Essentials"
              label="Salesforce"
              path="/products"
            />
            <CardItem
              src="https://www.ittoolstraining.com/upload/je/b13b42645f75dd05543494d6f8c7a533.jpg"
              title="Advanced Salesforce
              Cloud"
              label="Salesforce"
              path="/sign-up"
            />
            <CardItem
              src="https://www.ittoolstraining.com/upload/je/d7e5f1b400d093210bddf44b41b6141c.jpg"
              title="Core Python Course for Beginners"
              label="Programming & Framework"
              path="/sign-up"
            />
            <CardItem
              src="https://www.ittoolstraining.com/upload/je/f75acb356ce397022874705da0aeba72.jpg"
              title="Become a Master in
              JavaScript"
              label="Programming & Framework"
              path="/sign-up"
            />
            <CardItem
              src="https://www.ittoolstraining.com/upload/je/4f39cfb6e2d827ec90269df96cd16fd9.jpg"
              title="Data Science
              Machine Learning from the scratch using Python"
              label="Data Science"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>

    // <div className="cards__container">
    //   <div className="cards__wrapper">
    //     <ul className="cards__items">
    //       {props.details.map((detail) => (
    //         <CardItem
    //           key={detail.id}
    //           id={detail.id}
    //           image={detail.image}
    //           title={detail.title}
    //           path={detail.path}
    //           label={detail.label}
    //         />
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
}

export default Cards;
