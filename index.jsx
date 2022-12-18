
const {Card, Button, Container, Form,  Nav,  Navbar, Row ,Col } = ReactBootstrap;
// const { useState ,useEffect } = React ;






//! =================>> Positions <==================
const Positions = () =>{

    const hindlerArowInp =(clas)=>{
        if(! document.querySelector(`${clas} .arow`).classList.contains("openInput")){

            document.querySelector(`${clas} .arow`).classList.remove("Amaro")
            document.querySelector(`${clas} .arow`).classList.add("openInput")
            document.querySelector(`${clas} ul`).classList.remove("noShow")
        }else{
            document.querySelector(`${clas} ul`).classList.add("noShow")
            document.querySelector(`${clas} .arow`).classList.add("Amaro")
            document.querySelector(`${clas} .arow`).classList.remove("openInput")
        }
    }
    const myStyle = {
     
        opacity:0,
        fontSize:"0.8vw",
        fontFamily: "Sans-Serif"
      };
    return(
        <React.Fragment >

            <div className="container">

                <div className="title_job mt-4">
                    <h3 >Open Positions</h3>
                </div>

                <div className="container d-flex justify-content-center align-content-center p-0 mt-4 mb-3">

                    <div className="AllSelect ">

                        <div className="select1 selInp">

                        <span className="arow Amaro"></span>
                    
                                <input placeholder="Choose Department" onClick={()=> hindlerArowInp(".select1")}  type="search"  name="" id="department" className="department" />

                                <ul className="noShow">

                            
                                    <li value="1"> <h3>All</h3></li>
                                    <li value="2"><h3>Finance</h3></li>
                                    <li value="3"><h3>Service Delivery</h3></li>
                                </ul>
                        </div>

                        <div className="select2 selInp">
                                <span className="arow Amaro"></span>
                                
                                            <input placeholder="Choose Work Type" onClick={()=> hindlerArowInp(".select2")} type="search"   name="" id="working" className="working" />

                                            <ul className="noShow">


                                                <li  value="1">Full Time</li>
                                            
                                            </ul>

                            
                        </div>

                        <div className="select3 selInp">
                        <span className="arow Amaro"></span>
                                <input placeholder="Choose Location" onClick={()=> hindlerArowInp(".select3")}  type="search"  name="" id="location" className="location" />

                                <ul className="noShow" style={{zIndex:9}}>

                            
                                    <li  value="1">Cairo,Egypt</li>
                            
                                </ul>


                                
                        </div>

                    </div>

                    <div className="toggle-and-clear ml-3">

                        <div className="remote-toggle">
                            <span>Remote Only</span>

                            <div className="toggle-switch">
                                <input name=" [remote]" type="hidden" value="0"/>
                                <input className="toggle-btn" type="checkbox" value="1"name=" [remote]" id="_remote" />
                                <label for="toggle-btn"></label>
                            </div>

                        </div>

                            <div className="clear-text" id="clear-text" >
                                <button>Clear</button>
                            </div>
                            
                    </div>

                </div>


            </div>

            <div className="container mb-3">
                    <div className="input-field">
                        <input className="search_input" type="text" id="job-title-search" placeholder="Search Job Title"  />
                        <i className="fas fa-search icon-search"></i>
                        <button className="close-icon" id="close-icon" >×</button>
                    </div>
            </div>

        </React.Fragment>
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