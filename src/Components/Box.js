import React from "react";
import { useNavigate } from "react-router-dom";

function Box({ text, path }) {
    const navigate = useNavigate();

    return (
        <div className="box" onClick={() => navigate(path)} role="button" tabIndex={0}>
            {text}
        </div>
    );
}

export default Box;
