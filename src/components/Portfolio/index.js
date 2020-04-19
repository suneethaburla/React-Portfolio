import React from 'react';
import { Link } from "react-router-dom";
import passwordGenerator from "./../../assets/images/passwordGenerator.png";
import codeQuiz from "./../../assets/images/codeQuiz.png";
import dayPlanner from "./../../assets/images/dayPlanner.png";
import feastFilmFitness from "./../../assets/images/FeastFilmFitness.png";
import weatherDashboard from "./../../assets/images/weatherDashboard.png";

function Portfolio () {
return (
<div className="container container-portfolio">
        <div className="row">
            <div className="col-md-12">
                <div className="page-header">
                <Link to="/Portfolio">
                    <h1> My Projects </h1>
                </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <Link to="/Portfolio"><img src={passwordGenerator}
                                className="card-img-top" alt="passwordGenerator"/></Link>
                        <div className="card-body bg-info text-white">
                            <h5 className="card-title">Password Generator</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <Link to="/Portfolio"><img src={codeQuiz}
                                className="card-img-top" alt="codeQuiz"/></Link>
                        <div className="card-body bg-info text-white">
                            <h5 className="card-title">Code Quiz</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <Link to="/Portfolio"><img src={dayPlanner}
                                className="card-img-top" alt="dayPlanner"/></Link>
                        <div className="card-body bg-info text-white">
                            <h5 className="card-title">Day Planner</h5>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <Link to="/Portfolio"><img src={weatherDashboard}
                                className="card-img-top" alt="weatherDashboard"/></Link>
                        <div className="card-body bg-info text-white">
                            <h5 className="card-title">Weather Dashboard</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <Link to="/Portfolio"><img src={feastFilmFitness}
                                className="card-img-top" alt="feastFilmFitness"/></Link>
                        <div class="card-body bg-info text-white">
                            <h5 class="card-title">Feast Film & Fitness</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>




)

}

export default Portfolio;