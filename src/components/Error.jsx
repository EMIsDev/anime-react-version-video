import React from "react";

function Error() {
    return (

        <div className={'errorContainer'}>
            <h2>Oops! Something went wrong.</h2>
            <p>We couldn't find the page you're looking for.</p>
            <img className={'errorContainer__img'}
                src={'https://media.giphy.com/media/UHAYP0FxJOmFBuOiC2/giphy.gif'}
                alt="Anime gif"
            />
        </div>

);

}

export default Error;

