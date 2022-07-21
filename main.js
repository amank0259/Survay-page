function disableSubmit() {
    document.getElementById("submit").disabled = true;
   }
  
    function activateButton(element) {
  
        if(element.checked) {
          document.getElementById("submit").disabled = false;
         }
         else  {
          document.getElementById("submit").disabled = true;
        }
  
    }

        // Function for pop-up messege on Submmiting form // 

        let popup = document.getElementById("popup");

        function openPopup(){
            popup.classList.add("open-popup");
        }
        function closePopup(){
            popup.classList.remove("open-popup");
        }s