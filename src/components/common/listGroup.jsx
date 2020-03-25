import React from 'react';

const ListGroup = (props) => {
    const { 
        genres, 
        textProperty, 
        valueProperty, 
        filteredGenre, 
        onGenreFilter 
    } = props;

    return ( 
        <ul className="list-group">
            {genres.map(genre =>
                <li  
                    key={genre[valueProperty]}
                    className={(genre === filteredGenre) ? 'list-group-item btn active' : 'list-group-item btn'}
                    onClick={() => onGenreFilter(genre)}>
                    {genre[textProperty]}
                </li>
            )}
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};
 
export default ListGroup;