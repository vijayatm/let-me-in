const browserElement = document.getElementById("browser");
const ipaddressElement = document.getElementById("ipaddress");
const wifiElement = document.getElementById("wifi");

let abstractKey = "40f0ceda51c34f4882449df526131208";



letMeIn();


async function letMeIn(){
    const resp = await fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=' + abstractKey);
    const response = await resp.json();
    


    getBrowserData();  
    getIpAddressData(response);
    getWifiData(response);
}



function getBrowserData(){
var browserName = $.browser.name;
var browserVersion = $.browser.version;
var isDesktopUser = $.browser.desktop;

switch(browserName){
    case "chrome": 
        var url = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg";
}
       const browserCard = `
       <table class="table" onload="getSize()">
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

            <tr>
            <th scope="row">Height</th>
            <td id="height">${window.innerHeight}</td>
        </tr>
        <tr>
        <th scope="row">Width</th>
        <td id="width">${window.innerWidth}</td>
    </tr>

       </tbody>
   </table>
       `;
     
       
    

       
       
        browserElement.innerHTML = browserCard;
}



function getSize(){
    var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
// console.log(w +" "+h);
    document.getElementById('height').textContent  = h;
    document.getElementById('width').textContent  = w;

}



function getIpAddressData(data){
    console.log(JSON.stringify(data));
    var publicIpAddress = data['ip_address'];
    var city = data['city'];
    var region = data['region'];
    var country = data['country'];
    var continent = data ['continent'];
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
            <th scope="row">Public IP Address</th>
            <td>${publicIpAddress}</td>
        </tr>

        <tr>
            <th scope="row">City</th>
            <td>${city}</td>
        </tr>

        <tr>
            <th scope="row">Region</th>
            <td>${region}</td>
        </tr>

        <tr>
            <th scope="row">Country</th>
            <td>${country}</td>
        <tr>

        <tr>
            <th scope="row">Continent</th>
            <td>${continent}</td>
        <tr>
        <tr>
            <th scope="row">Is VPN</th>
            <td>${data['security']['is_vpn']}</td>
        <tr>




     </tbody>
</table>
    `;
    ipaddressElement.innerHTML = ipaddressCard;
}



function getWifiData(data){
    var ispName = data['connection']['isp_name'];
    var orgName = data['connection']['autonomous_system_organization'];
    var connectionType = data['connection']['connection_type']

    const wifiCard = `
    <table class="table">
    <thead>
        <tr class='theadCss'>
            <th scope="col">Property</th>
            <th scope="col">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">ISP Name</th>
            <td>${ispName}</td>
        </tr>

        <tr>
            <th scope="row">Organization name</th></th>
            <td>${orgName}</td>
        </tr>

        <tr>
            <th scope="row">Connection Type</th>
            <td>${connectionType}</td>
        </tr>
     </tbody>
</table>
    `;
wifiElement.innerHTML = wifiCard;

}





