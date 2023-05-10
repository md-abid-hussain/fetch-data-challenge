import Row from "./Row";
const Table = ({ data }) => {
    return (
        <table>
            <tbody>
                {data.map((item) => <Row key={item.id} rowData={item} />)}
            </tbody>
        </table>
    )
}

export default Table;