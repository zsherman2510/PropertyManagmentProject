import React from 'react'

const TableComponent = ({ data }) => {
  const headers = Object.keys(data[0]).map((header) => {
    const capitalizedHeader = header.charAt(0).toUpperCase() + header.slice(1);
    return capitalizedHeader;
  });

  const renderCellValue = (value) => {
    if (Array.isArray(value)) {
      return value.map((obj, index) => (
        <>
          <span key={index}>{obj.name}</span>
          {" "}
        </>
      ))
    }

    return value;
  }


  return (
    <table className='requests-table'>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={row.id}
            style={{ backgroundColor: rowIndex % 2 === 0 ? '#fff' : '#f2f2f2' }}
          
          >
            {Object.keys(row).map((property, propertyIndex) => (
              <td key={propertyIndex}>
                {renderCellValue(row[property])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableComponent