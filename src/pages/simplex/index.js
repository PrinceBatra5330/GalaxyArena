import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
const Simplex = () => {
  const status = useScript("https://iframe.simplex-affiliates.com/form-sdk.js");
  useEffect(() => {
    if (status == "ready") {
     
      //  const dataItem = localStorage.setItem("items", '1');
      window.simplexAsyncFunction = function () {
        Simplex.init({
          public_key: "pk_live_ea57db80-37eb-4b10-96ca-16a28801b349",
        });
      };
      window.simplex.createForm();
    }
    return () => {};
  }, [status]);
  // console.log(myData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="btitlebox crypto_simplex">
        <div className="simplex-form-container simlex_box">
          <Header />
          <div className="simlex_card">
            <div className="simlex__card_head">
              <h1>Buy Crypto Online</h1>
              <div className="simlex__poweredby">
                <p>Powered by</p>
                <img src="https://iframe.sandbox.test-simplexcc.com/f8b8b94cefa8241ea191.png" />
              </div>
            </div>
            <div className="simlex__card_body">
              <form id="simplex-form">
                <div id="checkout-element"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
// Hook
function useScript(src) {
  const [status, setStatus] = useState(src ? "loading" : "idle");
  useEffect(
    () => {
      if (!src) {
        setStatus("idle");
        return;
      }

      let script = document.querySelector(`script[src="${src}"]`);
      if (!script) {
        // Create script
        script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.setAttribute("data-status", "loading");
        // Add script to document body
        document.body.appendChild(script);
        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event) => {
          script.setAttribute(
            "data-status",
            event.type === "load" ? "ready" : "error"
          );
        };
        script.addEventListener("load", setAttributeFromEvent);
        script.addEventListener("error", setAttributeFromEvent);
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute("data-status"));
      }
      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event) => {
        setStatus(event.type === "load" ? "ready" : "error");
      };
      // Add event listeners
      script.addEventListener("load", setStateFromEvent);
      script.addEventListener("error", setStateFromEvent);

      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener("load", setStateFromEvent);
          script.removeEventListener("error", setStateFromEvent);
        }
      };
    },
    [src] // Only re-run effect if script src changes
  );
  return status;
}

export default Simplex;
