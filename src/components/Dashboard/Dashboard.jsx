import React from 'react';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import styles from './Dashboard.module.css';

export default class Dashboard extends React.Component {
  state = {
    transactions: [],
    balance: 0,
  };

  handleTransaction = newTransaction => {
    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction],
      balance:
        newTransaction.type === 'deposit'
          ? prevState.balance + newTransaction.enteredNumber
          : prevState.balance - newTransaction.enteredNumber,
    }));
  };

  render() {
    const { balance, transactions } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls
          balance={balance}
          handleTransaction={this.handleTransaction}
        />
        <Balance balance={balance} transactions={transactions} />
        <TransactionHistory transactions={transactions} />
      </div>
    );
  }
}
