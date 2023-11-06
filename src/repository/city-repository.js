const {City}=require('../models/index.js')
const {Op}=require('sequelize')
class CityRepository{

    async createCity({name}){
    try{
        const city=await City.create({
            name:name
        });
        return city;
    }
    catch (error){
    console.log("something wrong in Repository");
    throw error;
    }
    }

    async deleteCity(cityId){
    try{
    await City.destroy({
        where:{
            id:cityId
        }
    })
    return true;
    }
    catch(error){
        console.log("something wrong")
        throw error;
    }
    }

    async updateCity(cityId,data){
        try{
            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save(); 
            return city;
        }
        catch(error){
            console.log(error);
            throw error;
        }

    }
    async getCity(cityId){
    try{
        const city=await City.findByPk(cityId)
        return city;
    }
    catch(error){
        console.log("something went wrong in repository");
        throw error;
    }

    }
    async getAllCities(filter){
        try{
            if(filter.name){
                const cities= await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                });
                return cities;
            }  
        const cities=await City.findAll();
        return cities;
        }
        catch(error){
            console.log("something went wrong  getAllcities in repository");
        }
    }
}

module.exports=CityRepository;