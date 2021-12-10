const browserElement = document.getElementById("browser");
const ipaddressElement = document.getElementById("ipaddress");
const wifiElement = document.getElementById("wifi");
const systemInfoElement = document.getElementById("systemInfo");
let abstractKey = "40f0ceda51c34f4882449df526131208";



letMeIn();


async function letMeIn(){
    const resp = await fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=' + abstractKey);
    const response = await resp.json();
    
   

    getBrowserData();  
    getIpAddressData(response);
    getWifiData(response);

    const respGetSystemInfo = await fetch("/sample");
    const responseSystemInfo = await respGetSystemInfo.json();
    getSystemInformationData(responseSystemInfo);
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

            <tr>
                <th scope="row">Is Adblock Installed?</th>
                <td id="isadblock"></td>
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

window.onload = function() {     
    setTimeout(function() {     
        let fakeAd = document.createElement("div");
  fakeAd.className = 
  "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox"
      
  fakeAd.style.height = "1px"
    
  document.body.appendChild(fakeAd)
    
  let x_width = fakeAd.offsetHeight;
    
      
    if(x_width){
      console.log("No AdBlocker Detected");
      document.getElementById('isadblock').textContent  = "No";

    }else{
      console.log("AdBlocker detected")
      document.getElementById('isadblock').textContent  = "Yes";
    }
      }, 1000);   
            };

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
        </tr>

        <tr>
            <th scope="row">Continent</th>
            <td>${continent}</td>
        </tr>
        <tr>
            <th scope="row">Is VPN</th>
            <td>${data['security']['is_vpn']}</td>
        </tr>




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


async function getSystemInformationData(data){
   

    const systemInfoCard = `
    <table class="table">
    <thead>
        <tr class='theadCss'>
            <th scope="col">Property</th>
            <th scope="col">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">CPU</th>
            <td>${data['cpu']}</td>
        </tr>

        <tr>
            <th scope="row">Ram</th>
            <td>${data['ram']}</td>
         </tr>

        <tr>
            <th scope="row">OS</th>
            <td>${data['os']}</td>
        </tr>

        <tr>
            <th scope="row">Pc Name</th>
            <td>${data['host']}</td>
        </tr>

        <tr>
            <th scope="row">Motherboard Make</th>
            <td>${data['motherboardMake']}</td>
        </tr>

        <tr>
        <th scope="row">Motherboard Model</th>
        <td>${data['motherboardModel']}</td>
    </tr>

       
     </tbody>
</table>
    `;


/**TODO - 
 *1. create system info card
 2. os info card
 3. get ram info in loop
 4. get harddisk info in loop 
 */
    // var cpuVal = cpu.manufacturer+" "+cpu.brand+" "+cpu.speed+'GHz';
    // var ramVal = Math.round(ram.total / 1024 / 1024 / 1000)+"GB";
    // var osPlatform = os.platform +" "+ os.distro +" "+os.codename+" "+ os.arch;
    // var hostName = os.hostname;
    // var manufacturer = board.manufacturer
    // var model = board.model;

    systemInfoElement.innerHTML = systemInfoCard;
}



