import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const authHOC = (WrappedComponent) => {

    const AuthComponent = () => {

        const token = useSelector(state => state.authReducer.token)
        const history = useHistory();
        
        useEffect(() => {
            redirect()
        }, [token])

        const redirect = () => {
            if(token){
                history.push("/")
            } else {
                history.push("/login")
            }
        }

        return <WrappedComponent />
    }
    return AuthComponent;
}

export default authHOC;