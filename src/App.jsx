import Button from "./components/Button";
import Form from "./components/Form";
import Nav from "./components/nav";
import "./css/App.css";
import { IoCallSharp } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";

export default function App() {
  return (
    <div>
      <Nav />

      <main className="container">
        <h1>CONTACT US</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>
      </main>

      <div className="hero">
        <div className="formContainer">
          <div className="topBtn">
            <Button text="VIA SUPPORT CHAT" icon={<RiMessage2Fill />} />
            <Button text="VIA CALL" icon={<IoCallSharp />} />
          </div>
          <Button
            isTransparent={true}
            text="VIA EMAIL FORM"
            icon={<RiMessage2Fill />}
          />
          <Form />
        </div>

        <div className="img">
          <img src="/images/Service 24_7-pana 1.png" alt="Body" />
        </div>
      </div>
    </div>
  );
}
