import React from "react";
import {
  footerMessage,
  emailAddress,
} from "../../editable-stuff/configurations.json";

function GetInTouch() {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">Get In Touch</h2>
      <p className="lead text-center pb-3">
        {footerMessage}, <a href={`mailto:${emailAddress}`}>here</a>.
      </p>
    </>
  );
}

export default GetInTouch;