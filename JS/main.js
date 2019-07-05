//https://www.tutorialspoint.com/vuejs/vuejs_template.htm
  
    
    var app = new Vue({
                el: '#app',
                data: {
                    title: 'This was not working a ago',
                    htmlcontent: "<div><h1> This is a Vue JS Template </h1></div>",
                    imgsrc: "/Media/IMG_0213.jpg"
                    
                }
                
            });

         
    
 
   var header = new Vue({
      el: "#header",
       data: {
           name: 'This is the header of the page'
       }
       
       
       
   });


//Creating the compnents

 Vue.component('testcomponent',{
    
    template: '<div><h1> This is coming from component </h1> </div>'
    
});
    

Vue.component('m-top-bar', {
    template: `
             <ul class="links">
                <a href="http://www.google.com"> <li> Home </li> </a>
                <a href=""> <li> About </li> </a>
                <li> Resources </li>
            </ul>`
   
                
});

Vue.component('navbar-header', {
    template:`
             
                <ul id="navbar-links>
                    <li> Home </li>
                    <li> About </li>
                </ul>`
    
});

Vue.component('m-footer', {
   template: `<div id=m-footer-id>
                <p> This is the footer </p>
                <p> This is the information bottom </p>

                </div>` 
    
});

//creating the id variables for the componets

var m_footer = new Vue ({
   el: '#m-footer' 
    
});

   var t1 = new Vue ({
       //must make sure you add a # infront when using el
      el: '#component_test' 
       
   });


   var t2 = new Vue ({
        el: '#component_test2'
    
    });

   var header = new Vue ({
        el: '#component_test3',
        data() {
        
        return {
            bgcolor: 'red',
            
        }
    },
            
    });


var navbar_header = new Vue ({
   el: '#navbar_header' 
    
    
});

