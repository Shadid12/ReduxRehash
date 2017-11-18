import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class App extends React.Component {
    render () {
        return (
            <div>
                <FacebookLogin
                    appId="470840129963641"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={(res) => {console.log(res)}}
                    callback={(res) => console.log('response', res)} />

                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={(res) => {console.log('success',res)}}
                    onFailure={(res) => {console.log(res)}}
                />
            </div>
        )
    }
}

export default App;