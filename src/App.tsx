import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["Warsaw", "Gdynia", "Cracow", "Olsztyn", "Yokohama"];

  // const handleSelectItem = (item: string) => {
  //   console.log("item :>> ", item);
  // };

  return (
    <div className="App">
      <Alert>
        Hello <span>World</span>!
      </Alert>

      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
