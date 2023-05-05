import React from "react";
import "../assets/css/Input.css";

const Display = ({ input, limit }) => (
        <input value={!limit ? input : limit} maxLength="12" className="input"/>
);

export default Display;