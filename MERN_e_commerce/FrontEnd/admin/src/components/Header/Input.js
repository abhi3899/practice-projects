import React from 'react'
import { Form } from 'react-bootstrap'

function Input(props) {
    return (
        <div>
        <Form.Group>
                {props.label && <Form.Label style={{ fontWeight: "700" }} >{props.label}</Form.Label>}
                <Form.Control 
                    type={props.type} 
                    placeholder={props.placeholder} 
                    value={props.value}
                    onChange={props.onChange}
                    {...props}
                />
                <Form.Text className="text-muted">
                  {props.errorMessage}
                </Form.Text>
            </Form.Group>
        </div>
    )
}

export default Input
