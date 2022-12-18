
const {Card, Button, Container, Form,  Nav,  Navbar, Row ,Col } = ReactBootstrap;
// const { useState ,useEffect } = React ;



const Positions = () =>{
    return(

    <div className="container">

        <div className="title_job mt-4">
            <h3 >Open Positions</h3>
        </div>

        <div className="AllSelect mt-4">

            <div className="select1">
                    <select  type="search"  name="" id="department" className="department">
                    <option value="0" style={{opacity:0}} disabled selected>Choose Department</option>
                        <option  value="1">All</option>
                        <option value="2">Finance</option>
                        <option value="3">Service Delivery</option>

                    </select>
            </div>

            <div className="select2">
                    <select  name="" id="department" className="department">
                        <option value="1">Finance</option>
                        <option value="2">Service Delivery</option>

                    </select>
            </div>

            <div className="select3">
                    <select name="" id="department" className="department">
                        <option value="1">Finance</option>
                        <option value="2">Service Delivery</option>

                    </select>
            </div>

        </div>

    </div>
    )

}


//! =================>> Header <==================
const Header = () => {
    return (
        <div className="container-fluid p-0">

        <div className="container">
            <Row className="Header">
                <Col className='justify-content-center text-center' sm="12"> 
                <div className="title">
                <span class="portal-img">
                    <img
                        src="https://1825026.app.netsuite.com/core/media/media.nl?id=4841&c=1825026&h=mTUwUBzxpdLHcstbW_s0dM23DtQ3etdXIePkDu2_Jp-bCqR_"
                        alt="Logo" data-type="logo" />
                    </span>
                    <span>
                    <h4 class="brand-text">Azdan - Careers</h4>

                    </span>
                    </div>
            
                </Col>
            </Row>
      
      </div>
      <div className="container-fluid p-0">
        
    <img className="advanced-index-banner w-100"
      src="https://1825026.app.netsuite.com/core/media/media.nl?id=4840&c=1825026&h=yfdd_3wep5hObZ8NcrfeEbtluxteroLelFgAvJpz3KOk9huA&fcts=20221123124939" />

      </div>

        </div>
    )
  }
  



// ! =============================>>>> fun App <<<<====================
const App = ()=>{



    return(
       <div className="container-fluid p-0">
    
            <Header />
            <Positions />
       </div>
    )
}



ReactDOM.render(<App />, document.querySelector('#root'));