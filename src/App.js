import GithubImage from './github.png';
import './App.css';

function App() {
  return (
    <div className="container text-center">
        <h1 className="py-5 text-uppercase">GitHub Profile</h1>
        <form>
            <div className="form-group">
                <div className="input-group">
                    <input type="text" className="form-control" required/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-success">Search</button>
                    </span>
                </div>
            </div>
        </form>
        <div className='py-5'>
            <img src={GithubImage} className="responsive rounded-circle" alt="github user face" height="200px"/>
        </div>
    </div>
  );
}

export default App;
