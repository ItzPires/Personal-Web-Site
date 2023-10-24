import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import eu from './imgs/eu.png';
import dei from './imgs/dei.png';
import chavena from './imgs/chavena.png';
import viseu from './imgs/viseu.png';
import lua from './imgs/lua.png';
import botanico from './imgs/botanico.jpg';
import matrecos from './imgs/matrecos.png';

function App() {
  return (
    <div className="row">
      <div className="col-4 a">
        <img src={chavena} alt="chavena" id="chavena" />
        <img src={viseu} alt="viseu" id="viseu" />
        <img src={dei} alt="dei" id="dei" />
      </div>
      <div className="col-4 a">
        <img src={eu} alt="eu" className="img-responsive" />
      </div>
      <div className="col-4 a">
        <img src={lua} alt="lua" id="lua" />
        <img src={botanico} alt="botanico" id="botanico" />
        <img src={matrecos} alt="matrecos" id="matrecos" />
      </div>
    </div>
  );
}

export default App;
