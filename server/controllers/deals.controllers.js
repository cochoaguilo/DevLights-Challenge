const fs = require('fs')

const file = require('../json/deals.json')


const getData = (req, res) =>{
    
    res.status(200).send({message:'data fetched', data: file})
}

const getByPrice = (req, res) =>{
    const filtroPrecio = req.query.sale;
    const num  = parseInt(filtroPrecio)
    
    const filterbyPrice = file.filter(element =>{
        return element.salePrice > num
        }
    )


if(filterbyPrice.length === 0){
    return res.status(404).json({message: 'no encontrado', data: filterbyPrice})

}   else{
        res.status(200).json({message:'encontrado', data:filterbyPrice})
    } 
    
   
}

const getbyTitle = (req, res) =>{
    const filtro = req.query.title

    

    const filterbyTitle = file.filter(element=>{
        return element.title === filtro || element.title.includes(filtro)
    })

    res.status(200).json({data: filterbyTitle})
}



module.exports={
    getData, 
    getByPrice,
    getbyTitle
}

