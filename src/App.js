import './App.css';
import Header from './components/header/Header'
import TicketSend from './components/tickedSend/TicketSend';
import Ticket from './components/ticket/Ticket';

function App() {

  return (
    <div className='App'>
      <Header />
      <Ticket />
      <TicketSend />
    </div>
  );
}

export default App;
