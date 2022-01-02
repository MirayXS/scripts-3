function main(){setTimeout(()=>{var username=document.querySelectorAll('[data-name]')[0]["dataset"].name
var premiumButton=document.getElementById("upgrade-now-button")
if(premiumButton){premiumButton.innerHTML="AltbotV2"
premiumButton.href="https://discord.io/altbot"
premiumButton.style.backgroundColor='#1e90ff'
premiumButton.style.borderColor='#1e90ff'}
document.getElementsByClassName("btn-full-width btn-common-play-game-lg btn-primary-md btn-min-width")[0].title="Join with "+username
var playCopy=document.getElementsByClassName("btn-full-width btn-common-play-game-lg btn-primary-md btn-min-width")[0].cloneNode(true);playCopy.style.width="10px"
playCopy.style.marginLeft="10px"
playCopy.style.backgroundColor="#1e90ff"
playCopy.style.borderColor="#1e90ff"
playCopy.setAttribute("type","AltBotV2")
playCopy.setAttribute("onclick",`window.location.href = 'http://localhost:5050/launch?gameurl=${document.location.origin+document.location.pathname}'`)
playCopy.title="Join with AltbotV2"
document.getElementsByClassName("btn-full-width btn-common-play-game-lg btn-primary-md btn-min-width")[0].parentNode.appendChild(playCopy);document.getElementsByClassName("btn-full-width btn-common-play-game-lg btn-primary-md btn-min-width")[1].title="Join with AltbotV2"
setInterval(()=>{if(document.getElementsByClassName("btn-min-width btn-control-xs btn-more rbx-refresh refresh-link-icon")[0]){var currentHref=document.location.origin+document.location.pathname
var currentLength=document.getElementsByClassName("btn-full-width btn-control-xs rbx-game-server-join").length
var currentNumber=currentLength-1
for(var classNum=0;classNum<currentNumber;classNum++){if(document.getElementsByClassName("btn-full-width btn-control-xs rbx-game-server-join")[classNum].classList.contains('joinButton')==false&&document.getElementsByClassName("btn-full-width btn-control-xs rbx-game-server-join")[classNum].classList.contains('CHECKED')==false){var jobID=document.getElementsByClassName("btn-full-width btn-control-xs rbx-game-server-join")[classNum].parentNode.parentNode.attributes["data-gameid"].value
var joinButton=document.getElementsByClassName("btn-full-width btn-control-xs rbx-game-server-join")[classNum].cloneNode(true);joinButton.style.backgroundColor="#1e90ff"
joinButton.innerHTML="Join with AltBotV2"
joinButton.title="Join with AltbotV2"
joinButton.href="http://localhost:5050/launch?gameurl="+currentHref+"&instanceId="+jobID
joinButton.setAttribute("onclick","AltBotV2")
joinButton.classList.add("joinButton")
document.getElementsByClassName("btn-full-width btn-control-xs rbx-game-server-join")[classNum].parentNode.appendChild(joinButton);document.getElementsByClassName("btn-full-width btn-control-xs rbx-game-server-join")[classNum].classList.add("CHECKED")
document.getElementsByClassName('btn-full-width btn-control-xs rbx-game-server-join')[classNum].innerHTML="Join with "+username
document.getElementsByClassName('btn-full-width btn-control-xs rbx-game-server-join')[classNum].title="Join with "+username}}}},250);},3000);}
window.onload=main()