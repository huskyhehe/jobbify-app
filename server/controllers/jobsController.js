import mongoose from "mongoose";
import moment from "moment";
import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";



export const createJob = async (req, res) => {
    const { position, company } = req.body;

    if (!position || !company) {
        throw new BadRequestError('Please provide all values');
    };
    req.body.createdBy = req.user.userId;
    
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
};

export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createdBy: req.user.userId });
    res
      .status(StatusCodes.OK)
      .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};


export const updateJob = async (req, res) => {
    const { id: jobId } = req.params;
    const { company, position } = req.body;
  
    if (!position || !company) {
      throw new BadRequestError('Please provide all values');
    };

    const job = await Job.findOne({ _id: jobId }); 
    if (!job) {
      throw new NotFoundError(`No job with id :${jobId}`)
    };

    checkPermissions(req.user, job.createdBy);
  
    const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
      new: true,
      runValidators: true,
    });
  
    res.status(StatusCodes.OK).json({ updatedJob });
};


export const deleteJob = async (req, res) => {
    const { id: jobId } = req.params;
  
    const job = await Job.findOne({ _id: jobId });  
    if (!job) {
      throw new NotFoundError(`No job with id :${jobId}`);
    };
  
    checkPermissions(req.user, job.createdBy);

    await job.remove();
  
    res.status(StatusCodes.OK).json({ msg: 'Success! Job removed' });
}



export const showStats = async (req, res) => {
    let stats = await Job.aggregate([
        { $match: {createdBy: mongoose.Types.ObjectId(req.user.userId)} },
        { $group: {_id: '$status', count: { $sum: 1}} },
    ]);

    stats = stats.reduce((acc, curr) => {
        const { _id: title, count } = curr;
        acc[title] = count;
        return acc
    }, {});

    const defaultStats = {
        pending: stats.pending || 0,
        interview: stats.interview || 0,
        declined: stats.declined || 0,
    };

    res.status(StatusCodes.OK).json({ defaultStats });
};

