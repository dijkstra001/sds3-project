import axios from "axios";
import { useEffect, useState } from "react";
import { SalesPage } from 'types/Sale';
import { formatCurrency, formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/request";
import Pagination from "../Pagination";

const DataTable = () => {

    const [activePage, setActivePage] = useState(0);

    const changePage = (n:number) => {
        setActivePage(n)
    };

    const [page, setPage] = useState<SalesPage>({
        totalPages: 0,
        totalElements: 0,
        number: 0,
        last: true,
        first: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/findAll?page=${activePage}&size=10&sort=date,desc`)
            .then(response => {
                setPage(response.data)
            })
    }, [activePage]);

    return (
        <>
            <Pagination  page={page} onPageChange={changePage}/>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.date, 'dd/MM/yyyy')}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{formatCurrency(item.amount)}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DataTable;