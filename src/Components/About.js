import React from "react";
import "../Assets/Styles/About.css";
import {
  ChartCandlestick,
  CircleCheck,
  CirclePlus,
  Contact,
  MessageSquareText,
} from "lucide-react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <div>
        <h1 className="about-head">
          DISCOVER THE WORLD'S <br /> TOP BLOGS AND INSPIRING STORIES
        </h1>
      </div>

      <hr className="about-hr" />

      <div className="d-flex justify-content-around about-main">
        <div class>
          <h2 className="about-subhead">
            <MessageSquareText />
            Our Story
          </h2>
          <p className="about-para">
            Founded in 2023 by a group of passionate designers and
            technologists, our blog platform was born out of a desire to create
            a space where creativity and innovation could thrive. <br />
            Since then, we've grown into a vibrant community of designers,
            artists, and creatives from around the world.
          </p>
        </div>
        <div>
          <h2 className="about-subhead1">
            <CircleCheck /> Our Mission
          </h2>
          <p className="about-para1">
            At the heart of our blog platform is a commitment to empowering
            designers to do their best work. We believe that by providing the
            right tools, resources, and support, we can help designers unlock
            their full potential and achieve their goals.
            <br />
            Whether you're a seasoned professional or just starting out, we're
            here to help you succeed.
          </p>
        </div>
      </div>

      <hr className="about-hr" />

      <p className="about-tale">
        We're on a mission to help professional designers earn a living doing
        work they take pride in.
        <br />
        We believe that great design can change the world, and we're here to
        support the designers who make it happen.
      </p>

      <hr className="about-hr" />

      <div className="about-main2">
        <h2 className="about-subhead2">
          <ChartCandlestick /> Our Values
        </h2>
        <p className="about-para2">
          We believe in the power of design to make a positive impact on the
          world. That's why we're committed to fostering a culture of
          creativity, collaboration, and continuous learning. <br />
          We value diversity, inclusivity, and open communication, and we're
          dedicated to creating a supportive environment where everyone can
          thrive.
        </p>

        <h2 className="about-subhead3">
          <CirclePlus />
          Join Us
        </h2>
        <p className="about-para3">
          Whether you're a designer looking to showcase your work, a business
          seeking top talent, or simply someone who loves great design, we
          invite you to join our community. <br />
          Together, we can create something truly special.
        </p>
      </div>
     
      <hr className="about-hr" />

      <div>
        <h2 className="about-subhead4">Why Choose Us?</h2>
        <p className="about-para4">
          We understand that you have many options when it comes to choosing a
          blog platform. Here are just a few reasons why we believe we're the
          best choice for designers:
          <br />
          - We're passionate about design and committed to supporting the
          creative community.
          <br />
          - We offer a wide range of tools and resources to help designers
          succeed.
          <br />
          - Our platform is user-friendly, intuitive, and easy to navigate.
          <br />
          - We prioritize customer support and are always here to help.
          <br />- We're constantly innovating and improving our platform to meet
          the evolving needs of designers.
        </p>
        <div className="text-center mt-5 mb-5 contact">
          <Link to="/contactus" className="about-butn">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default About;
