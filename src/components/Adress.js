import React from 'react'
import{Card} from 'react-bootstrap'

function Adress(props) {
    return (
        <div>
    <Card.Text>
{props.adress}
    </Card.Text>
        </div>
    )
}

export default Adress