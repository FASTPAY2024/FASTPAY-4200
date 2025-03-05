function showNotification(message, isError = false) {
  const notification = document.getElementById("notification");
  notification.innerText = message;
  notification.className = isError ? "notification error" : "notification";
  notification.style.display = "block";
  
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

function copyText(text) {
  const tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = text;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  showNotification("Copy:"+text);
}

function submitUTR() {
  const utr = document.getElementById("utr").value;

  // Check if UTR is 12 digits long
  if (utr && utr.length === 12 && /^\d+$/.test(utr)) {
    showNotification("submited");

    // Show notification for redirection
        showNotification("submited");
        
    // Redirect to success.html after 10 seconds (10000 milliseconds)
    setTimeout(() => {
      window.location.href = "success.html";
    }, 10000); 

  } else {
    showNotification("Please enter a valid 12-digit UTR number.", true);
  }
}

function showError() {
  showNotification("Payment failed! Please try using a bank account.", true);
}

// Handle Submit UTR button click
document.getElementById("submit-utr").addEventListener("click", submitUTR);

// Handle Payment Failed button click (assuming you have a button with the ID "payment-failed-btn")
document.getElementById("payment-failed-btn").addEventListener("click", function() {
  window.location.href = "bank.html";
});
