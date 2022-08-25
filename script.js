var Holder=0,action='',dot=0;
function btnHandle(num)
{  
    if(action=='ansed'){ 
        action=''; 
        btnHandleAc();
    }   
    if(num == '.'){
        if(dot==1){ 
            return ;
        }else{        
            dot = 1;                
        }    
    }
    
    document.getElementById("monitor").value += num;   
    if(action == ''){
        Holder = document.getElementById("monitor").value;
    } 
}

function btnHandleAdd(){    
    if(action == 'add'){        
        var Cal1 = Number(Holder);
        var Cal2 = Number(document.getElementById("monitor").value);      
        var ans = Cal1+Cal2;
        console.log(Cal1, Cal2, ans);
        Holder = ans;
    }
    document.getElementById("monitor").value = "";
    action = 'add'; dot = 0;
   // console.log(Holder);

}

function btnHandleSub()
{
    document.getElementById("monitor").value = "";
    var Cal1 = Number(Holder);
    var Cal2 = Number(document.getElementById("monitor").value);
    Cal1=Cal1-Cal2; dot = 0;
    action = 'sub';
}
function btnHandleMul()
{   
    document.getElementById("monitor").value = "";
    var Cal1 = Number(Holder);
    var Cal2 = Number(document.getElementById("monitor").value);
    Cal1=Cal1*Cal2;
    action = 'mul'; dot = 0;


}
function btnHandleDiv()
{
    document.getElementById("monitor").value = "";
    var Cal1 = Number(Holder);
    var Cal2 = Number(document.getElementById("monitor").value);
    Cal1=Cal1/Cal2;
    action = 'div'; dot = 0;

}
function btnHandlePercent()
{
    document.getElementById("monitor").value = "";
    var Cal1 = Number(Holder);
    var Cal2 = Number(document.getElementById("monitor").value);
    Cal1=Cal2/100*Cal1;
    action = 'prsntg'; dot = 0;



}
function btnHandleAns(){    
    if(action == 'add'){        
        var Cal1 = Number(Holder);
        var Cal2 = Number(document.getElementById("monitor").value);
        Cal1 = Cal1+Cal2;         
        document.getElementById("monitor").value = Cal1;
        action='ansed';  dot = 0;  Holder=document.getElementById("monitor").value; 
    }
    else if(action == 'sub')
    {
        var Cal1 = Number(Holder);
        var Cal2 = Number(document.getElementById("monitor").value);
        Cal1 = Cal1-Cal2;         
        document.getElementById("monitor").value = Cal1;
        action='ansed';  dot = 0;  Holder=document.getElementById("monitor").value; 

    }
    else if(action == 'mul')
    {
        var Cal1 = Number(Holder);
        var Cal2 = Number(document.getElementById("monitor").value);
        Cal1 = Cal1*Cal2;         
        document.getElementById("monitor").value = Cal1;
        action='ansed';  dot = 0; Holder=document.getElementById("monitor").value; 

    }
    else if(action == 'div')
    {
        var Cal1 = Number(Holder);
        var Cal2 = Number(document.getElementById("monitor").value);
        Cal1 = Cal1/Cal2;         
        document.getElementById("monitor").value = Cal1;
        action='ansed';  dot = 0;  Holder=document.getElementById("monitor").value; 

    }
    else if(action == 'prsntg')
    {
        var Cal1 = Number(Holder);
        var Cal2 = Number(document.getElementById("monitor").value);
        Cal1=Cal2/100*Cal1;     
        document.getElementById("monitor").value = Cal1;
        action='ansed';  dot = 0;  Holder=document.getElementById("monitor").value; 

    }

}
function btnHandleCncl(){
    var str = document.getElementById("monitor").value;
    str = str.slice(0, -1); 
    document.getElementById("monitor").value = str;
}

function btnHandleAc()
{   
    Holder = '';  dot = 0;
    document.getElementById("monitor").value = "";
    action = "";
}
/* function btnHandleAdd()
{
    document.getElementById()
} */

 

document.addEventListener("keyup", function(e){
    // console.log(e);
    if((e.key>=0) && (e.key<=9)){
        btnHandle(e.key);
    }else if(e.key == '.'){
        btnHandle('.');
    }else if(e.key == '+'){
        btnHandleAdd();
    }else if(e.key == '-'){
        btnHandleSub();
    }else if(e.key == '*'){
        btnHandleMul();
    }else if(e.key == '/'){
        btnHandleDiv();
    }else if(e.key == '%'){
        btnHandlePercent();
    }else if(e.key == 'Enter'){
        btnHandleAns();
    }else  if(e.key == "Escape") {
        btnHandleAc();
    }
    else  if(e.key == "Backspace") {
      btnHandleCncl();    
    }
    else{
        console.log(e.key);
    }   
    
});

