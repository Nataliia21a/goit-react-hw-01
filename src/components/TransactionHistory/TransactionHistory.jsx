import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.container}>
      <thead>
        <tr className={css.tableHead}>
          <th className={css.tableName}>Type</th>
          <th className={css.tableName}>Amount</th>
          <th className={css.tableName}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr className={css.transactionListItem} key={item.id}>
            <td className={css.type}>{item.type}</td>
            <td className={css.amount}>{item.amount}</td>
            <td className={css.currency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
