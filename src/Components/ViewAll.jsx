import React, { useState } from "react";
import EmployeeHeader from "./EmployeeHeader";

const ViewAll = () => {
  const [data, changeData] = useState([
    {
      id: 1001,
      imageUrl: "https://hub.dummyapis.com/Image?text=DR&height=120&width=120",
      firstName: "Diana",
      lastName: "Roberts",
      email: "Diana.Roberts@dummyapis.com",
      contactNumber: "4365094558",
      age: 73,
      dob: "05/06/1950",
      salary: 1.0,
      address: "Address1",
    },
    {
      id: 1002,
      imageUrl: "https://hub.dummyapis.com/Image?text=JK&height=120&width=120",
      firstName: "Jaime",
      lastName: "Kutch",
      email: "Jaime.Kutch@dummyapis.com",
      contactNumber: "4593198622",
      age: 33,
      dob: "13/08/1990",
      salary: 2.0,
      address: "Address2",
    },
    {
      id: 1003,
      imageUrl: "https://hub.dummyapis.com/Image?text=HP&height=120&width=120",
      firstName: "Harley",
      lastName: "Predovic",
      email: "Harley.Predovic@dummyapis.com",
      contactNumber: "4572390947",
      age: 84,
      dob: "07/04/1939",
      salary: 3.0,
      address: "Address3",
    },
    {
      id: 1004,
      imageUrl: "https://hub.dummyapis.com/Image?text=BO&height=120&width=120",
      firstName: "Braulio",
      lastName: "Olson",
      email: "Braulio.Olson@dummyapis.com",
      contactNumber: "4205493514",
      age: 60,
      dob: "01/07/1963",
      salary: 4.0,
      address: "Address4",
    },
    {
      id: 1005,
      imageUrl: "https://hub.dummyapis.com/Image?text=RD&height=120&width=120",
      firstName: "Raphael",
      lastName: "Daniel",
      email: "Raphael.Daniel@dummyapis.com",
      contactNumber: "4964793371",
      age: 80,
      dob: "03/09/1943",
      salary: 5.0,
      address: "Address5",
    },
    {
      id: 1006,
      imageUrl: "https://hub.dummyapis.com/Image?text=AK&height=120&width=120",
      firstName: "Ansley",
      lastName: "Koss",
      email: "Ansley.Koss@dummyapis.com",
      contactNumber: "4347897348",
      age: 55,
      dob: "15/07/1968",
      salary: 6.0,
      address: "Address6",
    },
    {
      id: 1007,
      imageUrl: "https://hub.dummyapis.com/Image?text=JR&height=120&width=120",
      firstName: "Jill",
      lastName: "Ryan",
      email: "Jill.Ryan@dummyapis.com",
      contactNumber: "4584091662",
      age: 75,
      dob: "12/07/1948",
      salary: 7.0,
      address: "Address7",
    },
    {
      id: 1008,
      imageUrl: "https://hub.dummyapis.com/Image?text=EM&height=120&width=120",
      firstName: "Erik",
      lastName: "Mills",
      email: "Erik.Mills@dummyapis.com",
      contactNumber: "4037799391",
      age: 51,
      dob: "01/08/1972",
      salary: 8.0,
      address: "Address8",
    },
    {
      id: 1009,
      imageUrl: "https://hub.dummyapis.com/Image?text=KM&height=120&width=120",
      firstName: "Kylie",
      lastName: "McClure",
      email: "Kylie.McClure@dummyapis.com",
      contactNumber: "4430491951",
      age: 56,
      dob: "27/09/1967",
      salary: 9.0,
      address: "Address9",
    },
    {
      id: 1010,
      imageUrl: "https://hub.dummyapis.com/Image?text=MG&height=120&width=120",
      firstName: "Maye",
      lastName: "Gaylord",
      email: "Maye.Gaylord@dummyapis.com",
      contactNumber: "4534092037",
      age: 66,
      dob: "29/06/1957",
      salary: 10.0,
      address: "Address10",
    },
  ]);

  return (
    <div>
      <EmployeeHeader />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Image</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>

                      <th scope="col">Date of Birth</th>
                      <th scope="col">Age</th>
                      <th scope="col">Contact Number</th>

                      <th scope="col">Address</th>
                      <th scope="col">Email</th>
                      <th scope="col">Salary(per Lac)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => {
                      return (
                        <tr>
                          <td>{value.id}</td>
                          <td>
                            <img src={value.imageUrl} alt="img" />
                          </td>
                          <td>{value.firstName}</td>
                          <td>{value.lastName}</td>
                          <td>{value.dob}</td>
                          <td>{value.age}</td>
                          <td>{value.contactNumber}</td>
                          <td>{value.address}</td>
                          <td>{value.email}</td>
                          <td>{value.salary}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
