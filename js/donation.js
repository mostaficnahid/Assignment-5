document.getElementById('btn-noa-donation').addEventListener('click',function(event){
    event.preventDefault();
    const noaDonation = document.getElementById('input-noa-donation').value;
    if(noaDonation=== Number){
const mainBalance= document.getElementById('main-balance').innerText;
const noa =document.getElementById('noa').innerText;
const noaNumber = parseFloat(noa);
const noaDonationNumber=parseFloat(noaDonation);
const mainBalanceNumber=parseFloat(mainBalance);
const newBalance =mainBalanceNumber - noaDonationNumber;
const noaNewBalance =  noaNumber + noaDonationNumber;
console.log(newBalance);
console.log(noaNewBalance);

document.getElementById('main-balance').innerText=newBalance;
document.getElementById('noa').innerText=noaNewBalance;
    }else{
        alert('Please Enter Valid Amount');
    }
})
document.getElementById('btn-feni-donation').addEventListener('click',function(event){
    event.preventDefault();
    const feniDonation = document.getElementById('input-feni-donation').value;
    if(feniDonation=== Number){
        const mainBalance= document.getElementById('main-balance').innerText;
        const feni =document.getElementById('feni').innerText;
        const feniNumber = parseFloat(feni);
        const feniDonationNumber=parseFloat(feniDonation);
        const mainBalanceNumber=parseFloat(mainBalance);
        const newBalance =mainBalanceNumber - feniDonationNumber;
        const feniNewBalance =  feniNumber + feniDonationNumber;
        console.log(newBalance);
        console.log(feniNewBalance);
        
        document.getElementById('main-balance').innerText=newBalance;
        document.getElementById('feni').innerText=feniNewBalance;
            }else{
                alert('Please Enter Valid Amount');
            }
        })

document.getElementById('btn-aid-donation').addEventListener('click',function(event){
    event.preventDefault();

    const aidDonation = document.getElementById('input-aid-donation').value;
    if(aidDonation=== Number){
        const mainBalance= document.getElementById('main-balance').innerText;
        const aid =document.getElementById('aid').innerText;
        const aidNumber = parseFloat(aid);
        const aidDonationNumber=parseFloat(aidDonation);
        const mainBalanceNumber=parseFloat(mainBalance);
        const newBalance =mainBalanceNumber - aidDonationNumber;
        const aidNewBalance =  aidNumber + aidDonationNumber;
        console.log(newBalance);
        console.log(aidNewBalance);
        
        document.getElementById('main-balance').innerText=newBalance;
        document.getElementById('aid').innerText=aidNewBalance;
            }else{
                alert('Please Enter Valid Amount');
            }
        })
