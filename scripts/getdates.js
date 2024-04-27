// Get the current year and populate it in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date of the document and populate it in the footer
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
