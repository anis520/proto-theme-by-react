function HeadComonent (){



   return(

    <header className="py-3 container-flued ">

        

        <div className="d-flex h-1 justify-content-end">
            
           <div className="px-3 "><box-icon name='chevron-right'></box-icon> About us</div>      
           <div className="px-3"><box-icon name='chevron-right'></box-icon> Contact us</div>      
           <div className="px-3"><box-icon name='phone-call'></box-icon> +882125212</div>  
            <div className="icon-div">
           <box-icon name='search-alt-2'></box-icon>
           <box-icon  name='shopping-bag'></box-icon>    

            </div>
              
            
        </div>         
        
        <div className="h-2 position-sticky d-flex  top-0">


           <div className="logo">
              <img src="https://www.portotheme.com/wordpress/porto/wp-content/themes/porto/images/logo/logo-default-slim-2.png" class="" alt="" />
           </div>
           <div className="menu ms-auto">
              <ul>
                  <li><a href="">HOME</a> </li>
                  <li className="sub"><a href="">ELEMENTS</a>
                  
                  
                    <ul>
                                  <li><a>Dosed</a></li>
                                  <li><a>lasted</a></li>
                                  <li><a>matois</a></li>
                                  <li><a>fargist</a></li>
                         
                    </ul>
                    
                  
                  
                  
                  </li> 
                        <li><a href="">FEATURES</a></li>
                  <li><a href="">PAGES</a></li>
                  <li><a href="">BLOG</a></li>
                  <li><a href="">PORTFOLIO</a></li>
                  <li><a href="">BUY PORTO!</a></li>
              
              </ul>
           </div>
        

        </div>
 

    </header>




   )




}


export default HeadComonent;