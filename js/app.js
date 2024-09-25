// Select the Donation and History buttons
const donationButton = document.getElementById('all-btn2');
const historyButton = document.getElementById('all-btn3');

// Select the Donation and History sections
const donationSection = document.querySelector('section.donation');
const historySection = document.querySelector('section.history');

// Function to display the donation section and hide the history section
function showDonation() {
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
}

// Function to display the history section and hide the donation section
function showHistory() {
    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');
}

// Initially show the donation section
showDonation();

// Event listeners for the buttons
donationButton.addEventListener('click', showDonation);
historyButton.addEventListener('click', showHistory);


const allbtn=document.getElementsByClassName("all-btn");
for(const btn of allbtn)
{
    btn.addEventListener("click",function(e){

        
         const Noakhali_donation=document.getElementById("Noakhali_amount").innerText;
         const f=parseInt(Noakhali_donation);
         const amount=document.getElementById("WRITE_AMOUNT").value;
         const amount1=parseInt(amount);
         document.getElementById("Noakhali_amount").innerText=Noakhali_donation;
       
        // const amount=document.getElementById("WRITE_AMOUNT").value;
        // if(amount!==0 && typeof amount!=='string')
        // {
        //     console.log("dhorsi");
        // }
        // else{
        //     console.log("mara khao")
        // }
    })
   
 
}