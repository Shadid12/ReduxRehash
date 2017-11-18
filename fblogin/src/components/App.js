import React from 'react';
import FacebookLogin from 'react-facebook-login';

class App extends React.Component {
    render () {
        return (
            <FacebookLogin
                appId="470840129963641"
                autoLoad={true}
                fields="name,email,picture"
                onClick={(res) => {console.log(res)}}
                callback={(res) => console.log('response', res)} />
        )
    }
}

export default App;