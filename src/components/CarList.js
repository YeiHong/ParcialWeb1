import banner from './banner.svg'
import Table from 'react-bootstrap/Table';

function CarList(){
    return(
        <div>
            <h2>TuSegundazo.com</h2>
            <img src={banner} alt="banner" />
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Marca</th>
                            <th>Linea</th>
                            <th>Modelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Renault</td>
                            <td>Kangoo</td>
                            <td>2017</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Chevrolet</td>
                            <td>Spark</td>
                            <td>2018</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Chevrolet</td>
                            <td>Sail</td>
                            <td>2016</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Renault</td>
                            <td>Sandero</td>
                            <td>2020</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Nissan</td>
                            <td>March</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Chevrolet</td>
                            <td>Tracker</td>
                            <td>2018</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <p>Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo</p>
        </div>
    );
}

export default CarList;