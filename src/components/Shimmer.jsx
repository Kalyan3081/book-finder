// Shimmer.jsx
import React from "react";
import "../styles/Shimmer.css";

function Shimmer({ count = 6 }) {
    return (
        <div className="shimmer-container">
            {Array(count)
                .fill(0)
                .map((_, index) => (
                    <div className="shimmer-card" key={index}>
                        <div className="shimmer-cover"></div>
                        <div className="shimmer-info">
                            <div className="shimmer-line short"></div>
                            <div className="shimmer-line long"></div>
                            <div className="shimmer-line short"></div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Shimmer;
