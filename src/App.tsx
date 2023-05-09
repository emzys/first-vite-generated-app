import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Warsaw", "Gdynia", "Cracow", "Olsztyn", "Yokohama"];

  return (
    <div className="App">
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
