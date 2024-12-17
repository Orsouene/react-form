import { useState } from "react";
import dolciItaliani from "../data/data";
import Card from "./Card";

function Main() {
  const [dolce, setDolce] = useState(dolciItaliani);
  const [titolo, setTitolo] = useState("");

  // funzione per agguingere un nuovo elemento all array
  function handleSubmit(event) {
    event.preventDefault();
    // agguingo un nuovo dolce
    const nuovoDolce = {
      id: dolce.length + 1,
      img: "/img/grey.jpg",
      titolo: titolo,
      paragrafo: "Nuovo dolce aggiunto",
    };
    // aggiorno il mio nuovo array aggiungendo il nuovo elemento
    setDolce([...dolce, nuovoDolce]);
  }
  // funzione per eliminare un elemento dall array
  function deleteItem(id) {
    setDolce(dolce.filter((element) => element.id != id));
  }
  return (
    <main className="container-fluid">
      <div className="box">
        {dolce.map((dolceElement) => (
          <div className="gap-5" key={dolceElement.id}>
            <Card
              dolciItaliani={dolceElement}
              onDelete={() => deleteItem(dolceElement.id)}
            />
          </div>
        ))}
      </div>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              <h3>Il titolo dell&apos;articolo</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="titleHelp"
              value={titolo}
              onChange={(e) => setTitolo(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            ADD
          </button>
        </form>
      </section>
    </main>
  );
}
export default Main;
