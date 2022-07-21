import React from "react";
import ReactGA from "react-ga";

const UseAnalyticsEventTracker = (category="test-data") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default UseAnalyticsEventTracker;