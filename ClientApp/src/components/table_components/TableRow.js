import React, { useRef, useState } from "react";
import { DeleteButton } from "../DeleteButton";
import EditClientForm from "./EditClientForm";

const TableRow = (props) => {
  const { id, name, email, phone_number, description, updateTable, root } =
    props;

  const [editClientId, setEditClientId] = useState(null);

  const rowRef = useRef(null);

  const makeRowEditable = () => {
    setEditClientId(id);
  };

  const makeRowStatic = () => {
    setEditClientId(0);
  };

  return (
    <>
      {editClientId === id ? (
        <EditClientForm
          {...props}
          makeRowStatic={makeRowStatic}
          updateTable={updateTable}
          root={root}
        />
      ) : (
        <tr id={id} key={"key-" + id} ref={rowRef}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone_number}</td>
          <td>{description}</td>
          <td>
            <button onClick={makeRowEditable} className="btn-primary">
              Editar
            </button>
            <DeleteButton deleteid={id} dbcontroller="dbclientes" />
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
