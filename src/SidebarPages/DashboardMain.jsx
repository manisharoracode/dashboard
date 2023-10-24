
import BasicDemo from "./Dashboard/SimpleChart";
import SimpleChart from "./Dashboard/SimpleChart";
import PieChartCust from "./Dashboard/SimpleChart";

import TableCustom from "./Dashboard/TableCustom";
import VerticalBarCust from "./Dashboard/VerticalBarCust";

function DashboardMain() {
    return (
        <>
            <main className="main-container">
                <div className="container-fluid">
                    <div className='dashboard-heading'>
                        <h5>Dashboard</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 ">
                            <div className="card-container mt-3">
                                <SimpleChart />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-container mt-3">
                                <VerticalBarCust />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-container mt-3">
                                <PieChartCust />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card-container mt-3">
                            <TableCustom />
                        </div>
                    </div>

                </div>
            </main >
        </>
    )
}

export default DashboardMain;