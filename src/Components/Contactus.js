import React from "react";
import "../Assets/Styles/Contactus.css";
import contact from "../Assets/Images/Hqh2w-unsplash.jpg";
import axios from "axios";
import { toast } from "sonner";

function Contactus() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    let email = e.target.email.value;
    let inquiryType = e.target.inquiryType.value;
    let location = e.target.location.value;
    let message = e.target.message.value;

    console.log(firstName, lastName, email, inquiryType, message);

    const formData = {
      firstName,
      lastName,
      email,
      inquiryType,
      location,
      message,
    };

    const response = await axios.post(
      "http://localhost:3000/contact/sendmessage",
      formData
    );

    const result = response.data;
    toast.success("Message sent successfully");
    alert(result.message || result.error);
  };
  return (
    <div>
      <div className="contact-main">
        <div>
          <h2 className="contact-head">CONTACT US</h2>
        </div>

        <hr className="about-hr" />

        <div class="contact-info">
          <div className="image-section">
            <img src={contact} width="600px" alt="Login" />

            <h2>Address</h2>
            <div class="info-item">
              <p>
                Mada Center 8th floor, 379 Hudson St,
                <br />
                New York, NY 10018 US
              </p>
            </div>

            <h2>Lets Talk</h2>
            <div class="info-item">
              <a href="tel:+18001236879">+1 800 1236879</a>
            </div>

            <h2>General Support</h2>
            <div class="info-item">
              <a href="mailto:contact@example.com">contact@example.com</a>
            </div>
          </div>
        </div>
        <hr className="about-hr" />

        <h2 className="contact-msg">SEND A MESSAGE TO US</h2>

        <hr className="about-hr" />

        {/* <!-- Right section --> */}

        <div class="right">
          <h2>Contact us</h2>
          <p>Reach out and we’ll get in touch within 24 hours.</p>
          <form onSubmit={handleSubmit}>
            <div class="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
            <p contact-question>What is the purpose of your inquiry?</p>
            <div class="form-row">
              <select name="inquiryType">
                <option>Support</option>
                <option>Sales</option>
                <option>Partnership</option>
                <option>Feedback</option>
                <option>Others</option>
              </select>
              <select name="location">
                <option>Thiruvananthauram</option>
                <option>Kollam</option>
                <option>Pathanamthitta</option>
                <option>Alappuzha</option>
                <option>Kottayam</option>
                <option>Idukki</option>
                <option>Ernakulam</option>
                <option>Thrissur</option>
                <option>Palakkad</option>
                <option>Malappuram</option>
                <option>Kozhikkod</option>
                <option>Wayanad</option>
                <option>Kannur</option>
                <option>Kasargod</option>
              </select>
            </div>
            <textarea
              name="message"
              placeholder="Leave us a message..."
            ></textarea>

            <button className="contact-butn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div>
        <title>Social Media Icons</title>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        <div class="social-icons">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
