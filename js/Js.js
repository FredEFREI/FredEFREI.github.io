function DisplayComment(){
    const msg=document.comment_cmt.comment.value
    if(msg!=="" && grade!==0) {
        document.getElementById('etoile1').setAttribute('src', '../img/1etoilevide.jpg')
        document.getElementById('etoile2').setAttribute('src', '../img/1etoilevide.jpg')
        document.getElementById('etoile3').setAttribute('src', '../img/1etoilevide.jpg')
        document.getElementById('etoile4').setAttribute('src', '../img/1etoilevide.jpg')
        document.getElementById('etoile5').setAttribute('src', '../img/1etoilevide.jpg')
        const newspace = document.createElement('thead')
        const newItem = document.createElement('tr')
        const rep_Mn1 = document.createElement('img')
        const table = document.querySelector('.display_data_text')
        rep_Mn1.setAttribute('style','border-radius:1dvh 1dvh 0 0;height:3dvh;margin-bottom:-5px;margin-top:10px;border-left:solid black 2px;border-top:solid black 1.5px')
        switch (grade){
            case 1:
                rep_Mn1.setAttribute('src', '../img/1etoile.jpg')
                break
            case 2:
                rep_Mn1.setAttribute('src', '../img/2etoiles.jpg')
                break
            case 3:
                rep_Mn1.setAttribute('src', '../img/3etoiles.jpg')
                break
            case 4:
                rep_Mn1.setAttribute('src', '../img/4etoiles.jpg')
                break
            default:
                rep_Mn1.setAttribute('src', '../img/5etoiles.jpg')
                break
        }
        const rep_M2=document.createElement('td')
        rep_M2.textContent=msg
        newItem.append(rep_Mn1)
        newspace.append(newItem,rep_M2)
        table.appendChild(newspace)
        document.comment_cmt.comment.value=""
        document.comment_cmt.comment.placeholder="Thank you for your comment !"
        setTimeout(DisplaySentMessage,5000)
        grade=0
    }
}
let ALPHA=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let num=["0","1","2","3","4","5","6","7","8","9"]
let symbol=["@"," ","&","~","#","^","-","_","=","^","%","*",",",";",".",":","!","§"]

function Signin(){
    const firstname=document.querySelector('.firstname').value
    const name=document.querySelector('.name').value
    const mail=document.querySelector('.mail').value
    const tel=document.querySelector('.tel').value
    const surname=document.querySelector('.surname').value
    const passw=document.querySelector('.password').value
    const confpassw=document.querySelector('.confpassword').value

    let text=""
    let nonum=ALPHA+alpha+symbol
    let check=0

    if(firstname==="" || name==="" || mail==="" || tel==="" || surname==="" || passw==="" || confpassw===""){
        text+="Please complete all fields\n"
    }
    else {
        if(mail!=="" && Checking(mail,symbol,0,1)===false){
            text+="Mail must have'@'\n"
            check=check-1
        }
        if(tel!=="" && tel.length<10 || Checking(tel,nonum,0,nonum.length)){
            text+="Please check your number phone\n"
            check=check-1
        }
        check++
    }

    if (passw.length >= 8 && Checking(passw,ALPHA,0,ALPHA.length)===true && Checking(passw,alpha,0,alpha.length)===true && Checking(passw,num,0,num.length)===true && Checking(passw,symbol,0,symbol.length)===true) {
        if (passw !== confpassw) {
            text+="Both passwords must match."
        }
        else {
            check++
        }
    }
    else {
        text+="Your password must at least:\n"
        if (passw.length < 8) {
            text+="have 8 characters\n"
        }
        if (Checking(passw,ALPHA,0,ALPHA.length)===false) {
           text+="have a capital letter\n"
        }
        if (Checking(passw,alpha,0,alpha.length)===false) {
            text+="have a lowercase letter\n"
        }
        if (Checking(passw,num,0,num.length)===false) {
            text+="have a number\n"
        }
        if (Checking(passw,symbol,0,symbol.length)===false) {
            text+="have a special character\n"
        }
        document.querySelector('.password').value=""
        document.querySelector('.confpassword').value=""
    }
    if(check!==2){
        alert(text)
    }
    else {
        document.querySelector('.tolog').setAttribute("href","Login.html")
    }

}
function Login(){
    const surname=document.querySelector('.surname').value
    const passw=document.querySelector('.password').value

    let text=""

    if(surname==="" || passw===""){
        text+="Please complete all fields\n"
    }
    else if (passw.length >= 8 && Checking(passw,ALPHA,0,ALPHA.length)===true && Checking(passw,alpha,0,alpha.length)===true && Checking(passw,num,0,num.length)===true && Checking(passw,symbol,0,symbol.length)===true) {
        document.querySelector('.tohome').setAttribute('href','Home.html')
    }
    else {
        text+="Your password must at least:\n"
        if (passw.length < 8) {
            text+="have 8 characters\n"
        }
        if (Checking(passw,ALPHA,0,ALPHA.length)===false) {
            text+="have a capital letter\n"
        }
        if (Checking(passw,alpha,0,alpha.length)===false) {
            text+="have a lowercase letter\n"
        }
        if (Checking(passw,num,0,num.length)===false) {
            text+="have a number\n"
        }
        if (Checking(passw,symbol,0,symbol.length)===false) {
            text+="have a special character\n"
        }
        document.querySelector('.password').value=""
    }
    if(text!==""){
        alert(text)
    }
}

