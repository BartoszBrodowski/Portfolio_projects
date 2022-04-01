import React from "react";

const Buttons = ({ buttons, buttonClicked }) => {
    return (
        <div className="buttons-container">
            {buttons.map((button) => {
                return (
                    <button
                        className="button"
                        key={button.id}
                        onClick={() => buttonClicked(button.text)}
                    >
                        {button.text}
                    </button>
                );
            })}
        </div>
    );
};

export default Buttons;
