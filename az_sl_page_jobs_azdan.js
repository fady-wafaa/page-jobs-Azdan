/**
 *@NApiVersion 2.1
 *@NScriptType Suitelet
 */
 define(["N/file","N/search"], (file,search) =>{


    // ! log debug public in script
   var g = log.debug.bind();

    const onRequest = (context)=> {
        try {
            var request = context.request;
            var response = context.response;
            if (request.method == "GET"){


                // ! ==> get Saved Search Open Positions <==
                let getSvdSrch = search.load({
                    id: "customsearch_search_open_positions",
                });
                //! ===> getRange 100 because I don't need to search and take time <===
                let searchResult = getSvdSrch.run().getRange(0,100);
              
                let result = []
                let lengthArr = searchResult.length
            // ! ==> for loop  in get data search <===
                for (let i = 0; i < lengthArr; i++) {
                    let id = searchResult[i].getValue("internalid");
                    let title = searchResult[i].getValue("name");
                    let locationText = searchResult[i].getText("custrecord_az_hcm_op_location");
                    let locationValue = searchResult[i].getValue("custrecord_az_hcm_op_location");
                    let remote = searchResult[i].getValue("custrecord_az_hcm_op_remote");
                    let worktypeT = searchResult[i].getText("custrecord_az_hcm_op_worktype");
                    let worktypeV = searchResult[i].getValue("custrecord_az_hcm_op_worktype");
                    let departmentT = searchResult[i].getText("custrecord_az_hcm_op_department");
                    let descriptionT= searchResult[i].getValue("custrecord_az_hcm_op_description");
                   
                   
                    let responsibilities = searchResult[i].getValue("custrecord_az_hcm_op_responsibilities");
                    let requirements = searchResult[i].getValue("custrecord_az_hcm_op_requirements");
                    // let requirementsT = searchResult[i].getText("custrecord_az_hcm_op_requirements");
                    // g("requirementsT",requirements)
                    result.push({

                        "departmentT":departmentT,
                        "id":id,
                        "remote":remote,
                        "worktypeV":worktypeV,
                        "locationText":locationText,
                        
                        "reults":{
                        "id":id,
                        "title":title,
                        "descriptionT":descriptionT,
                        "locationText":locationText,
                        "locationValue":locationValue,
                        "remote":remote,
                        "worktypeT":worktypeT,
                        "worktypeV":worktypeV,
                        "departmentT":departmentT,
                        "responsibilities":String(responsibilities),
                        "requirements":String(requirements),
                        // "requirementsT":requirementsT
                    }
                    }
                    )
                    
                }

            //    g("result", JSON.stringify(result[1].requirements))

                let reactPage = file.load({
                    id: "SuiteScripts/jobs_Open_in_React/Open_Positions_React.html",
                  });

                        let content = reactPage.getContents();

                        setTimeNet(result,content,response)

                    // response.write(content );

            }

        } catch (e) {g("onRequest",e)}
    }

    // ! ===> FUN Working Delay displaying a site and sending data to a site <=== 
const  setTimeNet =(res,content,response)=> { //seconds
        try {
            let endTime = new Date().getTime() + 100;
            let now = null;
            do {
        
                now = new Date().getTime(); 
            
            } while (now < endTime){
                let arr = res.map(el=> JSON.stringify(el))
                // let arr = res.map(el=> String(el))
            
       
                let data = content.replace("/* arrData */",arr  ); //! ===> send date to  html <===
                //  data = data.replace("/*result.lengt*/",res.length  ); //! ===> send date to  html <===
                    
                    response.write(data );
                  };
                } catch (e) {
                  g("ERROR", e);
                }
              }

    return {
        onRequest: onRequest
    }
});
