import React from 'react';

const Navigation = ( {onRouteChange, isSignedIn} ) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className="f5 link grow black pa3 pointer bg-purple br-pill mr4 white"> Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className="f5 link grow black pa3 pointer bg-purple br-pill mr4 white"> Sign in</p>
                <p onClick={() => onRouteChange('register')} className="f5 link grow black pa3 pointer bg-purple br-pill mr4 white"> Register</p>                
            </nav>
        );
    }
    
}

export default Navigation;