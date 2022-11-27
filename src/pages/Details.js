import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
import "../style/MyMovies.css";

const imageUrl = "https://image.tmdb.org/t/p/original/";

const Details = () => {
  const location = useLocation();

  return (
    <div>
      <div>
        <NavbarComp />
      </div>
      <div className="container-fluid container-detail">
        <img
          src={imageUrl + location.state.backdrop_path}
          className="img-fluid "
        />
        <div
          className="row d-flex justify-content-center"
          style={{ paddingTop: "4rem", paddingBottom: "5rem" }}
        >
          <div className="col-xl-4 col-md-6 col-8">
            <img
              src={imageUrl + location.state.image}
              className="rounded mx-auto d-block shadow image-detail"
              style={{ width: "18rem" }}
            />
          </div>

          <div className="col-xl-6 col-md-6 col-8 shadow">
            <div className="row pt-4 ">
              <h2>{location.state.title}</h2>
            </div>
            <Table>
              <tbody>
                <tr>
                  <td>Release Date: {location.state.release_date}</td>
                </tr>
                <tr>
                  <td>Popularity: {location.state.popularity}</td>
                </tr>
                <tr>
                  <td>Rating: {location.state.vote_average}</td>
                </tr>
                <tr>
                  <td>Overview: {location.state.overview}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
