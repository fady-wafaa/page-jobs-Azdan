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
            // let params = request.parameters;
            if (request.method == "GET"){
             

                // ! ==> get Saved Search Open Positions <==
                let getSvdSrch = search.load({
                    id: "customsearch_search_open_positions_2",
                });

                //     if (params.department) {
                //     getSvdSrch.filters.push(
                //       search.createFilter({
                //         name: "custrecord_az_hcm_op_department",
                        
                //         operator: search.Operator.IS,
                //         values: params.department,
                //       })
                //     );
                    
                // };
                
                //      if (params.worktype) {
                //     getSvdSrch.filters.push(
                //        search.createFilter({
                //          name: "custrecord_az_hcm_op_worktype",
                         
                //          operator: search.Operator.IS,
                //          values: params.worktype,
                //        })
                //      );
                //     };

                //      if (params.location) {
                //     getSvdSrch.filters.push(
                //        search.createFilter({
                //          name: "custrecord_az_hcm_op_location",
                         
                //          operator: search.Operator.IS,
                //          values: params.location,
                //        })
                //      );
                //     };

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
                    let departmentV = searchResult[i].getValue("custrecord_az_hcm_op_department");
                    let descriptionT= searchResult[i].getValue("custrecord_az_hcm_op_description");
                   
                   
                    let responsibilities = searchResult[i].getValue("custrecord_az_hcm_op_responsibilities");
                    let requirements = searchResult[i].getValue("custrecord_az_hcm_op_requirements");
                    // let requirementsT = searchResult[i].getText("custrecord_az_hcm_op_requirements");
                    // g("requirementsT",requirements)
                   
                    if(remote){
                        locationText = "remote"
                    }
                    result.push({

                        "departmentT":departmentT,
                        "departmentV":departmentV,
                        "id":id,
                        "remote":remote,
                        "worktypeV":worktypeV,
                        "locationText":locationText,
                        "locationValue":locationValue,
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
                        "departmentV":departmentV,
                        "responsibilities":String(responsibilities),
                        "requirements":String(requirements),
                        // "requirementsT":requirementsT
                    }
                    }
                    )
                    
                }

               g("result", result)

                let reactPage = file.load({
                    id: "SuiteScripts/jobs_Open_in_React/Open_Positions_React.html",
                  });

                        let content = reactPage.getContents();

                        setTimeNet(result,content,response)

                    // response.write(content );

            }
            // if (request.method == "POST"){
            //     let department = params.department;
            //     let LOCATION = params.LOCATION;
            //     let WORKTYPE = params.WORKTYPE;

            //     // var prSvdSrch = search.load({
            //     //     id: "customsearch_script_payment_receipt",
            //     //   });
            //     if (params.LOCATION) {
            //         prSvdSrch.filters.push(
            //           search.createFilter({
            //             name: "custrecord_az_rep_ppa_unit",
            //             join: "CUSTRECORD_AZ_REP_PPA_RECEIPT",
            //             operator: search.Operator.ANYOF,
            //             values: params.unit,
            //           })
            //         );
            //       }
            // }

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
