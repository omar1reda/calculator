
var allNumber= document.getElementById('num')


function Del()
{
    allNumber.value=allNumber.value.slice(0,-1)
}

function Cl()
{
    allNumber.value=""
}

function Subtract()
{
    var n = "-"
    allNumber.value += n
}

function decimalpoint()
{
    var n ='.'
    allNumber.value += n
}

function plural()
{
    var n ='+'
    allNumber.value += n
}
function Equal()
{
   
    try{
        allNumber.value =eval(allNumber.value);
    }
    catch(err)
    {
        allNumber.value='هنهزر بقي ؟'
    }
}
function Multiply()
{
    var n ='*'
    allNumber.value += n
}
function Division()
{
    var n ='/'
    allNumber.value += n
}

function percent()
{
    var n ='%'
    allNumber.value += n
}

function Ziro()
{
    var n =0
    allNumber.value += n

}
function One()
{
    var n =1
allNumber.value += n
}

function two()
{
    var n =2
    allNumber.value += n
}
function Three()
{
    var n =3
    allNumber.value += n
}
function Four()
{
    var n =4
    allNumber.value += n
}
function Five()
{
    var n =5
    allNumber.value += n
}
function Six()
{
    var n =6
    allNumber.value += n
}
function Seven()
{
    var n =7
    allNumber.value += n
}
function Eight()
{
    var n =8
    allNumber.value += n
}
function  Nine()
{
    var n =9
    allNumber.value += n
    
}



