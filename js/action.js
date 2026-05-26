function calculate(){

  let regCount, vipCount, stuCount;
  let regPrice = 12.50
  let stuPrice = 9
  let vipPrice = 25

  
  regCount = parseInt(prompt("How many Regular: "));
  stuCount = parseInt(prompt("How many Student: "));
  vipCount = parseInt(prompt("How many VIP: "));
  let tableCt = `<table>
                  <thead>
                    <tr>
                      <td colspan=2>Info</td>
                    </tr>
                  </thead>
                  <tbody>
  `

  if(Number.isFinite(regCount) && Number.isFinite(stuCount) && Number.isFinite(vipCount)){
    //Display table with quantities
    tableCt += `
    <tr><td>REG Ticket</td><td>${regCount}x${regPrice.toFixed(2)}</td></tr>
    <tr><td>STU Ticket</td><td>${stuCount}x${stuPrice.toFixed(2)}</td></tr>
    <tr><td>VIP Ticket</td><td>${vipCount}x${vipPrice.toFixed(2)}</td></tr>
    </tbody></table>
    `
    document.getElementById("receptArea").innerHTML = tableCt;

  }else{
    //Show an error 
    document.getElementById("receptArea").innerHTML= 
    `<h2>Invalid Inputs, Try Again</h2>`
  }
}