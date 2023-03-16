import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRouter = (app) => {
    router.get('/detail/users/:userId', homeController.getDetailPage);
    router.get('/', homeController.getHomePage)
    router.get('/category', (req, res) => {
        res.render('category/index.ejs')
    })
    return app.use('/', router);
}
module.exports = initWebRouter;