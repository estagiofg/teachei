/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn_Buscar */
    $(document).on("click", "#btn_Buscar", function(evt)
    {
         /*global activate_page */
         activate_page("#page_resultado"); 
         return false;
    });
    
        /* button  #btn_Buscar */
    $(document).on("click", "#btn_Buscar", function(evt)
    {
         /*global activate_page */
         activate_page("#page_resultado"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
