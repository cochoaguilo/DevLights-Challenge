const fs = require('fs')

const file = require('../json/deals.json')

/* const deals = fs.readFile('./json/deals.json', 'utf-8', (err, jsonString)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('done');
        return JSON.parse(jsonString)
    }
}) */

const getData = (req, res) =>{
    
    res.status(200).send({message:'data fetched', data: file})
}

const getByPrice = (req, res) =>{
    const filtroPrecio = req.query.sale;
    const num  = parseInt(filtroPrecio)
    console.log(filtroPrecio);
    const filterbyPrice = file.filter(element =>{
        if(element.salePrice> num){
            console.log(element.salePrice);
            return element.salePrice
        }
    })


if(filterbyPrice === ''){
    return res.status(404).json({message: 'no encontrado', data: filterbyPrice})

}

    if(filterbyPrice){
        res.status(200).json({message:'encontrado', data:filterbyPrice})
    } 
    
   
}

const getbyTitle = (req, res) =>{
    const filtro = req.query.title

    

    const filterbyTitle = file.filter(element=>{
        return element.title === filtro
    })

    res.status(200).json({data: filterbyTitle})
}



module.exports={
    getData, 
    getByPrice,
    getbyTitle
}

