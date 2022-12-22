import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <ItemListContainer />
    </Layout>
  );
};

export default App;
