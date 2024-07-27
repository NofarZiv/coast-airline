import Promo from "./Promo";


const PromoList = () => {

  const promos = [
    {'id': '1', 'name': 'Pets'}, {'id': '2', 'name': 'Points'}, {'id': '3', 'name': 'Destinations'}, {'id': '4', 'name': 'Travel insurance'}
  ];

  const promosList = promos.map(prom => {
    return(
      <Promo 
        key={prom.id}
        name={prom.name}
      />
    )
  }

  )
  return(
    <ul>
      {promosList}
    </ul>
  )
}



export default PromoList;