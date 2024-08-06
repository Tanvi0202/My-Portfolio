import React from 'react'
import'./Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key","ee30bcbf-58bd-461c-b8a0-b4f1ae23225c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className="contact">
      <div className="c-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern}></img>
      </div>
      <div className="c-sec">
        <form onSubmit={onSubmit} className="details">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name"></input>

          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email-id"
            name="email"
          ></input>

          <label htmlFor="">Write Your Message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit"  >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact
