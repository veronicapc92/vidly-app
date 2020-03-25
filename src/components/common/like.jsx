import React from 'react';

const Like = ( {liked, onLike }) => {
    let classes = "fa fa-heart"
    classes += (!liked) ? "-o btn" : " btn";

    return ( 
            <i 
                className={classes}
                aria-hidden="true"
                onClick={onLike}>
            </i>
    );
};
 
export default Like;