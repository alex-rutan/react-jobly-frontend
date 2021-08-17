APP
  state=isUser

  Nav             props=(isUser)

  Routes                                    props=isUSer
    HomePage (Login vs logout)            render (component render) or (component1 or component 2)
                                            
    loginForm  -> ( axios (redirects to companies list)) 
                                            prop=(isUser) 
                                            state=(formData, formErrors)  

      Alert?                                                             
      
    registrationForm    (->axios(redirects to companies list))    prop=(isUser)
                                                                  state=(formData, formErrors)


      Alert?

    companiesContainer        axios request to get all companies inside parent function to set companies state
                                                props=(isuser) --> from routes     
                                                state = companies 
                                                
      searchForm      props(CompaniesFilter) from companies state 
                      state=(searchTerm)
      companiesList props(companies)
       
    company - axios(req) to get jobs from certain company
      JobList -props(array of jobs)

    jobContainer              axios request to get all jobs inside parent function to set jobs state
                                            prop=(isUser)    
                                            state(jobs)
      searchForm  props(JobsFilter)
                  state=(searchTerm)
      jobList   props(jobs) //reusability
        job

    profileForm                     props=isUSer, UpdateUser ->from parent route
      redirects home                state=(formData, formErrors, saveConfirmed?)

      Alert?

    Logout       props=isUser
      returns a redirects to home page


    Loading Spinner?

    