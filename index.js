function distanceFromHqInBlocks (value) {
    if (value<42){
      return(42-value);
    }
    else {
  
    return(value-42);
  }
}

distanceFromHqInBlocks(44);

function distanceFromHqInFeet (value) {
    return distanceFromHqInBlocks(value)*264;
    
  }
  distanceFromHqInFeet (43);

  function distanceTravelledInFeet(a,b){
    if (b>a){
      return((b-a)*264);
    }
    else
      return((a-b)*264);
  }

  distanceTravelledInFeet(43,48);
  distanceTravelledInFeet(50,60);

  function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }

  calculatesFarePrice(43, 44);
  calculatesFarePrice(34, 32);