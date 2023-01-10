/**
 *@NApiVersion 2.1
 *@NScriptType Suitelet
 */
define(["N/search"], (search)=> {

      // ! log debug public in script
      var g = log.debug.bind();

    const getDateInSaveSearch = (context)=> {
        try {
            var request = context.request;
            var response = context.response;

            if (request.method == "GET"){

                    // ! ==> get Saved Search <==
                    let getSvdSrch = search.load({
                        id: "customsearch_search_open_positions",
                    });
                    // g(getSvdSrch)
                    let searchResult = getSvdSrch.run().getRange(0,1000);
                    let result = []
                    let lengthArr = searchResult.length
              
                    for (let i = 0; i < lengthArr; i++) {
                        let id = searchResult[i].getValue("internalid");
                        let title = searchResult[i].getValue("name");
                        let location = searchResult[i].getText("custrecord_az_hcm_op_location");
                        let remote = searchResult[i].getValue("custrecord_az_hcm_op_remote");
                        let worktype = searchResult[i].getValue("custrecord_az_hcm_op_worktype");
                        let department = searchResult[i].getValue("custrecord_az_hcm_op_department");
                        let responsibilities = searchResult[i].getValue("custrecord_az_hcm_op_responsibilities");
                        let requirements = searchResult[i].getValue("custrecord_az_hcm_op_requirements");
                        result.push({
                            "id":id,
                            "title":title,
                            "location":location,
                            "remote":remote,
                            "worktype":worktype,
                            "department":department,
                            "responsibilities":responsibilities,
                            "requirements":requirements
                        })
                        
                    }
                    response.write(JSON.stringify(result) );
            }


        } catch (e) {g("ERRORFun",e)}
    }

    return {
        onRequest: getDateInSaveSearch
    }
});
