'use strict';

let controller ={
    detailsHandler:(request,response)=>{
        let ObjreqBody = request.body;
        controller.userValidation(ObjreqBody,(objdata)=>{
            response.send(objdata)
        })
    },
    userValidation:(ObjreqBody,callback)=>{
        let ObjUserDetails={
            Name:"",
            isAdult:false
        }
        if(ObjreqBody && ObjreqBody.Name!=null)
        {
            ObjUserDetails.Name = ObjreqBody.Name;
            if(ObjreqBody.Age!=null )
            ObjUserDetails.isAdult  = ObjreqBody.Age>18  ? true : false
            callback(ObjUserDetails);
        }
        else
        {
            let err ={
                message:"Body Missing in the request",
                code : -1
            }
            callback(JSON.stringify(err));
        }
    }
}
export default controller;