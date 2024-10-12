function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getLinkForLastName(lastName) {
  if (!lastName) {
    return "Please enter a last name.";
  }

  const firstLetter = lastName.charAt(0).toUpperCase();
  
  const zoomLinks = {
    'AB': 'https://zoom.us/j/1111111111',
    'CD': 'https://zoom.us/j/2222222222',
    'EG': 'https://zoom.us/j/3333333333',
    'HIJ': 'https://zoom.us/j/4444444444',
    'KL': 'https://zoom.us/j/5555555555',
    'MNO': 'https://zoom.us/j/6666666666',
    'PR': 'https://zoom.us/j/7777777777',
    'S': 'https://zoom.us/j/8888888888',
    'TWYZ': 'https://zoom.us/j/9999999999'
  };

  for (const [letters, link] of Object.entries(zoomLinks)) {
    if (letters.includes(firstLetter)) {
      return `Your Zoom link is: ${link}`;
    }
  }

  return "No Zoom link found for this last name. Please contact the organizer.";
}
