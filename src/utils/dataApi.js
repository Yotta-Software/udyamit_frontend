import { config } from "../config";
import axios from "axios";
import { toast } from "react-toastify";

export const getJobs = async (query) => {
  try {
    //http://localhost:8080/api/jobs?15
    const res = await axios.get(config.baseUrl + config.jobs + query);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getJob = async (query) => {
  try {
    const res = await axios.get(config.baseUrl + config.job + query);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getJobsByEmail = async (query) => {
  try {
    const res = await axios.get(config.baseUrl + config.jobsByEmail + query);
    return res.data;
  } catch (error) {
    return null;
  }
};

///digital lerning

export const getDigitalCourses = async (query) => {
  try {
    const res = await axios.get(config.baseUrl + config.digitals + query);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getDigitalCourse = async (query) => {
  try {
    const res = await axios.get(config.baseUrl + config.digital + query);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const checkApplyStatus = async (query) => {
  try {
    const res = await axios.get(
      config.baseUrl + config.checkApplyStatus + query
    );
    return res;
  } catch (error) {
    return null;
  }
};

export const getAllNews = async (query) => {
  try {
    const res = await axios.get(config.baseUrl + config.getAllNews + query);
    return res;
  } catch (error) {
    return null;
  }
};

export const getNews = async (query) => {
  try {
    const res = await axios.get(config.baseUrl + config.news + query);
    return res.data;
  } catch (error) {
    return null;
  }
};
