const {CityRepository}=require('../repository/index')

class CityService{
    constructor(){
        this.cityRepo=new CityRepository()
    }

    async createCity(data){
    try{
    const city=await this.cityRepo.createCity(data);
    return city;
    }
    catch(error){
        console.log("sommething went wrrong in cityservice")
        throw error;
    }
    }

    async deleteCity(cityId){
        try{
        const response=await this.cityRepo.deleteCity(cityId);
        return response;
        }
        catch(error){
            console.log("sommething went wrrong in cityservice")
            throw error;
        }

    }

    async updatecity(cityId,data){
        try{
        const city=await this.cityRepo.updateCity(cityId,data);
        return city;
        }
        catch(error){
            console.log("sommething went wrrong in cityservice")
            throw error;
        }

    }

    async getCity(cityId){

        try{
        const city=await this.cityRepo.getCity(cityId);
        return city;
        }
        catch(error){
            console.log("sommething went wrrong in cityservice")
            throw error;
        }
    }
}

module.exports=CityService;