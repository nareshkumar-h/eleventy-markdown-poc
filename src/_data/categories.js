const axios = require("axios");
const _ = require("lodash");

module.exports = async (orgId = "spinsoft") => {
  // console.log("Categories", orgId);
  // //const API_URL = `http://localhost:8080/api/`;
  // const API_URL = "https://knowledgetracker-java-api.herokuapp.com/api/";
  // const url = `${API_URL}v1/courses?orgId=${orgId}`;
  // console.log(url);
  // let courseResponse = await axios.get(url);
  // let courses = courseResponse.data;
  // let url2 = `${API_URL}v1/categories?orgId=${orgId}`;
  // console.log("Fetching Category details");
  // let categoryResponse = await axios.get(url2);
  // let categories = categoryResponse.data;
  // let categoriesData = [];
  // for (let category of categories) {
  //   let courseList = courses.filter((obj) => obj.category == category.name);
  //   if (courseList.length > 0) {
  //     categoriesData.push({
  //       category: category.name,
  //       organization: category.orgId,
  //       courses: courseList,
  //     });
  //   }
  // }
  // return [categoriesData];
  return [];
};
