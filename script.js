// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Nice, you triggered this alert message!', 'success')
//   })
// }
function calculate(type)
  {
    console.log("type",type);
    
    let amount = document.getElementById('amount')
    if(amount.value){

    //ids
    let listId = type+"-list"
    let countId = type+"-count"
    let totalId = type+"-total"
    let averageId = type+"-average"
    console.log("listIsd",listId);
    //1-text
    let list = document.getElementById(listId)
    if(list.innerText)
    list.innerHTML = list.innerHTML + " + "+ amount.value;
    else
    list.innerHTML = amount.value;

    //2 ->count
    let count = document.getElementById(countId)
    count.innerHTML = Number(count.innerHTML) + 1;

     //4 ->total
     let total = document.getElementById(totalId)
     total.innerHTML = Number(total.innerHTML) + Number(amount.value);

     //3 ->average
     let average = document.getElementById(averageId)
     average.innerHTML = (Number(total.innerHTML) / (Number(count.innerHTML))).toFixed(2);;

    }
    else
    alert("Enter a value")
  }

  function undo(type)
  {
    //console.log("type",type);
    
    

    //ids
    let listId = type+"-list"
    let countId = type+"-count"
    let totalId = type+"-total"
    let averageId = type+"-average"
    console.log("listIsd",listId);

    let count = document.getElementById(countId)
    let countNum = Number(count.innerText)
    console.log("countNum",countNum);
    if(countNum>0){

    
    //1-text
    let list = document.getElementById(listId)
    let listString = String(list.innerText)
    console.log("list.innerText",list.innerText);
    console.log("listString",listString);

    let idx =  listString.lastIndexOf("+");
    console.log("idx",idx);
    let str = listString.substring(idx+1, listString.length);
    let str2 = listString.substring(0, idx);

    console.log("str",str);
    console.log("str2",str2);
    let num = Number(str);
    console.log("num",num);
    list.innerHTML = str2
    

    

    //2 ->count
    let count = document.getElementById(countId)
    count.innerHTML = Number(count.innerHTML) - 1;

     //4 ->total
     let total = document.getElementById(totalId)
     total.innerHTML = Number(total.innerHTML) - num;

     //3 ->average
     let average = document.getElementById(averageId)
     average.innerHTML = (Number(total.innerHTML) / (Number(count.innerHTML))).toFixed(2);

    
  }
  else
  alert("Nothing to remove")
  }

// const calculate = (type) => {
//   let amount = document.getElementById('amount')
//   console.log("the type is: ",amount);
//   //alert("hi")

// }