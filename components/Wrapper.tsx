import React from "react";

const Wrapper = ({ children, className }:{ children : React.ReactNode, className?: string }) => {
    return (
        <div
            className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
};

export default Wrapper;