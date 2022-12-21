/**
 *@NApiVersion 2.1
 *@NScriptType Suitelet
 */
 define(["N/file"], (file) =>{


    // ! log debug public in script
   var g = log.debug.bind();

    const onRequest = (context)=> {
        try {
            var request = context.request;
            var response = context.response;
            if (request.method == "GET"){


                let reactPage = file.load({
                    id: "SuiteScripts/jobs_Open_in_React/Open_Positions_React.html",
                  });

                        let content = reactPage.getContents();
                    response.write(content );

            }

        } catch (e) {g("onRequest",e)}
    }

    return {
        onRequest: onRequest
    }
});
