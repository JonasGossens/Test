import React from 'react';
import PropTypes from 'prop-types';

const ExampleContainer = ({
                              headline, children, transparent, ...props
                          }) => {
    return (
        <div
            className="content__card"
            {...props}
            style={{
                margin: '20px 0',
                backgroundColor: transparent ? 'transparent' : null
            }}
        >
            <h1>{headline}</h1>
            {children}
        </div>
    );
};

ExampleContainer.propTypes = {
    headline: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default ExampleContainer;
