import React from "react"
import "./styles.css";

export const TodoNavbar = () => {

    return (
        <div className="navbar-container">

            {/* tailwind styling */}
            <div className="flex justify-center">
                {/* display: flex; justify-content: center; */}
                <h1>✅FocusDo</h1>
                <p className="">Tasks</p>
            </div>
            <button className="bg-red-500">🛎️</button>
            <button className="bg-green-500">👤</button>
        </div>
    )
};