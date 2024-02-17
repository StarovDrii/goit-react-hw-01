import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <div className={css.wrapper}>
      <table className={css.history}>
        <thead>
          <tr>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id} className={css.row}>
              <td className={css.cell}>{item.type}</td>
              <td className={css.cell}>{item.amount}</td>
              <td className={css.cell}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
