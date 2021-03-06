var dataAppUsers = {
  "kirk" : { username:"kirk", id:101, firstname:"Kirk", lastname:"Kaynor", status:"Active", rfid:"J123RF", branch:10, costcenter:88, phone:'123-456-7890',
              usertype:"Branch Owner", busunit:"SCP", branchadmin:true, maxsessions:3, oversessions:false, 
              suspended:false, temporary:false, locked:true, secure:false, ip:"10.11.12.13", notes:""},
  "will" : { username:"will", id:102, firstname:"Will", lastname:"Robinson", status:"Active", rfid:"M999RF", branch:99, costcenter:01, phone:'303-555-1212',
              usertype:"Corporate User", busunit:"PCS", branchadmin:true, maxsessions:3, oversessions:false, 
              suspended:false, temporary:false, locked:true, secure:false, ip:"99.88.77.66", notes:""},
}

var dataBranchUsers = [
  {"id":246,"firstname":"Mathias","lastname":"Ziemann","branch":99,"phone":"824-524-6331","oversessions":false,"suspended":true,"temporary":true,"locked":false,"secure":false,"ip":"185.77.122.163"}
 ,{"id":285,"firstname":"Brannon","lastname":"Ortiz","branch":10,"phone":"468-895-9649","oversessions":true,"suspended":false,"temporary":false,"locked":true,"secure":false,"ip":"252.209.121.119"}
 ,{"id":255,"firstname":"Boris","lastname":"Bahringer","branch":99,"phone":"525-987-1669","oversessions":true,"suspended":true,"temporary":true,"locked":false,"secure":false,"ip":"153.60.21.49"}
 ,{"id":111,"firstname":"Furman","lastname":"Kassulke","branch":99,"phone":"940-484-3689","oversessions":true,"suspended":true,"temporary":true,"locked":false,"secure":true,"ip":"27.105.157.146"}
 ,{"id":211,"firstname":"Alicia","lastname":"Hammes","branch":10,"phone":"644-024-4770","oversessions":false,"suspended":false,"temporary":false,"locked":false,"secure":false,"ip":"75.56.70.70"}
 ,{"id":106,"firstname":"Rowland","lastname":"Bogan","branch":99,"phone":"623-471-2650","oversessions":true,"suspended":false,"temporary":false,"locked":true,"secure":false,"ip":"18.17.200.109"}
 ,{"id":131,"firstname":"Sydni","lastname":"Weber","branch":10,"phone":"367-080-3070","oversessions":true,"suspended":false,"temporary":false,"locked":true,"secure":true,"ip":"158.171.203.151"}
 ,{"id":115,"firstname":"Alysha","lastname":"Rippin","branch":99,"phone":"040-627-8656","oversessions":false,"suspended":true,"temporary":true,"locked":false,"secure":true,"ip":"30.3.96.132"}
 ,{"id":165,"firstname":"Deion","lastname":"Brown","branch":10,"phone":"482-151-4945","oversessions":false,"suspended":true,"temporary":false,"locked":false,"secure":true,"ip":"25.162.209.254"}
 ,{"id":203,"firstname":"Cicero","lastname":"Rath","branch":99,"phone":"725-554-3642","oversessions":false,"suspended":true,"temporary":true,"locked":false,"secure":false,"ip":"170.190.130.121"}
 ,{"id":182,"firstname":"Wilton","lastname":"Koss","branch":10,"phone":"041-442-1905","oversessions":false,"suspended":true,"temporary":true,"locked":false,"secure":false,"ip":"239.153.9.205"}
 ,{"id":151,"firstname":"Adaline","lastname":"Mayer","branch":10,"phone":"382-937-0367","oversessions":false,"suspended":false,"temporary":true,"locked":true,"secure":false,"ip":"213.72.225.189"}
 ,{"id":209,"firstname":"Beryl","lastname":"Kuphal","branch":10,"phone":"516-352-4237","oversessions":false,"suspended":false,"temporary":true,"locked":false,"secure":false,"ip":"165.238.120.208"}
 ,{"id":216,"firstname":"Helga","lastname":"Hahn","branch":99,"phone":"213-736-3414","oversessions":false,"suspended":false,"temporary":true,"locked":false,"secure":true,"ip":"60.12.132.41"}
 ,{"id":104,"firstname":"Israel","lastname":"Ernser","branch":99,"phone":"178-056-9956","oversessions":true,"suspended":true,"temporary":false,"locked":true,"secure":false,"ip":"66.180.210.251"}
 ,{"id":230,"firstname":"Dennis","lastname":"Hoeger","branch":10,"phone":"139-586-1007","oversessions":true,"suspended":false,"temporary":false,"locked":true,"secure":false,"ip":"240.114.122.254"}
 ,{"id":269,"firstname":"Monique","lastname":"Veum","branch":99,"phone":"402-077-8194","oversessions":true,"suspended":true,"temporary":true,"locked":false,"secure":false,"ip":"28.47.113.72"}
 ,{"id":208,"firstname":"Nina","lastname":"White","branch":99,"phone":"289-658-0939","oversessions":false,"suspended":true,"temporary":true,"locked":true,"secure":true,"ip":"15.43.3.82"}
 ,{"id":228,"firstname":"Wava","lastname":"Feeney","branch":99,"phone":"713-039-4825","oversessions":false,"suspended":false,"temporary":true,"locked":true,"secure":true,"ip":"22.108.143.127"}
 ,{"id":279,"firstname":"Susanna","lastname":"McKenzie","branch":10,"phone":"514-414-5985","oversessions":true,"suspended":false,"temporary":true,"locked":true,"secure":true,"ip":"147.100.107.131"}
 ,{"id":102,"firstname":"Jaylen","lastname":"Mayert","branch":99,"phone":"515-936-3518","oversessions":false,"suspended":true,"temporary":true,"locked":true,"secure":true,"ip":"137.35.222.202"}
 ,{"id":236,"firstname":"Marlen","lastname":"Zboncak","branch":99,"phone":"730-009-7143","oversessions":true,"suspended":false,"temporary":true,"locked":true,"secure":false,"ip":"188.171.35.175"}
 ,{"id":162,"firstname":"Hope","lastname":"Friesen","branch":10,"phone":"781-143-4537","oversessions":false,"suspended":true,"temporary":true,"locked":false,"secure":false,"ip":"171.152.249.7"}
 ,{"id":277,"firstname":"Hipolito","lastname":"VonRueden","branch":99,"phone":"701-372-7698","oversessions":true,"suspended":true,"temporary":true,"locked":true,"secure":false,"ip":"166.158.143.113"}
 ,{"id":160,"firstname":"Gloria","lastname":"Kris","branch":99,"phone":"473-883-2392","oversessions":false,"suspended":true,"temporary":false,"locked":false,"secure":true,"ip":"114.125.251.34"}
 ,{"id":198,"firstname":"Nova","lastname":"Borer","branch":99,"phone":"561-003-5953","oversessions":false,"suspended":true,"temporary":false,"locked":false,"secure":false,"ip":"162.138.120.65"}
 ,{"id":162,"firstname":"Cristobal","lastname":"Bogisich","branch":99,"phone":"238-191-8469","oversessions":true,"suspended":false,"temporary":true,"locked":false,"secure":true,"ip":"249.168.167.229"}
 ,{"id":282,"firstname":"Ernie","lastname":"Daugherty","branch":99,"phone":"009-462-6406","oversessions":false,"suspended":false,"temporary":false,"locked":false,"secure":false,"ip":"233.190.149.85"}
 ,{"id":101,"firstname":"Scottie","lastname":"Mante","branch":10,"phone":"580-696-5429","oversessions":true,"suspended":true,"temporary":true,"locked":false,"secure":true,"ip":"12.250.202.35"}
 ,{"id":132,"firstname":"Saul","lastname":"Jaskolski","branch":10,"phone":"170-224-8535","oversessions":false,"suspended":true,"temporary":true,"locked":true,"secure":false,"ip":"91.100.95.118"}
 ];
