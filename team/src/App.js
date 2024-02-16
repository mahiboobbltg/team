import React, { useState, useEffect } from "react";
import "@fontsource/poppins";
function App() {
  const [data, setdata] = useState([])

  useEffect(() => {
    const getdetails = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098')
        const result = await response.json()
        setdata(result)
      } catch (error) { console.error(error) }
    }
    getdetails()
  }, [])
  return (
    <div style={{ fontFamily: "poppins" }}>

      <nav className="navbar navbar-light" style={{ backgroundColor: " #6096ee", height: "70px" }}>
        <h3 className="navbarbrand" style={{ marginLeft: "13px", color: "white" }}>Team</h3>
        <form className="form-inline d-flex" >
          <div className="col-xs-6" >
            <div className="right-inner-addon" style={{ marginRight: "13px" }}>
              <i className="icon-search"></i>
              <input type="search" className="form-control rounded-pill" placeholder="Search......" />
            </div>
          </div>
        </form>
      </nav>

      <div className="container ">
      <section>
        <div className=" mb-5 mt-4">
          <h3 className="mb-4" style={{ color: "#a28793" }}>Administators</h3>
          <div className="row g-3">
            {data.map((item) => (
              <div className=" col-lg-3 col-md-6 ">
                <div className="card shadow-lg rounded border-0" >
                  <div className="card-body d-flex justify-content-arround ">
                    <img src={item.img} width={40} height={40} alt="img" className="rounded-pill" style={{ marginRight: "20px" }} />
                    <span className="lh-1">
                      <p style={{ fontSize: '17px' }}>{item.first_name}<br /><span className="text-muted" style={{ fontSize: "14px", fontFamily: "poppins" }}>{item.email}</span></p>
                    </span>

                  </div>
                </div>
              </div>))}
          </div>

        </div>

      </section>
<hr/>

      <section>
        <div className=" mt-4">
          <h3 className="mb-4 mt-5" style={{ color: "#a28793" }}>Members</h3>
          <div className="card border-0">
            <div className="row g-3">
              {data.map((item) => (
                <div className=" col-lg-3 col-md-6">


                  <div className="card shadow-lg" >
                    <div className="card-body d-flex justify-content-arround">

                      <img src={item.img} width={30} height={30} alt="img" className="rounded-pill" style={{ marginRight: "20px" }} />
                      <span className="lh-1">
                        <p style={{ fontFamily: "poppins", fontSize: '17px' }}>{item.first_name}<br /><span className="text-muted" style={{ fontSize: "14px", fontFamily: "poppins" }}>{item.email}</span></p>
                      </span>

                    </div>
                  </div>
                </div>))}
            </div>
          </div>

        </div>

      </section>
      </div>

   
    </div>
  );
}

export default App;
