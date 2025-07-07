import React from 'react';

const BlurCircle = ({ top = "100px", left = "100px", right = "auto", bottom = "auto" }) => {
    return (
        <div
            className="absolute z-0 w-60 h-60 rounded-full bg-red-500/30 blur-3xl"
            style={{ top, left, right, bottom }}
        ></div>
    );
};

export default BlurCircle;
