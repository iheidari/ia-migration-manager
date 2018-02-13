import React from 'react';

const Author = (props) => {
    return (
        <div >
            <div>
                {props.displayName}
            </div>
            <div>
                {props.uniqueName}
            </div>
        </div>
    );
};

export default Author;