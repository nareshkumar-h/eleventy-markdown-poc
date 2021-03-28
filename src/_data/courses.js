const axios = require("axios");
const _ = require("lodash");

module.exports = async () => {
  // const res = await axios.get(
  //   "https://knowledgetracker-java-api.herokuapp.com/api/v1/courses"
  // );
  // let data = res.data;
  // let courses = [];
  // let i = 0;
  // for (let c of data) {
  //   let url = `https://knowledgetracker-java-api.herokuapp.com/api/v1/courses/${c.code}/content`;
  //   console.log(url);
  //   console.log("Fetching Course - ", JSON.stringify(c));
  //   try {
  //     let courseResponse = await axios.get(url);
  //     let course = courseResponse.data;
  //     console.log(course);

  //     courses.push(course);
  //     i++;
  //     if (i == 5) break;
  //   } catch (err) {
  //     console.error("Unable to fetch-", c.code);
  //   }
  // }
  let courses = [];
  return courses;
};
