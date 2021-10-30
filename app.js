window.onload= function(){
   let httpRequest= new XMLHttpRequest();
   let file = "http://localhost/info2180-lab4/superheroes.php";
    const search= document.getElementsByClassName("btn");
    
    search[0].addEventListener("click", function(event){
        event.preventDefault();
        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState=== XMLHttpRequest.DONE){
                if (httpRequest.status===200){
                    var response = httpRequest.responseText;
                    alert(response);
                }
            else{
                alert("There was a problem with the request. ")
                }
            }
                
        }
        httpRequest.open("GET",file,true);
        httpRequest.send();
        
    })

    
    
}