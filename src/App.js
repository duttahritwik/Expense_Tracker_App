import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaciton from './components/AddTransaction'
import { GlobalProvider } from './context/globalContext'
import './App.css'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaciton />
      </div>
    </GlobalProvider>
  );
}

export default App
