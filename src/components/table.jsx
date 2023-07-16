import React from 'react'

function Tables(result) {
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th colspan="4">OC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th colspan="2">Opening Rank</th>
                    <th colspan="2">Closing Rank</th>
                </tr>
                <tr>
                    <th>Male</th>
                    <th>Female</th>
                    <th>Male</th>
                    <th>Female</th>
                </tr>
                <tr>
                    <td>{result.ocmb}</td>
                    <td>{result.ocfb}</td>
                    <td>{result.ocml}</td>
                    <td>{result.ocfl}</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default Tables;