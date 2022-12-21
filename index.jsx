
const {Card, Button, Container, Form,  Nav,  Navbar, Row ,Col } = ReactBootstrap;
const { useState ,useEffect } = React ;


const LinkOpenJob = () =>{

    return(
        
        
        <React.Fragment>
            
                  
        <a  className="heading show" data-portal-title="seniorfinancialanalyst" data-portal-location="Cairo, Egypt" data-portal-job-type="2" data-portal-remote-location="false">
           
            <div className="info d-flex justify-content-between align-content-center flex-nowrap col-12">

              <div className="jobInfo col-8">
                <div className="job_title">ERP Project Manager </div>

                <div className="job_desc">
                Job Summary Azdan ERP Project manager develops, plans,
                 and implements successful planning and execution of Oracle NetSuite project, he/she makes decisions that directly benefit the project, contr...
                </div>

              </div>

              <div className="job-location col-2">
                <div className="location-info">
                Remote
                    
                  <br />
                  Full Time
                </div>

                <div className="location-icon">
                <i class="fas fa-chevron-right"></i>
                </div>

              </div>

            </div>
        </a>

        <a  className="heading show" data-portal-title="seniorfinancialanalyst" data-portal-location="Cairo, Egypt" data-portal-job-type="2" data-portal-remote-location="false">
           
            <div className="info d-flex justify-content-between align-content-center flex-nowrap col-12">

              <div className="jobInfo col-8">
                <div className="job_title">NetSuite Principle Consultant (Remote)</div>

                <div className="job_desc">
                Job Summary  The role of the NetSuite Principle Consultant understands solutions,
                 industry best practices, multiple business processes, or technology designs within a product/technology fam...
                </div>

              </div>

              <div className="job-location col-2">
                <div className="location-info">
                Remote
                    
                  <br />
                  Full Time
                </div>

                <div className="location-icon">
                <i class="fas fa-chevron-right"></i>
                </div>

              </div>

            </div>
        </a>
      
        <div class="no-jobs-found" data-portal-id="no_data" >
                <div class="no-jobs-icon">
                 <i class="icon-my-job"></i> 
                <i class="fas fa-briefcase "></i>
                </div>
                <div class="not-found-title">No jobs found</div>
                <p>Oops, you have no jobs that match the filter conditions.</p>
                <p>Try refining your search.</p>
      </div>

            </React.Fragment>
                
    
      
    
      
    
    )
}


// ! ============>>> one job <<<============
const OneJob = () => {

    return(
        <React.Fragment >

            <li>

            <div className="role-title">
           
              <h5>
              Service Delivery
                {/* <span className="mobile-role-count">
                   <span data-portal-id="mobile-jobs-count">1</span>
                  <span data-portal-job-count="single-job">Open Role</span>
                  <span data-portal-job-count="multiple-job" >Open Roles</span>
                </span> */}
              </h5>
              <div className="role-count">
                <span className="jobs-count pl-1 pr-2">2</span>
                {/* <span data-portal-job-count="single-job">Open Role</span> */}
                <span className="multiple-job" >Open Roles</span>
              </div>
            </div>
            <div className="job-list">

                <LinkOpenJob />
                {/* <LinkOpenJob /> */}
            </div>

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
                    {/* <OneJob /> */}
                </ul>
            </div>
    </React.Fragment>
    )
}




