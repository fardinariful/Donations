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
          
        
        //history_info_container
       
        play("Noakhali_amount","WRITE_AMOUNT","noakhali_name","history_info_container");
        play("Feni_amount","WRITE_AMOUNT2","feni_name","history_info_container");
        play("quota_amount","WRITE_AMOUNT3","quota_name","history_info_container");
 

    });
}

function play(elementID1,elementID2,elementID3,HistoryID){
    let donation = parseInt(document.getElementById(elementID1).innerText);
    let input_value = parseInt(document.getElementById(elementID2).value);
    if(input_value > 0){
        const amount=parseInt(document.getElementById("Total_amount").innerText);
        const updated_total=amount-input_value;
        if(updated_total < 0){
            alert("amount short");
            return;
        }

        donation += input_value;
        document.getElementById(elementID1).innerText = donation;
        document.getElementById(elementID2).value = "";

        document.getElementById("Total_amount").innerText=updated_total;
        const name=document.getElementById(elementID3).innerText
        const history_info=document.getElementById(HistoryID);
        const paragraph=document.createElement("p");
        paragraph.classList.add("text-xl","font-semibold","p-4","border","border-green-400","mt-3");
       
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        paragraph.innerText=`${input_value} Taka is Donated on ${name} at ${formattedDate }`;
        history_info.appendChild(paragraph);
        

    }
    

}


