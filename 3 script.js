function gethistory(){
    return document.getElementById("history-value").innerText;
}
function printhistory(num){
    document.getElementById("history-value").innerText=num;
}
function getoutput(){
    return document.getElementById("output-value").innerText;

}
function printoutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }else{
        document.getElementById("output-value").innerText=getformattedNumber(num);
    }
    
}

/*this function is used to out , commas in numbers when number is larger */
/*This function reads the number and returns the comma seperated number */
function getformattedNumber(num){
    if(num=="-"){ //at 17:45
        return "";
    }    
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}

//to manipulate the comma seperated value we need to remove the commas first 
function NoCommaAgain(num){
    return  Number(num.replace(/,/g,'')); //character you want to replace should be placed between / and /g 
}

//NaN: means not a number

//getting symbols/operators 
var operators=document.getElementsByClassName("buttons-symbol");
for(var i=0;i<operators.length;i++){
    operators[i].addEventListener('click',function(){
        //alert("user click:"+this.id);
        if(this.id=='clear'){
            printhistory("");
            printoutput("");  
        }
        if(this.id=="back"){ // at 15:30
            var output=NoCommaAgain(getoutput()).toString();
            if(output){ //if output is  a value
                output=output.substr(0,output.length-1);
                printoutput(output);

            }
        }else{
            var output=getoutput();
            var history=gethistory();
            if(output==""&& history!=""){ //18:45
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output=output=="" ? output: NoCommaAgain(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printoutput(result);
                    printhistory("");
                }
                else{
                    history=history+this.id;
                    printhistory(history);
                    printoutput("");

                }
            }
        }
    });
}

var numberClicked=document.getElementsByClassName("numbers");
for(var i=0;i<numberClicked.length;i++){
    numberClicked[i].addEventListener('click',function(){
        //alert("user click:"+this.id);
        var outputNum=NoCommaAgain(getoutput());
        if(outputNum!=NaN){ //if o/p is a number
            outputNum=outputNum+this.id;
            printoutput(outputNum);
        } 
    })
}
