import React, { Fragment, useContext } from 'react'
import { GlobalContext } from '../../context/globalContext'
import Transaction from '../Transaction'

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
    return (
        <Fragment>
            <h3>History</h3>
            {transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />)}
        </Fragment>
    )
}

export default TransactionList