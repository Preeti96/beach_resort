import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import Services from "../component/Services";
import FeaturedRooms from '../component/FeaturedRooms';

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="luxurious rooms" subtitle="rooms starting from $300">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
}
