import React from "react";

const tableHeading = [
  {
    heading: "Vendor’s Name",
    id: 1,
  },

  {
    heading: "Location",
    id: 2,
  },
  {
    heading: "Skills",
    id: 3,
  },
];
export const Vendortable = () => {
  return 
  
   <>
      
        <div className="wrap">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      
      <div className="right_sec">
        <main className="container-fluid">
          <div className=" table_sec">
            <div className=" col-md-4 fileds">
              <h1>List of Organization</h1>
              <input
                onChange={(e) => Search(e)}
                type="text"
                placeholder="Search by Name, Org"
                className="form-control"
              />
            </div>
            <div className="table_area">
              <div className="table_btns">
                <a className="btn" href="#">
                  EXPORT
                </a>
                <Link to="/org/create" className="btn-primary">
                  ADD NEW ORGANIZATION
                </Link>
              </div>
              <div className=" table-responsive ">
                <table className="table table-bordered table-hover">
                  <thead className="thead-dark">
                    <tr>
                      {tableHeading.map((e) => (
                        <th key={e.id} scope="col">{e.heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {orgList &&
                      orgList.results?.map((item) => (
                        <tr key={item.id}>
                          <td
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate(`/org/viewupdate/${item.id}`)}
                          >
                            <p>{item.org_name}</p>
                          </td>
                          {/* <td>{item.formalName}</td> */}
                          <td>{item.address}</td>
                          <td>{item.contact_number}</td>
                          <td>{item.email}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="mx-2">
                  <ReactPaginate
                    previousLabel={"<< prev"}
                    breakLabel={"..."}
                    nextLabel={"next >>"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    activeClassName={"active"}
                    onPageChange={handlePageClick}
                    renderOnZeroPageCount={null}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  
};
