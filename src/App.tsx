import { useState } from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like/Like";

function App() {
  let items = ["Warsaw", "Gdynia", "Cracow", "Olsztyn", "Yokohama"];

  const handleSelectItem = (item: string) => {
    console.log("item :>> ", item);
  };

  const [alertVisible, setAlertVisible] = useState(false);
  const [heartActive, setHeartActive] = useState(false);

  return (
    <div className="App">
      {alertVisible && (
        <Alert color="deeppink" onClose={() => setAlertVisible(false)}>
          Hello <span>World</span>!
        </Alert>
      )}

      <Button
        onClick={() => {
          setAlertVisible(!alertVisible);
        }}
      >
        &nbsp;DANGER!&nbsp;
      </Button>

      <Like
        display="block"
        active={heartActive}
        onClick={() => {
          setHeartActive(!heartActive);
        }}
      />

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
