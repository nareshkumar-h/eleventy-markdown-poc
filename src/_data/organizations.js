const axios = require("axios");
const _ = require("lodash");

module.exports = async () => {
  const API_URL = "https://knowledgetracker-java-api.herokuapp.com/api/";
  let url = `${API_URL}v1/organizations`;
  console.log("Fetching Organization details");
  let courseResponse = await axios.get(url);
  let organizations = courseResponse.data;

  for (let org of organizations) {
    let url2 = `${API_URL}v1/categories?org=${org.code}`;
    console.log("Fetching Category details - " + org.code);
    let categoryResponse = await axios.get(url2);
    let categories = categoryResponse.data;

    const url3 = `${API_URL}v1/courses?org=${org.code}`;

    let courseResponse = await axios.get(url3);
    let courses = courseResponse.data;

    for (let category of categories) {
      let courseList = courses.filter((obj) => obj.category == category.name);
      if (courseList.length > 0) {
        category["courses"] = courseList;
      }
    }
    org.categories = categories;
  }

  return organizations;
};
