import React from 'react';

const TableDisplay = () => {

return (
<>
    <div className="container">
        <div className="container card-widget card-widget-transactions card-widget-header-included">
            <div className="row mb-2 ml-2">
                <h4 className="text-muted text-uppercase small text-left">All Transactions</h4>
            </div>
            <div className="container">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" col="true">Type</th>
                            <th scope="col" col="true">Category</th>
                            <th scope="col" col="true">Date</th>
                            <th scope="col" col="true">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="tbody  container movements container-movements card-body pt-0">
                        <tr className="table-row-height">
                            <th scope="row">1</th>
                            <td className="col movements-type movements-type-deposit">Income</td>
                            <td className="col movements-date">2 Jan</td>
                            <td className="col movements-value">R 500</td>
                        </tr>
                        <tr className="table-row-height">
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                        </tr>
                        <tr className="table-row-height">
                            <th scope="row">3</th>
                            <td col span="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</>
)
}

export default TableDisplay