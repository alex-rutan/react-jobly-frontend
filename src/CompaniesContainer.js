import React, { useState, useEffect } from "react";
import axios from "axios"
import JoblyApi from "./api";



function CompaniesContainer() {
    const [searchTerm, setSearchTerm] = useState({search:""})
    const [companiesList,setCompaniesList] = useState([])

    // useEffect( function getCompanies(){
    //   async function getCompanies(){
    //     if (searchTerm) = ""
    //     const response = JoblyApi.getAll();
    //     setCompaniesList( response.data) // setList to response.data.???????
    //     //TODO add loading spinner?
    //   };
    //   getCompanies();
    // },[searchTerm] );
  

  return (
    <div>
    </div>
  )
}

export default CompaniesContainer;