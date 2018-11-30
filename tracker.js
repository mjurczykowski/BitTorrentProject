//Type your code in this function
function Tracker(){

  let seeds =[];
  let percent = [];

  //implement all six functions below
function numOfSeeds(list){
  let found = 0;
  for(let i=0; i<list.length; i++){
    if(list [1] !== null){
      found ++;;
    }
  }
  return found;
}

function addSeed(s){
  list.push(s);
  return list;
}

function removeSeed(list,name){
  for(let i=0; i<list.length; i++){
    if(list[i]===name){
      return null
    }
  }
}
function reportHealth(list){
  let sum=0;
  let count=0;

  for(let i=0; i < percent.length; i++){
    if(percent[i] !=0){
      sum =sum + percent[i];
      count++
    }
  }
  return sum/count;
}
function update(){
  for(let i = 0; i < seeds.length; i++){
    let r = Math.random()
    if(r > seeds[i]){
      seeds[i] = r;
    }
    else(r < 0.03){
      seeds[i] = null;
      percent[i] = 0;
    }
  }
}