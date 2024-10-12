function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getLinkForLastName(lastName) {
  // Implement your logic here to get the correct link based on the last name
  // This is just a placeholder example
  var firstLetter = lastName.charAt(0).toUpperCase();
  if (firstLetter >= 'A' && firstLetter <= 'C') {
    return "Zoom link for A-C: https://zoom.us/j/example1";
  } else if (firstLetter >= 'D' && firstLetter <= 'F') {
    return "Zoom link for D-F: https://zoom.us/j/example2";
  } // ... add more conditions as needed
  else {
    return "No link found for this last name.";
  }
}
