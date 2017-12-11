import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button className="big-button"
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >Options
            </button>
        </div>
    );
};

export default Action;