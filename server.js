let port = process.env.PORT || 3000;
const express = require('express')
const path = require('path');
const si = require("systeminformation");
const app =  express()

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))




app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})

app.get('/', (req,res)=>{
res.sendFile(__dirname+'/public/views/index.html');

}) 


app.get("/getinfo",(req,res)=>{
    var data = getinfo();
    res.json(data);
    
})






async function getinfo() {
    const cpu = await si.cpu();
    // const disk = (await si.diskLayout())[0];
    const os = await si.osInfo();
    // const versions = await si.versions();
    const ram = await si.mem();
   
    // CPU Info
    let info = `CPU: ${cpu.manufacturer} ${cpu.brand} ${cpu.speed}GHz\n`;
    info += `Cores: ${cpu.cores} (${cpu.physicalCores} Physical)\n`;
   
    
    // document.getElementById("height").textContent = info;
    // RAM Info
    const totalRam = Math.round(ram.total / 1024 / 1024 / 1000);
    info += `RAM: ${totalRam}GB\n`;
   
    // Disk Info
    // const size = Math.round(disk.size / 1024 / 1024 / 1024);
    // info += `Disk: ${disk.vendor} ${disk.name} ${size}GB ${disk.type} (${disk.interfaceType})\n`;
   
    //OS Info
    info += `OS: ${os.distro} ${os.codename} (${os.platform})\n`;
    info += `Kernel: ${os.kernel} ${os.arch}\n`;
   
    // Node Info
    // info += `Node: v${versions.node}\n`;
    // info += `V8: ${versions.v8}`;
    // console.log(info);

    var cpuData = `${cpu.manufacturer} ${cpu.brand} ${cpu.speed}GHz`;
    var ramData = `${totalRam}GB`;
    var osData = `${os.distro} ${os.codename} (${os.platform})`;
    var jsondata = {cpu:cpuData,  ram:ramData,os:osData}
   console.log(jsondata);
    return jsondata;
   }

   app.get('/sample', async (req, res) => {
    const cpu = await si.cpu();
    const ram = await si.mem();
    const os = await si.osInfo();
   const board = await si.system();


    // variable declarations below
    var cpuVal = cpu.manufacturer+" "+cpu.brand+" "+cpu.speed+'GHz';
    var ramVal = Math.round(ram.total / 1024 / 1024 / 1000)+"GB";
    var osPlatform = os.platform +" "+ os.distro +" "+os.codename+" "+ os.arch;
    var hostName = os.hostname;

    var manufacturer = board.manufacturer
    var model = board.model;
    
    

    console.log(cpuVal);
    console.log(ramVal);
    console.log(osPlatform);
    console.log(hostName);
    res.json({ 
        cpu: cpuVal,
        ram: ramVal,
        os:osPlatform,
        host:hostName,
        motherboardMake:manufacturer,
        motherboardModel:model

});
});