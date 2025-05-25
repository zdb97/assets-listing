import React from "react";
import { Link } from "react-router-dom";
import placeholderImage from "../../assets/placeholder.png";
import "./Home.css";

const Home: React.FC = () => (
  <main className="main" aria-labelledby="main-title">
    <section className="main__section">
      <div className="main__title">
        <h2>Popular Titles</h2>
      </div>

      <ul className="main__content--homepage">
        <li className="card__wrapper">
          <Link
            to="/series"
            className="card"
            aria-label="View popular series"
            style={{
              backgroundImage: `url(${placeholderImage})`,
            }}
          >
            <h3 className="card__title">SERIES</h3>
          </Link>
          <p className="card__text">Popular Series</p>
        </li>

        <li className="card__wrapper">
          <Link
            to="/movies"
            className="card"
            aria-label="View popular movies"
            style={{
              backgroundImage: `url(${placeholderImage})`,
            }}
          >
            <h3 className="card__title">MOVIES</h3>
          </Link>
          <p className="card__text">Popular Movies</p>
        </li>
      </ul>
    </section>
  </main>
);

export default Home;
