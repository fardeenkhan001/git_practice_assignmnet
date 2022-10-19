let str = "moon";
let rev_str="";
    for(let i=N-1;i>=0;i--){
        rev_str+=str[i];
    }
    if(str==rev_str){
    console.log("Yes");
    }
    else{
        console.log("No");
    }