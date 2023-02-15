import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";

const data = [{
    vendorName: "Peter",
    docType: "PDF",
    fileName: "Doc",
    startDate: "23/10/21",
    endDate: "25/10/21",
    expiry: "5-Days"
},
{
    vendorName: "Mark",
    docType: "PDF",
    fileName: "Doc",
    startDate: "23/10/21",
    endDate: "25/10/21",
    expiry: "6-Days"
}, {
    vendorName: "Adam",
    docType: "PDF",
    fileName: "Doc",
    startDate: "23/10/21",
    endDate: "25/10/21",
    expiry: "7-Days"
}]

const CommonTable = () => {
    return (
        <>
            <div className="common-table mt-5">
                <div className="tab" style={{ background: "#fff", padding: "20px" }}>
                    <div className="d-flex justify-content-between">
                        <p>Expiring Documents</p>
                        <div className="d-flex">
                            <CiSearch fill="#D9D9D9" className="search-icon mt-2 -mr-4 position-absolute"/>
                           
                            <input
                                type="text"
                                placeholder="Search"
                                className="form-control"
                            />
                            <FiFilter size={23} className="filter-icon" />
                        </div>

                    </div>
                    <table className="table" style={{ background: "#fff", padding: "20px 20px" }}>
                        <thead className="table-head">
                            <tr>
                                <th scope="col">Vendor Name</th>
                                <th scope="col">Document Type</th>
                                <th scope="col">File Name</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                                <th scope="col">Expiry In</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => (
                                    <tr className="table-row">
                                        <td>{item.vendorName}</td>
                                        <td>{item.docType}</td>
                                        <td>{item.fileName}</td>
                                        <td>{item.startDate}</td>
                                        <td>{item.endDate}</td>
                                        <td>{item.expiry}</td>
                                    </tr>
                                ))}

                        </tbody>
                    </table>
                </div>

            </div>


        </>
    )
}
export default CommonTable;
