const browserElement = document.getElementById("browser");
const baseApi = 'https://api.github.com/'
console.log(browserElement);

getUser();


async function getUser(){
  
    
    createUserCard();  


    
   
}



function createUserCard(){
   
var browserName = $.browser.name;
var browserVersion = $.browser.version;
var isDesktopUser = $.browser.desktop;

switch(browserName){
    case "chrome": 
        var url = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg";
}


       const browserCard = `
       <table class="table">
       <thead>
           <tr class='theadCss'>
               <th scope="col">Property</th>
               <th scope="col">Value</th>
           </tr>
       </thead>
       <tbody>

           <tr>
               <th scope="row">Browser Name</th>
               <td>${browserName}</td>
           </tr>

           <tr>
                <th scope="row">Browser Version</th>
                <td>${browserVersion}</td>
            </tr>
            <tr>
                <th scope="row">Using from Desktop</th>
                <td>${isDesktopUser}</td>
            </tr>
       </tbody>
   </table>
       `;


        browserElement.innerHTML = browserCard;
}












