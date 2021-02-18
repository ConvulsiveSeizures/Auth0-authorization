import React from "react"
import {useAuth0} from "@auth0/auth0-react"
import JSONPretty from "react-json-pretty"

const Profile = () => {
    const {user, isAuthenticated} = useAuth0()
    
    if (isAuthenticated) {
        return (
            <div>
                <h1>Profile</h1>
                <img src={user.picture} height="140px" />
                <div className="UserInfo">
                    <JSONPretty data={user} />
                </div>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }

}

export default Profile;