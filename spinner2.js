let array = ['|','/','-','\\','|','/','-','|']
const delay = 100;
let delaySum = 0;
for(let item of array){
    setTimeout(() => {
        process.stdout.write(`\r${item}    `);
      }, delaySum);
delaySum += delay
}

  
  