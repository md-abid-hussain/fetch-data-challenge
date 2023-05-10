import Cell from "./Cell"
const Row = ({ rowData }) => {
    return (
        <tr>{Object.entries(rowData).map((item) => <Cell key={item[0]} cellData={JSON.stringify(item[1])} />)}</tr>
    )
}

export default Row