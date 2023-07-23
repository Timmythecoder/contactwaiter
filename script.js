function sendMessage() {
    const tableNumber = document.getElementById("tableNumber").value;
    const customerName = document.getElementById("customerName").value;
  
    if (!tableNumber || !customerName) {
      alert("Please enter both Table Number and Your Name.");
      return;
    }
  
    const webhookUrl = "https://discord.com/api/webhooks/1132497093227982940/vqu_5-JwOO-CyVfygF8ss6xXlqMSduW0jBzNig-RUSHHflDQf2XtGLaDnLDqGwu0tIE8";
    const message = `Table Number: ${tableNumber}\nCustomer Name: ${customerName}`;
  
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: message }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Waiter has been notified.");
        document.getElementById("tableNumber").value = "";
        document.getElementById("customerName").value = "";
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
      });
  }
  