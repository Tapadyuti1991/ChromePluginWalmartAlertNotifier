let context;
function makeSomeNoise(){
    let o = context.createOscillator();
    o.type = "sine"
    let  g = context.createGain();
    o.connect(g);
    g.connect(context.destination);
    o.start(0);
    let frequency = 261.6;
    o.frequency.value = frequency;
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 5);
}

window.onload = function() {
    this.console.log("Welcome :) Stay Home Stay Safe")
    context = new AudioContext();
}


setInterval(function(){
    console.log("Call made");

    let cssVar = 'screenReaderOnlyText';
    if(document.getElementsByClassName(cssVar)) { 
    
        let flag = false;
        Array.from(document.getElementsByClassName("screenReaderOnlyText")).forEach(e =>{
            if(!e.innerHTML.includes("No")){
             flag = true;   
            }
        })

        if(flag){
            setInterval(function(){makeSomeNoise()},10000);
            
        } else{
            window.location.reload();  
        }
                
    } else {
        console.log("SomeThing is wrong. Contanct DEVTA ");
      
    };
},60000);
    
