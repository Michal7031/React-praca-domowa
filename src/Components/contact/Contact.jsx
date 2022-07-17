import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact">
      <form>
        <div className="inputWrapper">
          <input
            onChange={(e) => console.log(e.target.value)}
            placeholder="enter name"
            type="text"
          />
          <input
            onChange={(e) => console.log(e.target.value)}
            placeholder="enter email"
            type="email"
          />
        </div>
        <textarea
          onChange={(e) => console.log(e.target.value)}
          placeholder="enter message"
        ></textarea>
      </form>
    </div>
  );
}

export default Contact;
