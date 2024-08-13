import Promo from "./Promo";
import petsImage from '../images/pets.jpg';
import pointsImage from '../images/points.jpg';
import destinationsImage from '../images/destinations.jpg';
import travelInsuranceImage from '../images/travel-insurance.jpg';

const PromoList = () => {
  const promos = [
    { 'id': '1', 'name': 'Pets', 'image': petsImage },
    { 'id': '2', 'name': 'Points', 'image': pointsImage },
    { 'id': '3', 'name': 'Destinations', 'image': destinationsImage },
    { 'id': '4', 'name': 'Travel insurance', 'image': travelInsuranceImage }
  ];

  return (
    <div className="promo-list">
      {promos.map(prom => (
        <Promo
          key={prom.id}
          name={prom.name}
          image={prom.image}
        />
      ))}
    </div>
  );
}

export default PromoList;