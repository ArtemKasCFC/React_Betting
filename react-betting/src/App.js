function App() {
  return (
    <section className="betting-app">
      <EventList />
      <BetSlip />
    </section>
  );
}

export default App;

function EventList() {
  return (
    <div className="container">
      <ul className="event-list">
        <Event></Event>
        <Event></Event>
      </ul>
    </div>
  );
}

function Event() {
  return (
    <li className="event">
      <div className="event-info">
        <h3>Team 1</h3>
        <h3>Team 2</h3>
        <p>10:00</p>
      </div>
      <div className="odds">
        <Button>X.XX</Button>
        <Button>X.XX</Button>
        <Button>X.XX</Button>
      </div>
      <div className="odds">
        <Button>X.XX</Button>
        <Select></Select>
        <Button>X.XX</Button>
      </div>
      <div className="odds">
        <Button>X.XX</Button>
        <Select></Select>
        <Button>X.XX</Button>
      </div>
    </li>
  );
}

function BetSlip() {
  return (
    <div className="bet-slip">
      <div className="bet-slip__header">
        <p>
          Bet Slip <span>X</span>
        </p>
        <button>&darr;</button>
      </div>
      <button>Clear bet slip</button>
      <BetsList />
      <div>
        Accamulator <span>X.XX</span> x <input type="text"></input>
      </div>
      <button>Place a bet</button>
    </div>
  );
}

function BetsList() {
  return (
    <>
      <Bet />
      <Bet />
    </>
  );
}

function Bet() {
  return (
    <div className="bet">
      <div>
        <h3>W1</h3>
        <p>Team 1</p>
        <p>Team 2</p>
      </div>
      <div>
        <span>X.XX</span> x <input type="text"></input>
      </div>
    </div>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}

function Select() {
  return (
    <select>
      <option>1</option>
      <option>2</option>
    </select>
  );
}
