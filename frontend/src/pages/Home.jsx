import Search from "../components/Search";
import PromoList from "../components/PromoList";
import '../styles/Home.css'; // Import the new CSS file

const Home = (props) => {
  const { onSubmitSearch } = props;

  return (
    <div className="home-container">
      <div className="search-wrapper">
        <Search onSubmitSearch={onSubmitSearch}/>
      </div>
      <PromoList />
    </div>
  )
}

export default Home;