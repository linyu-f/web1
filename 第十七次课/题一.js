//  var City = {
//     cityName:"南昌",
//     cityArea:7402 ,
//     cityPostcode:"330000",
//     cityRegions:['东湖区','西湖区','青山湖区','新建区'],
//     printcityName:()=>{
//         console.log("城市名称");
//     },
//     printcityArea:()=>{
//         console.log("城市面积");
//     },
//     printcityPostcode:()=>{
//         console.log("城市邮编");
//     },
//     printcityRegions:()=>{
//         console.log("城市区域");
//     }

// }
function City(cityName,cityArea,cityPostcode,cityRegions){
    this.cityName = cityName,
    this.cityArea = cityArea,
    this.cityPostcode = cityPostcode,
    this.cityRegions = cityRegions
}
var c1 = new City("南昌",7402,"330000",['东湖区','西湖区','青山湖区','新建区'])
console.log(c1);

