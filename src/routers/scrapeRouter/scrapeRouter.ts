import express, { Request, Response } from "express"
const scrapeRouter = express.Router()
const scrapeService = require("./scrapeService")

scrapeRouter.route("/").get(async (req: Request, res: Response) => {
    try {
        const result = await scrapeService.scrape()
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({ content: null, error: true, errorMsg: error })
    }
})

module.exports = scrapeRouter
