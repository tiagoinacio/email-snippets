import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

const Item = ({ template, id, ...props }) => (
    <button
        { ...props }
        title={ id }
        className="item">
        { template }
    </button>
);

Item.propTypes = {
    template: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Item;