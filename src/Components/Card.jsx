function Card({ dolciItaliani }) {
  return (
    <div className="card">
      <img src={dolciItaliani.img} />
      <div className="card-body">
        <h5 className="card-title">{dolciItaliani.titolo}</h5>
        <p className="card-text">{dolciItaliani.paragrafo}</p>
        <button href="#">LEGGI DI PIU</button>
      </div>
    </div>
  );
}
export default Card;
