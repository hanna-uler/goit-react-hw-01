import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.tableHead}>
                <tr>
                    <th className={css.tableHeader}>Type</th>
                    <th className={css.tableHeader}>Amount</th>
                    <th className={css.tableHeader}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => {
                    return (<tr className={css.row} key={item.id}>
                        <td className={css.tableData}>{item.type}</td>
                        <td className={css.tableData}>{item.amount}</td>
                        <td className={css.tableData}>{item.currency}</td>
                    </tr>);
                            })}
            </tbody>
        </table>
    )
    
}