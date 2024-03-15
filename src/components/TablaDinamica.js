import React, { useState } from "react";
import { FormattedMessage } from 'react-intl';

function TablaDinamica({ datos }) {
  const [mostrarTabla, setMostrarTabla] = useState(false);

  const mostrarTablaHandler = () => {
    setMostrarTabla(true);
  };

  const OcultarTablaHandler = () => {
    setMostrarTabla(false);
  };

  console.log(datos)

  return (
    <div>
      <button onClick={mostrarTablaHandler}><FormattedMessage id='Devices'/></button>
      <button onClick={OcultarTablaHandler}><FormattedMessage id='Hide'/></button>
      {mostrarTabla && (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th><FormattedMessage id='Devices'/></th>
                <th><FormattedMessage id='Value'/></th>
              </tr>
            </thead>
            <tbody>
                {datos.map((device, idx)=>(
                    <tr key={idx}>
                        <td>{idx+1}</td>
                        <td>{device.id}</td>
                        <td>{device.name}</td>
                        <td>{device.desired.value}</td>
                    </tr>
                ))}                
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TablaDinamica;
