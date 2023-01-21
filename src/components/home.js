import Background from "../assets/heading-background.png";
import "./home.css";
import Form from "./form";

export default function App() {
  return (
    <div
      className="home-wrapper"
      style={{
        backgroundImage: `url(${Background})`
      }}>
      <div className="left-text-wrapper">
        <h1>REMS</h1>
        <h2>Real estate management on blockchain</h2>
        <h3>
          Get started by issuing your real estate certificates on blockchain.
          Verify your properties instantly
        </h3>
      </div>
      <div className="home-form">
        <Form />
      </div>
    </div>
  );
}