//! =================>> Positions <==================
const Positions = () =>{

    let [checkTgg ,setCheckTgg] = useState(true);

    const cliekclearBtn = (e) =>{
        let check = [...document.querySelectorAll(`.selection__clear`)].filter(el => el.getAttribute("data-select-id") == e.currentTarget.getAttribute("data-select-id"));
        console.log(check.map(e => e.getAttribute("data-select-id")))
        let getValueAttr = check.map(e => e.getAttribute("data-select-id"))

        if(getValueAttr == 1){
     
            document.querySelector(`.sele1 .selection__clear`).classList.remove("show");
            document.querySelector(`.sele1 input`).value=``;
            document.querySelector(`.sele1 ul`).classList.add("noShow");
            [...document.querySelectorAll(`.sele1  .icon-tick`)].filter(el => el.classList.remove("show"));
            [...document.querySelectorAll(`.sele1  ul li h3`)].filter(el => 
                [
                    el.classList.remove("font-weight-bold"),
                    el.style.fontSize = "0.78vw",
                    el.style.color = "rgba(0, 0, 0, 0.602)"
                ]);
        }else if(getValueAttr == 2){
            document.querySelector(`.sele2 .selection__clear`).classList.remove("show");
            document.querySelector(`.sele2 input`).value=``;
            document.querySelector(`.sele2 ul`).classList.add("noShow");
            [...document.querySelectorAll(`.sele2  .icon-tick`)].filter(el => el.classList.remove("show"));
            [...document.querySelectorAll(`.sele2  ul li h3`)].filter(el => 
                [
                    el.classList.remove("font-weight-bold"),
                    el.style.fontSize = "0.78vw",
                    el.style.color = "rgba(0, 0, 0, 0.602)"
                ]);
        }else if(getValueAttr == 3){
            document.querySelector(`.sele3 .selection__clear`).classList.remove("show");
            document.querySelector(`.sele3 input`).value=``;
            document.querySelector(`.sele3 ul`).classList.add("noShow");
            [...document.querySelectorAll(`.sele3  .icon-tick`)].filter(el => el.classList.remove("show"));
            [...document.querySelectorAll(`.sele3  ul li h3`)].filter(el => 
                [
                    el.classList.remove("font-weight-bold"),
                    el.style.fontSize = "0.78vw",
                    el.style.color = "rgba(0, 0, 0, 0.602)"
                ]);
        }
    }

    // ! Arow input <====
    const hindlerArowInp =(clas)=>{
        // let chekUl =  [...document.querySelectorAll(".selInp ul")].filter( e => e != document.querySelector(`${clas} ul`) ) 
        // chekUl.map(e => e.classList.add("noShow"))
        // let chekUl2 =  [...document.querySelectorAll(".selInp ul")].filter( e => e == document.querySelector(`${clas} ul`) ) 
        // chekUl2.map(e => e.classList.remove("noShow"))
        
        
        if(! document.querySelector(`${clas} .arow`).classList.contains("openInput")){
           
   
            document.querySelector(`${clas} .arow`).classList.remove("Amaro");
            document.querySelector(`${clas} .arow`).classList.add("openInput");
     

    }else{
         
            document.querySelector(`${clas} .arow`).classList.add("Amaro")
            document.querySelector(`${clas} .arow`).classList.remove("openInput")
        }


      
    }

    // ! ====> falter input <======
    const valueSelect = (e) =>{
 
        // console.log(e.currentTarget)
        
        if(!e.currentTarget.querySelector(".icon-tick").classList.contains("show")){
            e.currentTarget.querySelector(".icon-tick").classList.add("show");
            e.currentTarget.querySelector("h3").classList.add("font-weight-bold");
            e.currentTarget.querySelector("h3").style.fontSize = "0.9vw"
            e.currentTarget.querySelector("h3").style.color = "rgba(0, 0, 0)"
        }else{
          
            e.currentTarget.querySelector(".icon-tick").classList.remove("show");
            e.currentTarget.querySelector("h3").classList.remove("font-weight-bold");
            e.currentTarget.querySelector("h3").style.fontSize = "0.78vw"
            e.currentTarget.querySelector("h3").style.color = "rgba(0, 0, 0, 0.602)";
        }

        let trgetClass = e.nativeEvent.path[2].classList[0];
        let check = [...document.querySelectorAll(`.${trgetClass} .icon-tick`)].filter(el => el.classList.contains("show"));
        let inputTrget = document.querySelector(`.${trgetClass} input`)
        if(check.length > 0){

            if(trgetClass == "sele1"){
               
                let checkLI = e.currentTarget.value;
            
            if( checkLI == 1){

                if(  document.querySelector(`.${trgetClass} ul li h3`).classList.contains("font-weight-bold")){

                    inputTrget.value = `Department (${2})`;
                [...document.querySelectorAll(`.${trgetClass} ul li `)].map(e => 
                    [
                        e.querySelector("h3").classList.add("font-weight-bold"),
                        e.querySelector("h3").style.fontSize = "0.9vw",
                        e.querySelector("h3").style.color = "rgba(0, 0, 0)",
                        e.querySelector(".icon-tick").classList.add("show")
                    ]
                    
                    )
                }else {
                    inputTrget.value = ``;
                    [...document.querySelectorAll(`.${trgetClass} ul li `)].map(e => 
                        [
                            e.querySelector("h3").classList.remove("font-weight-bold"),
                            e.querySelector("h3").style.fontSize =  "0.78vw",
                            e.querySelector("h3").style.color = "rgba(0, 0, 0, 0.602",
                            e.querySelector(".icon-tick").classList.remove("show")
                        ]
                        
                        )
                }
            }else if(checkLI == e.currentTarget.value){
                [...document.querySelectorAll(`.${trgetClass} ul li `)].map(e => 
                    [
                        e.querySelector(".icon-tick").classList.remove("show"),
                        inputTrget.value = ``,
                        e.querySelector("h3").classList.remove("font-weight-bold"),
                        e.querySelector("h3").style.fontSize =  "0.78vw",
                        e.querySelector("h3").style.color = "rgba(0, 0, 0, 0.602",
                    ]
                    
                    )
                    e.currentTarget.querySelector(".icon-tick").classList.add("show");
                    e.currentTarget.querySelector("h3").classList.add("font-weight-bold");
                    e.currentTarget.querySelector("h3").style.fontSize = "0.9vw"
                    e.currentTarget.querySelector("h3").style.color = "rgba(0, 0, 0)"
                    inputTrget.value = `Department (${1 })`
            }
            // else{

            // }
                // document.querySelector(`.${trgetClass} .selection__clear`).classList.add("show")
            }else if(trgetClass == "sele2"){
                
                inputTrget.value = `Work Type  (${check.length})`;
                document.querySelector(`.${trgetClass} .selection__clear`).classList.add("show")
            }else if(trgetClass == "sele3"){
                inputTrget.value = `Location (${check.length})`;
                document.querySelector(`.${trgetClass} .selection__clear`).classList.add("show")

                }

            inputTrget.style.color = "#000"

        }else{
            inputTrget.value = ``;
            document.querySelector(`.${trgetClass} .selection__clear`).classList.remove("show")
        }


    }

         // ! ****************===> function toggle BTN <===*****************
    const buttonRomtle = (e) =>{
          
                if(checkTgg) {
                    
          
                    
                    document.querySelector(".select3").style.display = "none";
                    document.querySelector("#clear-text").style.display = "block";
                    [...document.querySelectorAll(".selInp")].map(el =>
                        [ el.classList.add("col-6"),
                            el.style.paddingLeft= 0,
                            el.querySelector("input").value="",
                            el.querySelector("ul").classList.add("noShow"),
                            el.querySelector(".selection__clear").classList.remove("show"),
                        
                        ]
                         );
                         [...document.querySelectorAll(".selInp ul li")].map(el => 
                            [
                                el.querySelector(" .icon-tick").classList.remove("show"),
                                el.querySelector(" h3").style.fontSize = "0.78vw",
                                el.querySelector(" h3").classList.remove("font-weight-bold"),
                                el.querySelector(" h3").style.color = "rgba(0, 0, 0, 0.602)",
                            ]
                            
                           )
                    document.querySelector(".AllSelect").classList.remove("pl-1")
                    document.querySelector(".AllSelect").classList.add("pl-0")
                } else{
                    [...document.querySelectorAll(".selInp")].map(el =>
                        [ el.classList.add("col-6"),
                            el.style.paddingLeft= 0,
                            el.querySelector("ul").classList.add("noShow"),
                            el.querySelector("input").value="",
                            el.querySelector(".selection__clear").classList.remove("show"),
                    
                        ]
                         );
                         [...document.querySelectorAll(".selInp ul li")].map(el => 
                            [
                                el.querySelector(" .icon-tick").classList.remove("show"),
                                el.querySelector(" h3").style.fontSize = "0.78vw",
                                el.querySelector(" h3").classList.remove("font-weight-bold"),
                                el.querySelector(" h3").style.color = "rgba(0, 0, 0, 0.602)",
                            ]
                            
                           )
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
         document.querySelector(".toggle-btn").checked = false;

        [...document.querySelectorAll(".selInp")].map(el =>
            [ el.classList.add("col-6"),
                el.style.paddingLeft= 0,
                el.querySelector("ul").classList.add("noShow"),
                el.querySelector("input").value="",
                el.querySelector(".selection__clear").classList.remove("show"),
        
            ]
             );
             [...document.querySelectorAll(".selInp ul li")].map(el => 
                [
                    el.querySelector(" .icon-tick").classList.remove("show"),
                    el.querySelector(" h3").style.fontSize = "0.78vw",
                    el.querySelector(" h3").classList.remove("font-weight-bold"),
                    el.querySelector(" h3").style.color = "rgba(0, 0, 0, 0.602)",
                ]
                
               )
        document.querySelector(".AllSelect").classList.remove("pl-0")
        document.querySelector(".AllSelect").classList.add("pl-1")
        document.querySelector("#clear-text").style.display = "none";
        document.querySelector(".select3").style.display = "block";
        [...document.querySelectorAll(".selInp")].map(e => e.classList.remove("col-6"))   

      
        return setCheckTgg(!checkTgg);
     }

    // ! *************** ===>>  function close  ul out mos <<==== ************
    const closeUl = (e) =>{ e.currentTarget.classList.add("noShow")}


     const clickInpCleseUL = (e)=>{
    

         if(!e.currentTarget.querySelector("ul").classList.contains("noShow")){
         
             e.currentTarget.querySelector("ul").classList.add("noShow")

                }
                else{
              
                 let chekUl =  [...document.querySelectorAll(".selInp ul")].filter( el => el == e.currentTarget.querySelector("ul") ) 
                 chekUl.map(el => el.classList.remove("noShow"))
        }
      

     }

    return(
        <React.Fragment >

            <div className="container">

                <div className="title_job mt-4">
                    <h3 >Open Positions</h3>
                </div>

                <div className="container col-12 d-flex justify-content-start align-content-center p-0 mt-4 mb-3 flex-row flex-lg-row flex-md-column  flex-sm-column">

                    <div className="AllSelect  col-md-12  col-lg-9 pl-0 flex-md-row flex-sm-nowrap  flex-lg-nowrap">

                        <div onClick={ (e)=>clickInpCleseUL(e)} className="sele1 select1 selInp mt-md-0  mr-2 px-0 mt-sm-2">

                              <span className="arow Amaro"></span>
                               <span onClick={(e)=>cliekclearBtn(e)} className="select1-selection__clear selection__clear" title="Remove all items" data-select-id="1">×</span>
                                <input placeholder="Choose Department" onClick={()=> hindlerArowInp(".select1")}  type="text"  name="" id="department" className="department pl-3" />

                                <ul onMouseLeave={(e)=>closeUl(e)} className="sele1 noShow">

                            
                                    <li onClick={ (e) => valueSelect(e)}  value="1">
                                         <h3 >All</h3>
                                         <span class="icon-tick">
                                            <svg width="16" height="12"viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                                fill="#183247">
                                                </path>
                                            </svg>
                                        </span>
                                         </li>

                                    <li onClick={ (e) => valueSelect(e)} value="2">
                                        <h3>Finance</h3>
                                        <span class="icon-tick">
                                            <svg viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                                fill="#183247">
                                                </path>
                                            </svg>
                                        </span>
                                     </li>

                                    <li onClick={ (e) => valueSelect(e)} value="3">
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

                        <div onClick={ (e)=>clickInpCleseUL(e)} className="sele2 select2 selInp m-md-0 mt-sm-2 w-auto   mr-2 px-0">
                                <span className="arow Amaro"></span>
                                          <span onClick={ (e) => cliekclearBtn(e)} className="select2-selection__clear selection__clear" title="Remove all items" data-select-id="2">×</span>

                                            <input placeholder="Choose Work Type" onClick={()=> hindlerArowInp(".select2")} type="text"   name="" id="working" className="working pl-3" />

                                            <ul onMouseLeave={(e)=>closeUl(e)} className="sele2 noShow">


                                                <li onClick={ (e) => valueSelect(e)}  value="1">
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

                        <div onClick={ (e)=>clickInpCleseUL(e)} className="sele3 select3 selInp m-md-0 mt-sm-2    mr-2 pr-0 pl-md-2 pl-sm-0">
                        <span className="arow Amaro"></span>

                                <span onClick={ (e) => cliekclearBtn(e)} className="select3-selection__clear selection__clear" title="Remove all items" data-select-id="3">×</span>
                                <input placeholder="Choose Location" onClick={()=> hindlerArowInp(".select3")}  type="text"  name="" id="location" className="location pl-3" />

                                <ul onMouseLeave={(e)=>closeUl(e)} className="sele3 noShow" style={{zIndex:9}}>

                            
                                    <li onClick={ (e) => valueSelect(e)}   value="1">
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

                    <div className="toggle-and-clear col-xl-3 col-lg-2 col-md-12 col-sm-12 ml-3 justify-content-sm-start justify-content-md-start p-0 mt-lg-0 mt-sm-2">

                        <div className="remote-toggle col-xl-5  col-lg-8 col-md-6 col-sm-6 p-0">
                            <span className="mt-md-2 mt-sm-2 mt-lg-1 col-xl-10 col-lg-8 col-md-7 p-0 ">Remote Only</span>

                            <div className="toggle-switch  col-lg-5 p-0 col-md-5">
                                <input name=" [remote]" type="hidden" value="0"/>
                                <input onClick={(e) =>buttonRomtle(e) } className="toggle-btn" type="checkbox" value="1"name=" [remote]" id="_remote" />
                                <label for="toggle-btn"></label>
                            </div>

                        </div>

                            <div className="clear-text ml-xl-4 col-xl-3 col-md-3 p-0 ml-1" id="clear-text" >
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