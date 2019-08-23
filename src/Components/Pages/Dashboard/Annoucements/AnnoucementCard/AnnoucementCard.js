import React from 'react';
import PropTypes from 'prop-types';

const AnnoucementCard = ({
    title,
    body,
    image,
    link
}) => {
        return (
            <div>
                <img alt={title} src={image}/>
                <p className="legend">{title}
                    <small>{body}</small>
                </p>
            </div>
        )
}


AnnoucementCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
}

AnnoucementCard.defaultProps = {
    type: 'text'
}

export default AnnoucementCard;