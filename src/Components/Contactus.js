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

    try {
      const response = await axios.post(
        "http://localhost:3000/contact/sendmessage",
        formData
      );

      const result = response.data;
      if (result.message) {
        toast.success("Message sent successfully!");
      } else if (result.error) {
        toast.error("Message declined: " + result.error);
      }
    } catch (error) {
      toast.error("Message declined: Failed to send message. Please try again.");
    }
  };
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>CONTACT US</h1>
        <p>Get in touch with us. We're here to help!</p>
      </div>

      <div className="contact-content">
        {/* Left Section - Contact Info */}
        <div className="contact-info-section">
          <div className="contact-image">
            <img src={contact} alt="Contact" />
          </div>

          <div className="contact-details">
            <div className="detail-item">
              <h3>📍 Address</h3>
              <p>
                Mada Center 8th floor, 379 Hudson St,<br />
                New York, NY 10018 US
              </p>
            </div>

            <div className="detail-item">
              <h3>📞 Let's Talk</h3>
              <a href="tel:+18001236879">+1 800 1236879</a>
            </div>

            <div className="detail-item">
              <h3>📧 General Support</h3>
              <a href="mailto:contact@example.com">contact@example.com</a>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form-section">
          <div className="form-header">
            <h2>Send a Message</h2>
            <p>Reach out and we'll get in touch within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <select name="inquiryType" required>
                  <option value="">Purpose of inquiry</option>
                  <option>Support</option>
                  <option>Sales</option>
                  <option>Partnership</option>
                  <option>Feedback</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="form-group">
                <select name="location" required>
                  <option value="">Select location</option>
                  <option>Thiruvananthapuram</option>
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
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Leave us a message..."
                required
              ></textarea>
            </div>

            <button className="contact-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
