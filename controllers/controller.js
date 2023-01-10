module.exports.about_get = (req,res)=>{
    res.render('about')
}
module.exports.map_get = (req,res)=>{
    res.render('map')
}

module.exports.owner_post = async (req,res)=>{
    const {navn,personnummer,kontaktspråk,telefonnummer} = req.body
    console.log(req.body)
    try {
        //lager en user og en cookie med user id
        const owner = await Owner.create({navn,personnummer,kontaktspråk,telefonnummer})
        owner.save().then(doc =>{
            console.log(doc)
        }).catch(err =>{
            console.log(err)
        })
        res.status(201).json({owner: owner._id})

    } catch (err) {
        console.log("Got error", err)
        res.status(400)
    }
}

