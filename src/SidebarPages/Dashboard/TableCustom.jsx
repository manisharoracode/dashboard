import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
function TableCustom() {

    const [prodt, setProdt] = useState([])
    let url = "https://jsonplaceholder.typicode.com/users"
    function fetchData(url) {
        fetch(url).then((res) => res.json()).then((data) => setProdt(data))
    }

    useEffect(() => {
        fetchData(url)
    }, [])
    return (
        <Table responsive>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Address</td>
                    <td>Phone Number</td>
                    <td>Website</td>
                </tr>
            </thead>
            <tbody>
                {
                    prodt.map((p, idk) =>
                        <>
                            <tr key={idk}>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.address.street}, {p.address.suite}, {p.address.city}, {p.address.zipcode} Latitute{p.address.geo.lat} Latitute{p.address.geo.lng}</td>
                                <td>{p.phone}</td>
                                <td>{p.website}</td>
                            </tr>
                        </>
                    )
                }
            </tbody>
        </Table>
    );
}

export default TableCustom;