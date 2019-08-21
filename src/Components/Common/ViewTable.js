import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.div.attrs({
    className: "col s12"
})``

const ViewTable = ({
    title,
    author,
    link,
    image,
    source,
}) => {
    return (
        <Table>
            <a href={link}>{title} by {author} from {source}</a>
        </Table>
    )
  }

ViewTable.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

ViewTable.defaultProps = {
    type: 'text'
}

export default ViewTable;