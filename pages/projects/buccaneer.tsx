import Script from "next/script";
import React from "react";

const Buccaneer = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
      ></Script>

      <model-viewer
        style={{ width: "100%", height: "100%" }}
        src="/3d/buccaneer.glb"
        camera-controls
        tone-mapping="neutral"
        auto-rotate
        shadow-intensity="1"
        environment-image="https://modelviewer.dev/shared-assets/environments/aircraft_workshop_01_1k.hdr"
        camera-orbit="159.4deg 97.1deg 37.54m"
        field-of-view="30deg"
      >
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
      </model-viewer>
    </div>
  );
};

export default Buccaneer;

// add types for model-viewer
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}
