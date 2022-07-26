// rocketship

countdown = 60
while (countdown >=0){
    if (countdown === 50){
        console.log("Orbiter transfers from ground to internal power")
        countdown-=1}
    else if(countdown ===31){
        console.log("Ground launch sequencer is go for auto sequence start")
        countdown-=1}
    else if(countdown ===16){
        console.log("Activate launch pad sound suppression system")
        countdown -=1}
    else if(countdown ===10){
        console.log("Activate main engine hydrogen burnoff system")
        countdown-=1}
    else if(countdown ===6){
        console.log("Main engine start")
        countdown-=1}
    else if(countdown === 0){
        console.log("Solid rocket booster ignition and liftoff! ")
        countdown-=1}
    else if(countdown >0){
    console.log("T-"+countdown+" seconds\n")
    countdown-=1}
}