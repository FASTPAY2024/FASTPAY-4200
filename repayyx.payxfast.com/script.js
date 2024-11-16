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
  mounted() {
    // Order expiration logic (using localStorage)
    const startTime = localStorage.getItem('orderStartTime') || Date.now();
    localStorage.setItem('orderStartTime', startTime);

    const checkOrderExpiration = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime >= none) { 
        window.location.href = 'order-expire.html';
      } else {
        setTimeout(checkOrderExpiration, 60000); 
      }
    };
    checkOrderExpiration();
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
        this.showPopup = true;
        setTimeout(() => {
          console.log('Submitted UTR:', this.utr);
          this.submittedUTRs.push(this.utr);
          window.location.href = 'success.html'; 
        }, 50000); 
      } else {
        this.$notify({ type: 'danger', message: 'Please enter UTR number' });
      }
    },
    payFailed() {
      console.log('Payment failed');
      this.showPopup = false; 
      this.$notify({ type: 'danger', message: 'Payment failed' });
      setTimeout(() => {
        window.location.href = 'bank.html'; 
      }, 1000); 
    },
    closePopup() { 
      this.showPopup = false;
    }
  }
});