function Checking(sc,verified,debut,fin){
    let bool = false;
    for (let i=debut;i<fin;i++) {
        for(let j=0;j<sc.length;j++){
            if(verified[i]===sc.charAt(j)){
                bool=true
                break
            }
        }
        if(bool===true){
            break
        }
    }
    return bool
}
function ForAbout(){
    if(document.querySelector('.comment').value!==""){
        document.querySelector('.comment').value=""
        document.querySelector('.comment').placeholder="Thank you for your message ! We will answer you soon."
        setTimeout(DisplaySentMessage, 5000)
    }
}
function DisplaySentMessage(){
    document.querySelector('.comment').placeholder="Message"
}
let grade=0
function Star1Full(){
    document.getElementById('etoile1').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile2').setAttribute('src', '../img/1etoilevide.jpg')
    document.getElementById('etoile3').setAttribute('src', '../img/1etoilevide.jpg')
    document.getElementById('etoile4').setAttribute('src', '../img/1etoilevide.jpg')
    document.getElementById('etoile5').setAttribute('src', '../img/1etoilevide.jpg')
    grade=1
}
function Star2Full(){
    document.getElementById('etoile1').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile2').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile3').setAttribute('src', '../img/1etoilevide.jpg')
    document.getElementById('etoile4').setAttribute('src', '../img/1etoilevide.jpg')
    document.getElementById('etoile5').setAttribute('src', '../img/1etoilevide.jpg')
    grade=2
}
function Star3Full(){
    document.getElementById('etoile1').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile2').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile3').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile4').setAttribute('src', '../img/1etoilevide.jpg')
    document.getElementById('etoile5').setAttribute('src', '../img/1etoilevide.jpg')
    grade=3
}
function Star4Full(){
    document.getElementById('etoile1').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile2').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile3').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile4').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile5').setAttribute('src', '../img/1etoilevide.jpg')
    grade=4
}
function Star5Full(){
    document.getElementById('etoile1').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile2').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile3').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile4').setAttribute('src', '../img/1etoilepleine.jpg')
    document.getElementById('etoile5').setAttribute('src', '../img/1etoilepleine.jpg')
    grade=5
}
function CheckRsrv(){
    let date=document.getElementById('date').value
    let time=document.getElementById('time').value
    let nmbppl=document.getElementById('nmbppl').value
    let text=""
    if(date===""){
        text+=" choose a date"
    }
    if(time===""){
        text+=" choose a hour"
    }
    if(nmbppl===""){
        text+=" indicate for how many people is"
    }
    if(date==="" || time==="" || nmbppl===""){
        alert("Please"+text)
    }
    else{
        alert("Okay your place is reserve on "+date+" at "+time+" for "+nmbppl+" people. Thank you !")

    }
}
