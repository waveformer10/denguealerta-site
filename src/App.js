import Layout from "./components/Layout";
import Lateral from "./components/Lateral";
import MessageData from "./components/MessageData";

function App() {
  return (
    <div className="App" >
      
      <Layout lateral={
        <>
          <Lateral />
          <nav>
            <MessageData text={'Hello world 1'} newInfo={true} />
            <MessageData text={'Hello world 2'} newInfo={false} />
          </nav>
        </>
      }>
        <p>Mapa</p>
      </Layout>
    </div>
  );
}

export default App;
