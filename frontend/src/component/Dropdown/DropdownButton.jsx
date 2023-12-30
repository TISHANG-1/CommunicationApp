import Dropdown from 'react-multilevel-dropdown';  
import {useNavigate}  from 'react-router-dom' 

function DropdownButton() {  
  const navigate = useNavigate() ;  
  
  const doSomething = ()=>{  
    console.log("clicked")
     
   } ; 
  return (
    <Dropdown
    title='Send Emails' 
    openOnHover="true"
  >
    <Dropdown.Item onClick={() => doSomething()}>
     User Onboarding Emails 
     <Dropdown.Submenu>
        <Dropdown.Item  
                onClick={()=>{ 
                console.log("clicked");  
                navigate('/forms' , {state : {template: "welcome"} });
        }}>
            welcome emails
        </Dropdown.Item>  

        <Dropdown.Item  
                onClick={()=>{ 
                console.log("clicked");  
                navigate('/forms'  , {state : {template: "passwordReset"} } );
        }}>
          Password Reset emails
        </Dropdown.Item> 
        
        <Dropdown.Item  
                onClick={()=>{ 
                console.log("clicked");  
                navigate('/forms' , {state : {template: "verification"} });
        }}>
            Verification emails
        </Dropdown.Item>
      </Dropdown.Submenu>
    </Dropdown.Item>  


    <Dropdown.Item>
    Marketing/Newsletter Emails
      <Dropdown.Submenu>
        <Dropdown.Item  
                onClick={()=>{ 
                console.log("clicked");  
                navigate('/forms', {state : {template: "announcement"} } );
        }}>
           Announcements
        </Dropdown.Item>
      </Dropdown.Submenu>
    </Dropdown.Item> 

    <Dropdown.Item>
    Transactional Emails
      <Dropdown.Submenu>
        <Dropdown.Item onClick={()=>{ 
                console.log("clicked");  
                navigate('/forms', {state : {template: "newFeature"} } );
        }}>
        new feature
        </Dropdown.Item>
        <Dropdown.Item onClick={()=>{ 
                console.log("clicked");  
                navigate('/forms' , {state : {template: "passwordChange"} });
        }}>
        Password Changes
        </Dropdown.Item> 

        <Dropdown.Item onClick={()=>{ 
                console.log("clicked");  
                navigate('/forms', {state : {template: "shipping"} } );
        }}>
         Shipping
        </Dropdown.Item>
        
      </Dropdown.Submenu>
    </Dropdown.Item>  


    <Dropdown.Item>
    User Engagement Emails
      <Dropdown.Submenu>
        <Dropdown.Item  
                onClick={()=>{ 
                console.log("clicked");  
                navigate('/forms' );
        }}>
         Confirmation emails on purchases
        </Dropdown.Item> 
        <Dropdown.Item  
                onClick={()=>{ 
                console.log("clicked");  
                navigate('/forms' );
        }}>
          FeedBack
        </Dropdown.Item>
        <Dropdown.Item  
                onClick={()=>{ 
                console.log("clicked");  
                navigate('/forms' );
        }}>
          Inactive User Reactivation Email
        </Dropdown.Item>
      </Dropdown.Submenu>
    </Dropdown.Item>   

        <Dropdown.Item  
                onClick={()=>{ 
                console.log("clicked");  
                navigate('/eforms' );
        }}>
        Basic Email
    </Dropdown.Item>



  </Dropdown>
  );
}

export default DropdownButton;