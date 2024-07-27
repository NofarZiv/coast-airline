import Search from "../components/Search";
import PromoList from "../components/PromoList";

const Home = (props) => {

  const { onSubmitSearch } = props;

  return (
    <div>
      <Search onSubmitSearch={onSubmitSearch}/>
      <PromoList />
    </div>
  )
}


export default Home;