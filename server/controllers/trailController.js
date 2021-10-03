// const trailsDb = require("./db.json")
// let globalId = 2

const trails = "hello"

module.exports = {
    addTrail: (req, res) => {
        res.status(200).send(trails)
    }

    // getTrails: (req, res) => {
    //     res.status(200).send(trailsDb)
    // },
    // createTrail: (req, res) => {
    //     const {trail, state, picture} = req.body
    //     let newTrail = {
    //         id: globalId,
    //         trail,
    //         state,
    //         picture
    //     }
    //     if (!trail || !state || !picture){
    //         return res.status(400).send('incomplete')
    //     } else{
    //         trailsDb.push(newTrail)
    //         globalId ++
    //         res.status(200).send(trailsDb)
    //     }
    // }

};