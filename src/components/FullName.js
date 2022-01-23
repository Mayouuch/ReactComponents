import React from 'react'
import{Card} from 'react-bootstrap'

function FullName(props) {
    return (
        <div>
            <Card.Title>{props.fullname}</Card.Title>
        </div>
    )
}

export default FullName