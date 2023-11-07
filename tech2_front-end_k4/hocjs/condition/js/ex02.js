/*
31 ngày: 1, 3, 5, 7, 8, 10, 12
30 ngày: 4, 6, 9, 11
28 ngày: 2
*/
var month = 2;
var year = 2023;

if (month >= 1 && month <= 12 && parseInt(month) == month){
    switch(month){
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(`Tháng ${month} có 30 ngày`);          
        break;
        
        case 2:
            if (year % 4 == 0) {
                console.log(`Tháng ${month} có 29 ngày`);  
            }else{
                console.log(`Tháng ${month} có 28 ngày`);  
            }
               
        break;
        
        default: 
        console.log(`Tháng ${month} có 31 ngày`);     
    }
    
}else{
    console.log('Tháng không đúng. Vui lòng thử lại');
}
