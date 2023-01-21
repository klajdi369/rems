import "./form.css";

export default function Form() {
  return (
    <div className="form-wrapper">
      <h3>Verify Now</h3>
      <input type="text" placeholder="Property ID" />
      <button>Submit</button>
    </div>
  );
}
