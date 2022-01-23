import React from 'react'
import {Card} from 'react-bootstrap'

function ProfilePhoto(props) {
    return (
        <div>
<Card.Img variant="top" src={props.image} style={{width:290,height:250}}/>
        </div>
    )
}

export default ProfilePhoto