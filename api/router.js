'use strict';
import controller from "./controller.js";

let router = (app)=>{
    app.route('/Details').post(controller.detailsHandler);
}
export default router;