
const {Card, Button, Container, Form,  Nav,  Navbar, Row ,Col } = ReactBootstrap;
const { useState ,useEffect } = React ;


const LinkOpenJob = () =>{

    return(

        <div className="job-list">
        
                
                  
        <a  className="heading show" data-portal-title="seniorfinancialanalyst" data-portal-location="Cairo, Egypt" data-portal-job-type="2" data-portal-remote-location="false">
           
            <div className="info d-flex justify-content-between align-content-center flex-nowrap">
              <div className="jobInfo">
                <div className="job_title">Senior Financial Analyst</div>

                <div className="job_desc">
                  The Financial analyst is responsible for tracking Azdan's financial performance against a plan, analyzing business performance and market conditions to create forecasts, and helping senior management ...
                </div>

              </div>

              <div className="job-location">
                <div className="location-info">
                  
                    
                      Cairo, Cairo Governorate
                    
                  <br />
                  Full Time
                </div>

                <div className="location-icon">
                <i class="fas fa-chevron-right"></i>
                </div>

              </div>

            </div>
        </a>
      
    
      
    
      
    
  </div>
    )
}


// ! ============>>> one job <<<============
const OneJob = () => {

    return(
        <React.Fragment >

            <li>

            <div className="role-title">
           
              <h5>
                Finance
                {/* <span className="mobile-role-count">
                   <span data-portal-id="mobile-jobs-count">1</span>
                  <span data-portal-job-count="single-job">Open Role</span>
                  <span data-portal-job-count="multiple-job" >Open Roles</span>
                </span> */}
              </h5>
              <div className="role-count">
                <span className="jobs-count pl-1 pr-2">1</span>
                {/* <span data-portal-job-count="single-job">Open Role</span> */}
                <span className="multiple-job" >Open Roles</span>
              </div>
            </div>

                <LinkOpenJob />

            </li>


        </React.Fragment>
    )
}

// ! ===============>> UL Array <==> jobs <<=======
const ContainerUl = () => {

    return(
        <React.Fragment >
            <div className="container">

                <ul className="ul">
                    <OneJob />
                    <OneJob />
                </ul>
            </div>
    </React.Fragment>
    )
}


//! =================>> Positions <==================
const Positions = () =>{

    let [checkTgg ,setCheckTgg] = useState(true)

    // ! Arow input <====
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


         // ! ****************===> function toggle BTN <===*****************
    const buttonRomtle = (e) =>{
          
                if(checkTgg) {
                    
          
                    
                    document.querySelector(".select3").style.display = "none";
                    document.querySelector("#clear-text").style.display = "block";
                    [...document.querySelectorAll(".selInp")].map(e =>
                        [ e.classList.add("col-6"),
                            e.style.paddingLeft= 0,
                            e.querySelector("input").value=""]
                         )
                    document.querySelector(".AllSelect").classList.remove("pl-1")
                    document.querySelector(".AllSelect").classList.add("pl-0")
                } else{
                    [...document.querySelectorAll(".selInp")].map(e => e.querySelector("input").value="" )  ;
                    document.querySelector(".AllSelect").classList.remove("pl-0")
                    document.querySelector(".AllSelect").classList.add("pl-1")
                    document.querySelector("#clear-text").style.display = "none";
                    document.querySelector(".select3").style.display = "block";
                    [...document.querySelectorAll(".selInp")].map(e => e.classList.remove("col-6"))                    // setCheckTgg = false;
                }
               
        
            return setCheckTgg(!checkTgg);
        
     }
     
        // ! ****************===> function Clean Button <===*****************
     const CleanButton = () =>{
        document.querySelector(".AllSelect").classList.remove("pl-0")
        document.querySelector(".AllSelect").classList.add("pl-1")
        document.querySelector("#clear-text").style.display = "none";
        document.querySelector(".select3").style.display = "block";
        [...document.querySelectorAll(".selInp")].map(e => e.querySelector("input").value="" )  ;
        [...document.querySelectorAll(".selInp")].map(e => e.classList.remove("col-6"))  
        document.querySelector(".toggle-btn").checked = false;
        return setCheckTgg(!checkTgg);
     }

    return(
        <React.Fragment >

            <div className="container">

                <div className="title_job mt-4">
                    <h3 >Open Positions</h3>
                </div>

                <div className="container d-flex justify-content-center align-content-center p-0 mt-4 mb-3 flex-lg-row flex-md-column flex-sm-column">

                    <div className="AllSelect col-md-12 col-sm-12  col-lg-9 pl-0">

                        <div className="select1 selInp ">

                        <span className="arow Amaro"></span>
                    
                                <input placeholder="Choose Department" onClick={()=> hindlerArowInp(".select1")}  type="search"  name="" id="department" className="department" />

                                <ul className="noShow">

                            
                                    <li value="1">
                                         <h3>All</h3>
                                         <span class="icon-tick">
                                            <svg width="16" height="12"viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                                fill="#183247">
                                                </path>
                                            </svg>
                                        </span>
                                         </li>
                                    <li value="2">
                                        <h3>Finance</h3>
                                        <span class="icon-tick">
                                            <svg viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                                fill="#183247">
                                                </path>
                                            </svg>
                                        </span>
                                     </li>
                                    <li value="3">
                                        <h3>Service Delivery</h3>
                                        <span class="icon-tick">
                                            <svg viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                                fill="#183247">
                                                </path>
                                            </svg>
                                        </span>
                                    </li>
                                </ul>
                        </div>

                        <div className="select2 selInp">
                                <span className="arow Amaro"></span>
                                
                                            <input placeholder="Choose Work Type" onClick={()=> hindlerArowInp(".select2")} type="search"   name="" id="working" className="working" />

                                            <ul className="noShow">


                                                <li  value="1">
                                                    <h3>Full Time</h3>
                                                    <span class="icon-tick">
                                                        <svg  viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                                            fill="#183247">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    </li>
                                            
                                            </ul>

                            
                        </div>

                        <div className="select3 selInp">
                        <span className="arow Amaro"></span>
                                <input placeholder="Choose Location" onClick={()=> hindlerArowInp(".select3")}  type="search"  name="" id="location" className="location" />

                                <ul className="noShow" style={{zIndex:9}}>

                            
                                    <li  value="1">
                                        <h3>Cairo,Egypt</h3>
                                        <span class="icon-tick ">
                                            <svg  viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                                fill="#183247">
                                                </path>
                                            </svg>
                                        </span>
                                    </li>
                            
                                </ul>


                                
                        </div>

                    </div>

                    <div className="toggle-and-clear col-lg-3 col-md-12 col-sm-12 ml-3">

                        <div className="remote-toggle">
                            <span className="mt-md-2 mt-sm-2 mt-lg-1">Remote Only</span>

                            <div className="toggle-switch">
                                <input name=" [remote]" type="hidden" value="0"/>
                                <input onClick={(e) =>buttonRomtle(e) } className="toggle-btn" type="checkbox" value="1"name=" [remote]" id="_remote" />
                                <label for="toggle-btn"></label>
                            </div>

                        </div>

                            <div className="clear-text" id="clear-text" >
                                <button onClick={() => CleanButton()} >Clean</button>
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
            <ContainerUl />
       </div>
    )
}



ReactDOM.render(<App />, document.querySelector('#root'));