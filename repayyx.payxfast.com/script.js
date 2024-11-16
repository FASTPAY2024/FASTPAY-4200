new Vue({
  el: '#app',
  data() {
    return {
      amount: 4200,
      vpa: 'sukh4580@pnb',
      name: 'SUKHVINDER SINGH',
      paymentMethod: '',
      utr: '',
      showPopup: false,
      submittedUTRs: [],
    };
  },
  methods: {
    copy(text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          this.$notify({ type: 'success', message: 'Copied to clipboard' });
        })
        .catch(err => {
          this.$notify({ type: 'danger', message: 'Failed to copy' });
        });
    },
    submitUTR() {
  if (this.utr) {
    if (this.submittedUTRs.includes(this.utr)) {
      this.$notify({ type: 'danger', message: 'This UTR has already been used' });
      return;
    }

    // Show the popup immediately
    this.showPopup = true;

    // Simulate a delay of 20 seconds for the redirect
    setTimeout(() => {
      console.log('Submitted UTR:', this.utr);
      this.submittedUTRs.push(this.utr);

      // Redirect to success.html after the delay
      window.location.href = 'success.html'; 
    }, 20000); // 20000 milliseconds = 20 seconds

  } else {
    this.$notify({ type: 'danger', message: 'Please enter UTR number' });
  }
    },
    payFailed() {
  console.log('Payment failed');

  // Close the success popup if it's open
  this.showPopup = false; 

  // Show a notification to the user
  this.$notify({ type: 'danger', message: 'Payment failed' });

  // Redirect to bank.html after a short delay (e.g., 1 second)
  setTimeout(() => {
    window.location.href = 'bank.html'; 
  }, 1000); 
}
