import React, { Component } from 'react';

class App extends Component {

  // klik(jenjang){
    
  // }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              
              {/* Dropdown Pertama */}


              <div className="container" style={{padding: "50px"}}>
                <div className="dropdown">
                  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pilih Jenjang
                  </button>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href=""> Pendidikan Pra Sekolah </a>
                    <a className="dropdown-item" href=""> Pendidikan Dasar </a>
                    <a className="dropdown-item" href=""> Pendidikan Menengah </a>
                    <a className="dropdown-item" href=""> Pendidikan Tinggi </a>
                  </div>
                  
                </div>
              </div>

            </div>

            <div className="col-lg-6">
              
              
              {/* Dropdown Kedua */}
              <div className="container" style={{padding: "50px"}}>
                <div className="dropdown">
                  <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pilih Tingkatan
                  </button>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href=""> PAUD Pendidikan Anak Usia Dini</a>
                    <a className="dropdown-item" href=""> TK Taman Kanak-Kanak </a>
                    <a className="dropdown-item" href=""> RA Raudhatul Athfal</a>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
