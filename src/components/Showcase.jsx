import React, { useState } from "react";
import axios from "axios";
import "./Showcase.css";
function Showcase() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const resetResult = () => {
    setResult(null);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .get(`https://eamcet-backend.onrender.com/${id}`)
      .then((response) => {
        setResult(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="container-pred">
      <h1 className="section-title">Analyzer</h1>
      <form className="prediction-form" onSubmit={handleFormSubmit}>
        <label>
          Enter the Branch Code:
          <br />
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <button type="submit" className="btn">
          Finder
        </button>
      </form>
      <h3>Please enter the branch code by referring the below table</h3>
      {loading ? (
        <div>Loading...</div>
      ) : result ? (
        <div className="ans">
          <div className="table-row">
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
          </div>
          <div className="table-row">
            <table>
              <thead>
                <tr>
                  <th colspan="4">BC-A</th>
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
                  <td>{result.bcamb}</td>
                  <td>{result.bcafb}</td>
                  <td>{result.bcaml}</td>
                  <td>{result.bcafl}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th colspan="4">BC-B</th>
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
                  <td>{result.bcbmb}</td>
                  <td>{result.bcbfb}</td>
                  <td>{result.bcbml}</td>
                  <td>{result.bcbfl}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th colspan="4">BC-C</th>
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
                  <td>{result.bccmb}</td>
                  <td>{result.bccfb}</td>
                  <td>{result.bccml}</td>
                  <td>{result.bccfl}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th colspan="4">BC-D</th>
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
                  <td>{result.bcdmb}</td>
                  <td>{result.bcdfb}</td>
                  <td>{result.bcdml}</td>
                  <td>{result.bcdfl}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th colspan="4">BC-E</th>
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
                  <td>{result.bcemb}</td>
                  <td>{result.bcefb}</td>
                  <td>{result.bceml}</td>
                  <td>{result.bcefl}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-row">
            <table>
              <thead>
                <tr>
                  <th colspan="4">SC</th>
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
                  <td>{result.scmb}</td>
                  <td>{result.scfb}</td>
                  <td>{result.scml}</td>
                  <td>{result.scfl}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th colspan="4">ST</th>
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
                  <td>{result.stmb}</td>
                  <td>{result.stfb}</td>
                  <td>{result.stml}</td>
                  <td>{result.stfl}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button type="submit" className="btn" onClick={resetResult}>
            Reset
          </button>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Branch Name</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Artificial Intelligence and Data Science</td>
              <td>AID</td>
            </tr>
            <tr>
              <td>Bio-Medical Engineering</td>
              <td>BME</td>
            </tr>
            <tr>
              <td>Chemical Engineering</td>
              <td>CHE</td>
            </tr>
            <tr>
              <td>Civil Engineering</td>
              <td>CIVIL</td>
            </tr>
            <tr>
              <td>Computer Science and Business System</td>
              <td>CSBS</td>
            </tr>
            <tr>
              <td>Computer Science and Engineering</td>
              <td>CSE</td>
            </tr>
            <tr>
              <td>Computer Science and Engineering (AI & ML)</td>
              <td>CSM</td>
            </tr>
            <tr>
              <td>Computer Science and Engineering (Data Science)</td>
              <td>CSD</td>
            </tr>
            <tr>
              <td>Electrical and Electronics Engineering</td>
              <td>EEE</td>
            </tr>
            <tr>
              <td>Electronics and Communication Engineering</td>
              <td>ECE</td>
            </tr>
            <tr>
              <td>Information Technology</td>
              <td>IT</td>
            </tr>
            <tr>
              <td>Mechanical Engineering</td>
              <td>MECH</td>
            </tr>
            <tr>
              <td>Pharmaceutical Engineering</td>
              <td>PHE</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Showcase;
