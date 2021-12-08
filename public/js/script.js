const browserElement = document.getElementById("browser");
const ipaddressElement = document.getElementById("ipaddress");
let apiKey = '1be9a6884abd4c3ea143b59ca317c6b2';
$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
  console.log(JSON.stringify(data, null, 2));
});


getUser();


async function getUser(){
    createBrowserCard();  
    createIpAddressCard();
}



function createBrowserCard(){
var browserName = $.browser.name;
var browserVersion = $.browser.version;
var isDesktopUser = $.browser.desktop;

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


function createIpAddressCard(){
    var browserName = $.browser.name;
    var browserVersion = $.browser.version;
    var isDesktopUser = $.browser.desktop;
    
        const ipaddressCard = `
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
    
    
           ipaddressElement.innerHTML = ipaddressCard;
    }









