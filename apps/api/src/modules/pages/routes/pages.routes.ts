import { requireAuth } from "@clerk/express";
import { Router } from "express";
import { createPage, getPages } from "../pages.controller.js";

const pageRouter: Router = Router()
pageRouter.route('/get-pages').get(requireAuth(), getPages)
pageRouter.route('/create-page').post(requireAuth(), createPage)
export { pageRouter }