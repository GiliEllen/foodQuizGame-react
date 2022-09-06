import Fact from "../model/factModel"

export async function getAllFacts(req, res) {
    try {
        const factsDBArray = await Fact.find({});
        if (factsDBArray.length < 0) throw new Error("no items in fact array")
        res.send({factsDBArray})
    } catch (error) {
        console.log(error)
    }
}