const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const ques =document.getElementById("question");
noBtn.addEventListener("click", ()=>{
    let rand =Math.floor(Math.random()*(500-100)+1);
    let rand2 =Math.floor(Math.random()*(-300-100)+1);
    noBtn.style.transform="translate("+rand+"px, "+rand2+"px)";
});

yesBtn.addEventListener("click", ()=>
{
    ques.innerHTML=" I love you too &#9829"
})