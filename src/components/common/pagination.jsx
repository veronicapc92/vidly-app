import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = (props) => {
    const { moviesCount, pageSize, currentPage, onPageChange } = props;

    const pagesCount = Math.ceil(moviesCount / pageSize);
    if (pagesCount === 1) return null;

    const pages = _.range(1, pagesCount + 1);
    
    return ( 
        <nav aria-label="...">
            <ul className="pagination">
                {pages.map(page =>
                <li 
                    key={page}
                    className={ page === currentPage ? 'page-item active' : 'page-item'}>
                    <a
                        className="page-link"
                        onClick={() => onPageChange(page)}>{page}
                    </a>
                </li>
                )}
            </ul>
        </nav>
    );
};
 
Pagination.propTypes = {
    moviesCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;