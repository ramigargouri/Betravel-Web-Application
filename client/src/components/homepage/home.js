import React from "react";
import "./home.css";
import Card from "../UI/Card";
import Seach from "../Search/Search";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Card className="home">
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-8 col-xl-5">
                <Seach />
              </div>
            </div>
          </div>
          <br />
        </Card>
      </div>
    </div>
  );
}

export default Home;
