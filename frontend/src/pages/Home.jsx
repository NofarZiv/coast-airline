import Search from "../components/Search";


const Home = (props) => {

  const { onSubmitSearch } = props;

  return (
    <div>
      <Search onSubmitSearch={onSubmitSearch}/>
    </div>
  )
}


export default Home;