import * as React from "react";
import { Swipeable, direction } from "react-deck-swiper";
import getData from "../data";

const container = {
  marginTop: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  textAlign: "center",
};

const card = {
  margin: "0 auto",
  width: "300px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
  border: "1px solid #ddd",
  padding: "48px",
  userSelect: "none",
};

const IndexPage = () => {
  const [count, setCount] = React.useState(0);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(getData());
  }, []);

  const [index, setIndex] = React.useState(0);

  if (data[index]) {
    console.log(
      data[index].important ? "Important." : "Fun.",
      data[index].question,
      data[index].response ? '? Yes' : '? No'
    );
  }

  const handleOnSwipe = (swipeDirection) => {
    const { important, response } = data[index];
    if (
      important &&
      ((response && swipeDirection === direction.RIGHT) ||
        (!response && swipeDirection === direction.LEFT))
    ) {
      setCount(count + 1);
    }
    if (index + 1 < data.length) {
      setIndex(index + 1);
    } else {
      // TODO: end of game!
    }
  };

  const renderButtons = ({ right, left }) => (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={left}>NO</button>
      <button style={{ marginLeft: "1rem" }} onClick={right}>
        Yes
      </button>
    </div>
  );

  return (
    <main style={container}>
      <Swipeable onSwipe={handleOnSwipe} renderButtons={renderButtons}>
        <div style={card}>{data?.[index]?.question}</div>
      </Swipeable>
      <p>Bonnes réponses: {count}</p>
      <p>{index === data.length - 1 ? "Terminé" : ""}</p>
    </main>
  );
};

export default IndexPage;
