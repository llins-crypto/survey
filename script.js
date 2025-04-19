// Simulated M-Pesa Payment
document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    alert("Redirecting to M-Pesa...");
    
    setTimeout(() => {
      alert("Payment of Ksh 200 successful via M-Pesa!");
      window.location.href = "thankyou.html";
    }, 2000);
  });
  
  // Simulated Login
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
  
    if (email && password) {
      alert("Login successful (simulated)!");
      // You can redirect to a dashboard page here
    } else {
      alert("Login failed. Please try again.");
    }
  });function payViaMpesa() {
    alert("To complete your registration:\n\nSend Ksh 200 to M-Pesa number: 0718332071\n\nThen come back and click 'Submit'");
  }