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



const allbtn = document.getElementsByClassName("all-btn");

for (const btn of allbtn) {
    btn.addEventListener("click", function (e) {
          
        // // Handle Noakhali donation
        // let Noakhali_donation = parseInt(document.getElementById("Noakhali_amount").innerText);
        // let Noakhali_input = parseInt(document.getElementById('WRITE_AMOUNT').value) || 0; // Default to 0 if input is invalid
        // Noakhali_donation += Noakhali_input;
        // document.getElementById("Noakhali_amount").innerText = Noakhali_donation;

        // // Handle Feni donation
        // let Feni_donation = parseInt(document.getElementById("Feni_amount").innerText);
        // let Feni_input = parseInt(document.getElementById('WRITE_AMOUNT2').value) || 0;
        // Feni_donation += Feni_input;
        // document.getElementById("Feni_amount").innerText = Feni_donation;

        // // Handle Quota donation
        // let quota_donation = parseInt(document.getElementById("quota_amount").innerText);
        // let quota_input = parseInt(document.getElementById('WRITE_AMOUNT3').value) || 0;
        // quota_donation += quota_input;
        // document.getElementById("quota_amount").innerText = quota_donation;

        // document.getElementById('WRITE_AMOUNT').value = "";
        // document.getElementById('WRITE_AMOUNT2').value = "";
        // document.getElementById('WRITE_AMOUNT3').value = "";

        play("Noakhali_amount","WRITE_AMOUNT");
        play("Feni_amount","WRITE_AMOUNT2");
        play("quota_amount","WRITE_AMOUNT3");


    });
}

function play(elementID1,elementID2){
    let donation = parseInt(document.getElementById(elementID1).innerText);
    let input_value = parseInt(document.getElementById(elementID2).value) || 0;
    donation += input_value;
    document.getElementById(elementID1).innerText = donation;
    document.getElementById(elementID2).value = "";
}