import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["Warsaw", "Gdynia", "Cracow", "Olsztyn", "Yokohama"];

  // const handleSelectItem = (item: string) => {
  //   console.log("item :>> ", item);
  // };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div className="App">
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello <span>World</span>!
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisible(!alertVisible);
        }}
      >
        Danger!
      </Button>

      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
