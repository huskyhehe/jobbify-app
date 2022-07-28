import express from "express";
const jobsRouter = express.Router();

import { 
    createJob,
    deleteJob,
    updateJob,
    getAllJobs,
    showStats,
 } from "../controllers/jobsController.js";

jobsRouter.route('/').post(createJob).get(getAllJobs);
// place before :id
jobsRouter.route('/stats').get(showStats);
jobsRouter.route('/:id').delete(deleteJob).patch(updateJob);

export default jobsRouter;