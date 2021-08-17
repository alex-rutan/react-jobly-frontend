APP
  state=isUser

  Nav             props=(isUser)

  Routes                                    props=isUSer
    HomePage (Login vs logout)            render (component render) or (component1 or component 2)
                                            
    loginForm  -> ( axios (redirects to companies list))  
                                            prop=(isUser)                               
      
    registrationForm    (->axios(redirects to companies list))    prop=(isUser)   

    companiesContainer                          props=(isuser) --> from routes     state = companies
      searchForm props(CompaniesFilter) from companies state 
      companiesList props(companies)
       
    company - axios(req)
      JobList -props(array of jobs)

    jobContainer --> prop=(isUser)    state(jobs)
      searchForm  props(JobsFilter)
      jobList   props(jobs) //reusability
        job

    profileForm                     props=isUSer, UpdateUser ->from parent route
      redirects home

    Logout       props=isUser
      returns a redirects to home page