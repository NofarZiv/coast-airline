import '../styles/Promo.css';

const Promo = (props) => {
  const { name, image } = props;

  return (
    <div className="promo-item">
      <img src={image} alt={name} className="promo-image" />
      <h3 className="promo-title">{name}</h3>
    </div>
  );
}

export default Promo;

