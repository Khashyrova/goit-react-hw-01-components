import './TransactionHistory.modules.css';
import ProtoType from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <div className="container">
      <table className="transaction-history">
        <thead className="transaction-title">
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.ProtoType = {
  items: ProtoType.string.isRequired,
};

export default TransactionHistory;
