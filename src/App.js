import React from 'react';
import './App.css';
function App() {
  return (

    /*Cabeçalho*/

    <div className="container-fluid p-0">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-collapse">
        <a class="navbar-brand" href="#"><i class="fas fa-jedi"></i>  JediShop</a>
        <ul className="col-xs-4 navbar-nav mx-auto">
        </ul>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Search"></input>
        </form>
        
      </nav>
    

    <div className="container">
        <div className="row">
          <div className="col">
          <i class="far fa-image"></i>
          </div>
          <div className="col">
            Produto
          </div>
          <div className="col">
            Valor
          </div>
          <div className="col">
            <button className="Min">-</button>
            <input type="number" size="1"/>
            <button className="Plus">+</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
          <i class="far fa-image"></i>
          </div>
          <div className="col">
            Produto
          </div>
          <div className="col">
            Valor
          </div>
          <div className="col">
            <button className="Min">-</button>
            <input type="number" size="1"/>
            <button className="Plus">+</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
          <i class="far fa-image"></i>
          </div>
          <div className="col">
            Produto
          </div>
          <div className="col">
            Valor
          </div>
          <div className="col">
            <button className="Min">-</button>
            <input type="number" size="1"/>
            <button className="Plus">+</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
          <i class="far fa-image"></i>
          </div>
          <div className="col">
            Produto
          </div>
          <div className="col">
            Valor
          </div>
          <div className="col">
            <button className="Min">-</button>
            <input type="number" size="1"/>
            <button className="Plus">+</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
          <i class="far fa-image"></i>
          </div>
          <div className="col">
            Produto
          </div>
          <div className="col">
            Valor
          </div>
          <div className="col">
            <button className="Min">-</button>
            <input type="number" size="1"/>
            <button className="Plus">+</button>
          </div>
        </div>
      </div>

    
    <div className="container-md">
    
    </div>
    </div>  
      
      
  );
}

export default App;


