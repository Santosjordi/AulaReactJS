import GithubImage from './github.png';
import React, {useState} from "react";
import './App.css';

function App() {

    const [search, setSearch] = useState('');

    const [userData, setUserData] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://api.github.com/users/${search}`)
            .then(response => response.json())
            .then(userResponse => setUserData(userResponse));
    }

    console.log(userData)

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

  return (
    <div className="container text-center">
        <h1 className="py-5 text-uppercase">GitHub Profile</h1>
        <form>
            <div className="form-group">
                <div className="input-group">
                    <input type="text" className="form-control" required value={search} onChange={handleChange}/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-success">Search</button>
                    </span>
                </div>
            </div>
        </form>
        <div className='py-5'>
            <img src={GithubImage} className="responsive rounded-circle" alt="github user face" height="200px"/>
            <h1 className="pt-5">
                <a href="https://github.com/Santosjordi" target="_new">Jordi Santos</a>
            </h1>
            <h3>Jaraguá do Sul</h3>
            <p>
                <a href="https://www.linkedin.com/in/jordi-weliton-dos-santos-955bbb93/" target="_new" className="text-info">Linkedin</a>
            </p>
        </div>
    </div>
  );
}

export default App;
