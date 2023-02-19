import "../styles/Main.css";
import hero from "../images/illustration-dashboard.png";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
const Main = () => {
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState(true);
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleClick = () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattern.test(email)) {
      setValidation(true);
      toast.success("Thanks for subscribing!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setEmail("");
    } else {
      setValidation(false);
    }
  };
  return (
    <main>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <section className="formulaire">
        <div>
          <h2>
            We are launching <span>soon!</span>
          </h2>
          <p> Subscribe and get notified</p>
        </div>
        <div>
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            <input
              className={`${!validation ? "outline" : ""}`}
              type="email"
              onChange={handleChange}
              placeholder="Your email address..."
              value={email}
            />
            <p className={`${!validation ? "errore" : ""}`}>
              Please provide a valid email address
            </p>
            <button>Notify Me</button>
          </form>
        </div>
      </section>
      <section className="hero">
        <img src={hero} alt="" />
      </section>
    </main>
  );
};
export default Main;
