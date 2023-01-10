//! =================>> Positions <==================
const Positions = ({ArrDepar ,work,location ,data}) =>{

    let [checkTgg ,setCheckTgg] = useState(true);
    const [newdata, setNewData] = useState(data)
    const [arrDepar, setArrDepar] = useState(ArrDepar)
    // console.log(newdata)
    useEffect(() => {

        const timer = setTimeout(()=>{
            let Res = GetData
        
            setNewData(Res)
     
        },1000);

     return () => clearTimeout( timer );
  }, []);


  
    
//   console.log(newdata)
  // console.log(work.map((x,e )=> e,x))

    const cliekclearBtn = (e) =>{
        let check = [...document.querySelectorAll(`.selection__clear`)].filter(el => el.getAttribute("data-select-id") == e.currentTarget.getAttribute("data-select-id"));
        // console.log(check.map(e => e.getAttribute("data-select-id")))
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
              
                setNewData(data)
                setArrDepar(ArrDepar)
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
                // console.log("mmmm")
                setNewData(data)
                setArrDepar(ArrDepar)
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
        let chekUl =  [...document.querySelectorAll(".selInp ul")].filter( e => e != document.querySelector(`${clas} ul`) ) 
        chekUl.map(e => e.classList.add("noShow"))
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
                    // if(!e.currentTarget.querySelector(".selection__clear ").classList.contains("show")){
                    // console.log("fff")
                    // }
                 let chekUl =  [...document.querySelectorAll(".selInp ul")].filter( el => el == e.currentTarget.querySelector("ul") ) 
                 chekUl.map(el => el.classList.remove("noShow"))
        }
      

     }


         // ! ====> falter input <======
    const valueSelect = (e) =>{

        if(!e.currentTarget.querySelector(".icon-tick").classList.contains("show")){
            e.currentTarget.querySelector(".icon-tick").classList.add("show");
            e.currentTarget.querySelector("h3").classList.add("font-weight-bold");
            e.currentTarget.querySelector("h3").style.fontSize = "0.9vw"
            e.currentTarget.querySelector("h3").style.color = "rgba(0, 0, 0)"
        }else{
            setNewData(data)
            setArrDepar(ArrDepar)
            //    GetData
            e.currentTarget.querySelector(".icon-tick").classList.remove("show");
            e.currentTarget.querySelector("h3").classList.remove("font-weight-bold");
            e.currentTarget.querySelector("h3").style.fontSize = "0.78vw"
            e.currentTarget.querySelector("h3").style.color = "rgba(0, 0, 0, 0.602)";
            // ()=> setNewData(GetData)
            
        }


   
        let valuable1 = document.querySelector(".sele1 #department").value;
        let valuable2 = document.querySelector(".sele2 #working").value;
        let valuable3 = document.querySelector(".sele3 #location").value;
        let checkCliekOut1 = [...document.querySelectorAll(`.sele1 li span`)]
        .map(el => el.classList.contains("show"));
        let checkCliekOut2 = [...document.querySelectorAll(`.sele2 li span`)]
        .map(el => el.classList.contains("show"));
        let checkCliekOut3 = [...document.querySelectorAll(`.sele3 li span`)]
        .map(el => el.classList.contains("show") );
        let clieckNow = e.currentTarget.querySelector("h3").innerHTML;
       
        let clieckNowInp = e.nativeEvent.path[2].classList[0];
       
    //  ! === > chcek on cleck now <==

        if(clieckNowInp == "sele1"){

            console.log("valuable2",valuable2)
            console.log("valuable2",valuable3)
            // console.log("checkCliekOut2",checkCliekOut2)
            if(valuable2.length != 0){
    
                console.log("work1")
                // console.log("checkCliekOut1",checkCliekOut1)
            }else{  //!====> input work Empty
    
                console.log("work2")
            }

            if(valuable3.length != 0){
    
                console.log("loc1",checkCliekOut3)
                for (let i = 0; i < checkCliekOut3.length; i++) {
                    if(checkCliekOut3[i] == true){

                       let elem =[...document.querySelectorAll(`.sele3 li `)][i].querySelector("h3").innerText ;
                      data = data.map(e => e.locationText == elem ? e : null).filter(e => e !== null)
                      
                console.log("data",data)
                      
                    //   console.log(e.currentTarget.querySelector("h3").innerHTML == "All")
                      if(e.currentTarget.querySelector("h3").innerHTML == "All"){
                      
                          
                          //   let filterDep = data.map(el => el.departmentT  ).filter(e => e!== null);
                          setNewData(data)
                          let ArrDep = [...new Set(data.map(e => e.departmentT ))];
                          
                        
                          setArrDepar(ArrDep)
           
                        }
                        else{
                          let filterDep = data.map(el => el.departmentT  === e.currentTarget.querySelector("h3").innerHTML ? el : null).filter(e => e!== null);
                          setNewData(filterDep)
                                  if(filterDep.length > 0){

                    //     //   console.log("filterDep",filterDep)
                            let ArrDep = [...new Set(filterDep.map(e => e.departmentT ))];
                        
                            setArrDepar(ArrDep)
                            }else{
                                setNewData([])

                                setArrDepar(false)
                            }
                      }
                     
                    //   if(filterDep.length > 0){

                    //     //   console.log("filterDep",filterDep)
                    //         let ArrDep = [...new Set(filterDep.map(e => e.departmentT ))];
                        
                    //         setArrDepar(ArrDep)
                    //   }else{
                    //     setNewData([])

                    //     setArrDepar(false)
                    //   }
                    }
                  }
                  
                // console.log("checkCliekOut1",checkCliekOut1)
            }else{  //!====> input location  Empty
                      let filterDep = data.map(el => el.departmentT  === e.currentTarget.querySelector("h3").innerHTML ? el : null).filter(e => e!== null)
                setNewData(filterDep)
                let ArrDep = [...new Set(filterDep.map(e => e.departmentT ))];
             
                    setArrDepar(ArrDep)
                
                console.log("loc2")
            }
        }



        // console.log(valuable2)
        // console.log(valuable3)
        // console.log(clieckNowInp)
        // console.log(clieckNow)
        // console.log("checkCliekOut",checkCliekOut.map(( e ,x)=> e == true ? x :e) )
        // console.log( "checkCliekOut2",checkCliekOut2)
        // console.log("checkCliekOut",checkCliekOut3)



    
     
  
        // console.log(e.currentTarget.querySelector("h3").innerHTML)
        
 
        let trgetClass = e.nativeEvent.path[2].classList[0];
        let check = [...document.querySelectorAll(`.${trgetClass} .icon-tick`)].filter(el => el.classList.contains("show"));
        let inputTrget = document.querySelector(`.${trgetClass} input`)
        if(check.length > 0){

            if(trgetClass == "sele1"){
               
                // let filterDep = data.map(el => el.departmentT  === e.currentTarget.querySelector("h3").innerHTML ? el : null).filter(e => e!== null)
                // setNewData(filterDep)
                // let ArrDep = [...new Set(filterDep.map(e => e.departmentT ))];
             
                //     setArrDepar(ArrDep)
                let checkLI = e.currentTarget.value;
        

                if( checkLI == 100){
                    // if(!e.currentTarget.querySelector(".icon-tick").classList.contains("show")){
                    //     console.log("nnn")
                    //     setNewData(GetData)
                    //     setArrDepar(ArrDepar)
                    // }else{
                    //     setNewData(GetData)
                    //     setArrDepar(ArrDepar)
                    // }
            

                    if(  document.querySelector(`.${trgetClass} ul li h3`).classList.contains("font-weight-bold")){
                        document.querySelector(`.${trgetClass} .selection__clear`).classList.add("show")
                    
                        inputTrget.value = `Department (${[...new Set(GetData.map(e => e.departmentT))].length})`;
                        [...document.querySelectorAll(`.${trgetClass} ul li `)].map(e => 
                            [
                                e.querySelector(".icon-tick").classList.add("show"),
                                e.querySelector("h3").classList.add("font-weight-bold"),
                                e.querySelector("h3").style.fontSize = "0.9vw",
                            e.querySelector("h3").style.color = "rgba(0, 0, 0)",
                        ]
                        
                        );
                    
                        
                    }else {
                        if(document.querySelector(`.${trgetClass} .selection__clear`).classList.contains("show")){
                            document.querySelector(`.${trgetClass} .selection__clear`).classList.remove("show");
            
                    };
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
                   
                    document.querySelector(`.${trgetClass} .selection__clear`).classList.add("show");
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
                
                // console.log( checkLI == e.currentTarget.value)
                

           
                // document.querySelector(`.${trgetClass} .selection__clear`).classList.add("show")
            }else if(trgetClass == "sele2"){


               
                    // console.log( document.querySelector("#department").value.length)
                    // console.log( e.currentTarget.querySelector("h3").innerHTML)
                    // console.log( e.currentTarget.value)

            //     if(document.querySelector("#department").value.length != 0){
            //         let valueworktype =e.currentTarget.value + 1;
            //         let checkInWork = [...document.querySelectorAll(".sele2 li span")]
            //         .map(e => e.classList.contains("show"))
            //         let checkIneDep = [...document.querySelectorAll(".sele1 li span")]
            //         .map(e => e.classList.contains("show"))

            //         console.log(checkIneDep[1])
            //         if(checkInWork[1] == true){

            //             let checkData =newdata.filter(e => e.reults.worktypeV == 1 )
            //             console.log(checkData)
            //             setNewData(checkData)
            //             let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];
              
            //                 setArrDepar(ArrDep)
            //         }else{
            //             let checkData =newdata.filter(e => e)
                        
            //             setNewData(checkData)
            //             let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];
              
            //                 setArrDepar(ArrDep)
            //         }
                    
            //         // if(valueworktype == 2){
            //         //     let checkData =newdata.filter(e => e.reults.worktypeV == 2)
            //         //     console.log("checkData",checkData.length)
            //         //     // console.log("newdata",newdata)
            //         //     if(checkData.length != 0){

            //         //         setNewData(checkData)
            //         //         let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];
                         
            //         //             setArrDepar(ArrDep)
            //         //     }else{
            //         //         setNewData([])
            //         //         setArrDepar(false)
            //         //     }
            //         //         // setNewData(data)
            //         //         // setArrDepar(ArrDepar)
            //         // }else{
            //         //     let filterDep = data.map(el => el.departmentT  === e.currentTarget.querySelector("h3").innerHTML ? el : null).filter(e => e!== null)
            //         //     setNewData(filterDep)
            //         //     let ArrDep = [...new Set(filterDep.map(e => e.departmentT ))];
                     
            //         //         setArrDepar(ArrDep)
                        
            //         //     // setNewData(data)

            //         // }
               
                    
                    
            //     }else{
            //         // let valueworktype =e.currentTarget.value + 1;
                 
            //         // .querySelector(".icon-tick").classList.contains("show")
            //         let checkInWork = [...document.querySelectorAll(".sele2 li span")].map(e => e.classList.contains("show"))
                   
                 
            //         if(checkInWork[0] == true){
            //             let checkData =newdata.filter(e => e.reults.worktypeV == 1)
            //             console.log(checkData)
                        
            //             setNewData(checkData)
            //             let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];
              
            //                 setArrDepar(ArrDep)
            //         }else{
            //             if(checkInWork[1] == true){
            //                 let checkData =newdata.filter(e => e.reults.worktypeV == 2)
            //        setNewData(checkData)
            //        let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];
         
            //        setArrDepar(ArrDep)

            //    }else{

            //        setNewData(data)
            //         setArrDepar(ArrDepar)
            //    }
            //         }
            //         if(checkInWork[1] == true){
            //                      let checkData =newdata.filter(e => e.reults.worktypeV == 2)
            //             setNewData(checkData)
            //             let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];
              
            //             setArrDepar(ArrDep)

            //         }else{
            //             if(checkInWork[0] == true){
            //                 let checkData =newdata.filter(e => e.reults.worktypeV == 1)
            //                 console.log(checkData)
                            
            //                 setNewData(checkData)
            //                 let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];
                  
            //                     setArrDepar(ArrDep)
            //             }else{

            //                 setNewData(data)
            //                 setArrDepar(ArrDepar)
            //             }
            //         }
            //         if(checkInWork[0] == true && checkInWork[1] == true){
            //             setNewData(data)
            //             setArrDepar(ArrDepar)

            //         }
            //         // if(valueworktype == "Full-Time"){
                       
            //         // }
            //         //  if(valueworktype == "Part-Time"){
            //         //     let checkData =newdata.filter(e => e.reults.worktypeV == 2)
            //         //     setNewData(checkData)
            //         //     let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];
              
            //         //     setArrDepar(ArrDep)
            //         // }else{
                        
            //         //     setNewData(data)

            //         // }

                    
            //         // console.log(data.filter(e => e.reults.worktypeT == e.currentTarget.querySelector("h3").innerHTML))
            //     }
        
             
            
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

    return(
        <React.Fragment >

            <div className="container">

                <div className="title_job mt-4">
                    <h3 >Open Positions</h3>
                </div>

                <div className="dis_moible container col-12 d-flex justify-content-start align-content-center p-0 mt-4 mb-3 flex-row flex-lg-row flex-md-column  flex-sm-column">

                    <div className="AllSelect  col-md-12  col-lg-9 pl-0 flex-md-row flex-sm-nowrap  flex-lg-nowrap">

                        <div onClick={ (e)=>clickInpCleseUL(e)} className="sele1 select1 selInp mt-md-0  mr-2 px-0 mt-sm-2">

                              <span className="arow Amaro"></span>
                               <span onClick={(e)=>cliekclearBtn(e)} className="select1-selection__clear selection__clear" title="Remove all items" data-select-id="1">×</span>
                                <input placeholder="Choose Department" onClick={(e)=> hindlerArowInp(".select1")}  type="text"  name="" id="department" className="department pl-3" />

                                <ul onMouseLeave={(e)=>closeUl(e)} className="sele1 noShow">
                                <li onClick={ (e) => valueSelect(e)} key={100}  value={100}>
                                         <h3 >All</h3>
                                         <span class="icon-tick">
                                            <svg width="16" height="12"viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                                fill="#183247">
                                                </path>
                                            </svg>
                                        </span>
                                         </li>
                                {ArrDepar.length > 0 ? ArrDepar.map((el ,index)=> 

                            
                                    <li onClick={ (e) => valueSelect(e)} key={index}  value={index}>
                                         <h3 >{el}</h3>
                                         <span class="icon-tick">
                                            <svg width="16" height="12"viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                                fill="#183247">
                                                </path>
                                            </svg>
                                        </span>
                                         </li>
                                               ) : null} 

                                    {/* <li onClick={ (e) => valueSelect(e)} value="2">
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
                                    </li> */}
                              
                                </ul>
                        </div>

                        <div onClick={ (e)=>clickInpCleseUL(e)} className="sele2 select2 selInp m-md-0 mt-sm-2 w-auto   mr-2 px-0">
                                <span className="arow Amaro"></span>
                                          <span onClick={ (e) => cliekclearBtn(e)} className="select2-selection__clear selection__clear" title="Remove all items" data-select-id="2">×</span>

                                            <input placeholder="Choose Work Type" onClick={()=> hindlerArowInp(".select2")} type="text"   name="" id="working" className="working pl-3" />

                                            <ul onMouseLeave={(e)=>closeUl(e)} className="sele2 noShow">
                                                {work.length ? work.map(( el ,index)=>
                                                    
                                                <li onClick={ (e) => valueSelect(e)} key={index}  value={index}>
                                                    <h3>{el}</h3>
                                                    <span class="icon-tick">
                                                        <svg  viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                                            fill="#183247">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    </li>
                                                    ) : null}

                                            
                                            </ul>

                            
                        </div>

                        <div onClick={ (e)=>clickInpCleseUL(e)} className="sele3 select3 selInp m-md-0 mt-sm-2    mr-2 pr-0 pl-md-2 pl-sm-0">
                        <span className="arow Amaro"></span>

                                <span onClick={ (e) => cliekclearBtn(e)} className="select3-selection__clear selection__clear" title="Remove all items" data-select-id="3">×</span>
                                <input placeholder="Choose Location" onClick={()=> hindlerArowInp(".select3")}  type="text"  name="" id="location" className="location pl-3" />

                                <ul onMouseLeave={(e)=>closeUl(e)} className="sele3 noShow" style={{zIndex:9}}>
                                      {location.length > 0 ? location.map((el ,index) => (

                                    <li onClick={ (e) => valueSelect(e)} key={index}  value={index}>
                                        <h3>{el}</h3>
                                        <span class="icon-tick ">
                                            <svg  viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                                fill="#183247">
                                                </path>
                                            </svg>
                                        </span>
                                    </li>
                            
                                      ) ): null}                  
                            
                                </ul>


                                
                        </div>

                    </div>

                    <div className="toggle-and-clear mt-sm-5 col-xl-3 col-lg-2 col-md-12 col-sm-12 ml-3 justify-content-sm-start justify-content-md-start p-0 mt-lg-0 mt-sm-2">

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
            <ContainerUl arrDepar={arrDepar} ArrDepar={ArrDepar} data={newdata} />

        </React.Fragment>
    )

}

export default  Positions