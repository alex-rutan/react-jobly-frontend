APP
  state = isUser

  Nav
  props = isUser , logout function to be placed on to logout button

  Routes
  props = isUSer

    HomePage    (Login vs logout)  render (component render) or (component1 or component 2)
                                            
    LoginForm  ->  ( axios (redirects to companies list)) 
    prop = isUser
    state = formData, formErrors

      Alert?                                                             
      
    RegistrationForm  ->  (axios (redirects to companies list))    
    prop = isUser
    state = formData, formErrors   

      Alert?

    CompaniesContainer    axios request to get all companies inside parent function to set companies state
    props = isuser --> from routes     
    state = companies                                                                                         
                                                
      SearchForm
      props = CompaniesFilter from companies state 
      state = searchTerm   

      CompaniesList 
      props = companies 
       
    Company   axios(req) to get jobs from certain company

      JobList
      props = array of jobs

    JobContainer    axios request to get all jobs inside parent function to set jobs state
      prop = isUser
      state = jobs  

      SearchForm  
      props = JobsFilter
      state = searchTerm

      JobList   
      props = jobs   //reusability

    ProfileForm    redirects home when submitted                     
    props = isUSer, UpdateUser -> from parent route
    state = formData, formErrors, saveConfirmed?

      Alert?

    Logout    returns a redirects to home page
    props = isUser
      


    Loading Spinner?
