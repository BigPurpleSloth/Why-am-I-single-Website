const reasons = [
    "You haven't found the right person yet",
    "You're too focused on your career",
    "You're too picky",
    "You're too afraid of commitment",
    "You haven't put yourself out there enough",
    "You're too focused on your hobbies",
    "You're not ready for a relationship",
    "You're too busy with other things",
    "You're too shy",
    "You haven't met enough new people",
    "You're too focused on yourself",
    "You're too focused on finding someone",
    "You're too scared to open up to others",
    "You're too intimidated by others",
    "You're too focused on your past",
    "You haven't found someone with the same values as you",
    "You're too independent",
    "You're not putting in enough effort",
    "You're not meeting the right people",
    "You're not ready for a serious relationship"
  ];
  
  const button = document.querySelector('#reason-button');
  const reasonDisplay = document.querySelector('#reason-display');
  
  button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    const randomReason = reasons[randomIndex];
    reasonDisplay.textContent = randomReason;
  });
  