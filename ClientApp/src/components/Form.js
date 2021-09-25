import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <tr>
              <td>id</td>
              <td><input type='text' placeholder='nombre'/></td>
              <td><input type='text' placeholder='email'/></td>
              <td><input type='text' placeholder='teléfono'/></td>
              <td><input type='text' placeholder='detalles'/><button>Guardar</button></td>
            </tr>
        )
    }

}

export default Form