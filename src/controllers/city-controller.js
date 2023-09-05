const {CityService}=require('../services/indexx')

const cityservice=new CityService();
const create=async(req,res)=>{
    try{
     const city=await cityservice.createCity(req.body);
     return res.status(200).json({
        data:{city},
        success:true,
        message:"Successful",
        error:{}
     })
    }
    catch(error){
        console.log(error);
        return res.status(501).json({
            data:{},
            success:false,
            message:`Error`,
            error:error
        })
    }

}

const destroy=async(req,res)=>{
    try{
        const response=await cityservice.createCity(req.params.body);
        return res.status(201).json({
           data:response,
           success:true,
           message:"Successful",
           error:{}
        })

    }
    catch(error){
        console.log(error)
        return res.status(501).json({
            data:{},
            success:false,
            message:`Error`,
            error:error
        })
    }
  
}

const get=async(req,res)=>{
    try{
        const response=await cityservice.getCity(req.params.id);
        return res.status(201).json({
           data:response,
           success:true,
           message:"Successful",
           error:{}
        })
    }
    catch(error){
        return res.status(501).json({
            data:{},
            success:false,
            message:`Error`,
            error:error
        })
    }

}

const update=async(req,res)=>{
    try{
        const response=await cityservice.updateCity(req.params.id,req.body);
        return res.status(201).json({
           data:response,
           success:true,
           message:"Successful",
           error:{}
        })
    }
    catch(error){
        return res.status(501).json({
            data:{},
            success:false,
            message:`Error`,
            error:error
        })

    }
}

module.exports={
    create,
    destroy,
    update,
    get
}
