module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  let enhancement = 0; 

  if(item.enhancement >= 20){
    enhancement = 20;
  } else {
    enhancement = item.enhancement + 1;
  }

  return {...item,
    enhancement: enhancement
  };
}

function fail(item) {
  let durability = 0;
  let enhancement = 0;

  if(item.enhancement < 15){
    durability = item.durability - 5;
  } else if(item.enhancement >= 15) {
    durability = item.durability - 10;
  } else if(item.enhancement > 16){
    enhancement = item.enhancement - 1;
  }

  return { ...item,
    durability: durability,
    enhancement: enhancement
  };
}

function repair(item) {
  return { ...item,
          durability: 100
         };
}

function get(item) {
  return { ...item };
}
