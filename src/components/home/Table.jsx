import React from "react";

const Table = (props) => {
  return (
    <table>
      {props?.data?.length > 0 ? (
        <tbody>
          {props.data.map((vl, ky) => (
            <tr key={ky}>
              <td>{vl.API}</td>
              <td>{vl.Category}</td>
            </tr>
          ))}
        </tbody>
      ) : (
        <h3>Loading...</h3>
      )}
    </table>
  );
};

export default Table;
