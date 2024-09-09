'use client'

import React from "react";

const Section = ({
    children,
    className,
}) => {
    return (
        <div className={`lg:max-w-screen-2xl mx-auto ${className || ""}`}>
            {children}
        </div>
    );
};

export default Section;