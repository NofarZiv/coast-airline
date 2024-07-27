import '../styles/Promo.css';


const Promo = (props) => {

const { name } = props;

  return(
    <span className="item">{name}</span>
  )
}


export default Promo;