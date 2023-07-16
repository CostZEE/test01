import axios, { Axios } from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);
  const [newsalary, setNewSalary] = useState(0);

  const [employeeList, setemployeeList] = useState([]);

  const getEmployees = async () => {
    const response = await axios.get("http://localhost:3001/employee");
    setemployeeList(response.data);
  };

  const addEmployee = async () => {
    const response = await axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      salary: salary,
    });
    setemployeeList([
      ...employeeList,
      {
        name: name,
        age: age,
        country: country,
        position: position,
        salary: salary,
      },
    ]);
  };

  const updateEmployee = async (id) => {
    const response = await axios.post("http://localhost:3001/update", {
      salary: newsalary,
      id: id,
    });
    // console.log(response);
    setemployeeList(
      employeeList.map((list) => {
        return list.id == id
          ? {
              id: list.id,
              name: list.name,
              age: list.age,
              country: list.country,
              position: list.position,
              salary: newsalary,
            }
          : list;
      })
    );
  };

  const deleteEmployee = async (id) => {
    const response = await axios.post("http://localhost:3001/delete", {
      id: id,
    });
    setemployeeList(
      employeeList.filter((list) => {
        return list.id != id;
      })
    );
  };

  return (
    <div className="container">
      <h1>Employee Information</h1>
      <div className="information">
        {/* <form action=""> */}
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Name :{" "}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Plese Input"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Age :{" "}
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Plese Input"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Country :{" "}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Plese Input"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Position :{" "}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Plese Input"
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Salary :{" "}
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Plese Input"
              onChange={(e) => {
                setSalary(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-success" onClick={() => addEmployee()}>
            Add
          </button>
        {/* </form> */}
      </div>
      <hr />
      <div className="employee">
        <button className="btn btn-primary" onClick={() => getEmployees()}>
          Show
        </button>

        {employeeList.map((list, index) => {
          return (
            <div className="employee card" key={list.id}>
              <div className="card-body text-left">
                <p className="card-text">Name : {list.name}</p>
                <p className="card-text">Age : {list.age}</p>
                <p className="card-text">Country : {list.country}</p>
                <p className="card-text">Position : {list.position}</p>
                <p className="card-text">Salary : {list.salary}</p>
                <div className="d-flex">
                  <input
                    type="number"
                    placeholder="..."
                    className="form-control"
                    onChange={(e) => {
                      setNewSalary(e.target.value);
                    }}
                  />
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      updateEmployee(list.id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteEmployee(list.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
