import React, { Component } from "react";

export default class StepBuyCourse extends Component {
  render() {
    return (
      <section
        className="stepbuycourse text-center mb-5 pb-5"
        style={{
          backgroundImage: "url('./img/group-3.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center"
        }}
      >
        <div className="content">
          <div className="step-group">
            <div>
              STEP <br /> 1
            </div>
            <p>
              Choose the course
            </p>
          </div>
          <div className="line"></div>
          <div className="step-group">
            <div>
              STEP <br /> 2
            </div>
            <p>
              Add shopping cart
            </p>
          </div>
          <div className="line"></div>
          <div className="step-group">
            <div>
              STEP <br /> 3
            </div>
            <p>
              Pay your course
            </p>
          </div>
          <div className="line"></div>
          <div className="step-group">
            <div>
              STEP <br /> 4
            </div>
            <p>
              Check your course
            </p>
          </div>
        </div>
      </section>
    );
  }
}
