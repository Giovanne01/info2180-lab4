window.onload= function(){
   let httpRequest= new XMLHttpRequest();
   let file = "http://localhost/info2180-lab4/superheroes.php";
   
    const search= document.getElementById("btn1");
    
    
    search.addEventListener("click", function(event){
        event.preventDefault();
        let msg=document.querySelector('input').value;

        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState=== XMLHttpRequest.DONE){
                if (httpRequest.status===200){
                    var response = httpRequest.responseText;
                    var result = document.querySelector('#msg');
                    result.innerHTML= response;
                }
            else{
                alert("There was a problem with the request. ")
                }
            }
            
        }
        httpRequest.open("POST",file,true);
        httpRequest.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        httpRequest.send('msg=' + encodeURIComponent(msg));
        
    })

    
    
}