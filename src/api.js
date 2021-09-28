import axios from "axios";
import jwt from "jsonwebtoken";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {

    console.debug("API Call:", endpoint, data, method);
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      console.log("HERE", url, method, data, headers, params);
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /**Get and Filter a list of companies based off searchterm, */
  static async filterCompanies(searchTerm) {
    let res;
    let data = { name: searchTerm };
    if (searchTerm === "") {
      res = await this.request(`companies`);
    } else {
      res = await this.request(`companies`, data);
    }
    return res.companies;
  }

  /**Get and Filter a list of jobs based off searchterm, */
  static async filterJobs(searchTerm) {
    let res;
    let data = { title: searchTerm };
    if (searchTerm === "") {
      res = await this.request(`jobs`);
    } else {
      res = await this.request(`jobs`, data);
    }
    return res.jobs;
  }

  static async login(loginUserData) {
      const res = await this.request("auth/token", loginUserData, "post");
      console.log("INSIDE API LOGIN", res, "SPACE", res.token)
      return res.token;
  }

  static async register(userData) {
    const res = await this.request("auth/register", userData, "post");
    console.log("INSIDE API REGISTER", res,"SPACE", res.token)
    return res.token;
  }

  static async getUserInfo(username) {
    const res = await this.request(`users/${username}`, username);
    return res.user;
  }
  
  //updates userinfo
  static async updateProfile(profileInfo){
    const { username } =  jwt.decode(this.token)
    const res  =  await this.request(`users/${username}`, profileInfo, "patch")
    return res.user
  }

  static async apply(jobID){
    const {username} =  jwt.decode(this.token)
    const res  =  await this.request(`users/${username}/jobs/${jobID}`, {}, "post")
    return res
  }

}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
