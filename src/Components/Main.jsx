import { useState } from "react";
import dolciItaliani from "../data/data";
import Card from "./Card";

function Main() {
  const [dolce, setDolce] = useState(dolciItaliani);
  const [titolo, setTitolo] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    // agguingo un nuovo dolce
    const nuovoDolce = {
      id: dolce.length + 1,
      img: "/img/grey.jpg",
      titolo: titolo,
      paragrafo: "Nuovo dolce aggiunto",
    };
    // agguingo il nuovo elemento
    setDolce([...dolce, nuovoDolce]);
  }
  return (
    <main className="container-fluid">
      <div className="box">
        {dolce.map((dolceelement) => (
          <div className="gap-5" key={dolceelement.id}>
            <Card dolciItaliani={dolceelement} />
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
            Aggiungi
          </button>
        </form>
      </section>
    </main>
  );
}
export default Main;
