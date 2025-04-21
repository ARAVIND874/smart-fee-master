// Login system
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "1234") {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("billingPage").classList.remove("hidden");
  } else {
    document.getElementById("loginError").style.display = "block";
  }
});

// Add bill
document.getElementById("billForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const regNo = document.getElementById("registerNo").value;
  const name = document.getElementById("studentName").value;
  const dept = document.getElementById("department").value;
  const type = document.getElementById("billType").value;
  const amount = document.getElementById("billAmount").value;
  const date = document.getElementById("billDate").value;

  const tbody = document.querySelector("#billsTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${regNo}</td>
    <td>${name}</td>
    <td>${dept}</td>
    <td>${type}</td>
    <td>₹${amount}</td>
    <td>${date}</td>
    <td><button onclick="showReceipt('${regNo}','${name}','${dept}','${type}','${amount}','${date}')">Print</button></td>
  `;

  tbody.appendChild(row);
  this.reset();
});

// Show receipt
function showReceipt(reg, name, dept, type, amount, date) {
  document.getElementById("billReceipt").classList.remove("hidden");
  document.getElementById("rReg").textContent = reg;
  document.getElementById("rName").textContent = name;
  document.getElementById("rDept").textContent = dept;
  document.getElementById("rType").textContent = type;
  document.getElementById("rAmount").textContent = amount;
  document.getElementById("rDate").textContent = date;
  document.getElementById("randomNum").textContent = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("issueDate").textContent = new Date().toLocaleDateString();
}

// Print receipt only
function triggerPrint() {
  window.print();
}
row.innerHTML = `
  <td>${regNo}</td>
  <td>${name}</td>
  <td>${dept}</td>
  <td>${type}</td>
  <td>₹${amount}</td>
  <td>${date}</td>
  <td>
    <button onclick="showReceipt('${regNo}','${name}','${dept}','${type}','${amount}','${date}')">Print</button>
    <button onclick="deleteRow(this)">Delete</button>
  </td>
`;
// Delete row
function deleteRow(btn) {
  const row = btn.closest("tr");
  row.remove();
}
