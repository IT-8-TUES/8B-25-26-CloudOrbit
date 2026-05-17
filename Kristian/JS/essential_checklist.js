const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
// Open the mobile menu when the hamburger menu button is clicked
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});
// Close the mobile menu when the close button (X) is clicked
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const totalItems = checkboxes.length;

  const overallTrackerText = document.querySelector('.tracker');
  const progressBarFill = document.querySelector('.progress-bar-fill');
  const percentageText = document.querySelector('.progress-bar-container').nextElementSibling;
  
  const successBanner = document.getElementById('success-banner');

  function updateProgress() {
    const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked').length;
    let percentage = 0;
    
    if (totalItems > 0) {
      percentage = Math.round((checkedItems / totalItems) * 100);
    }

    if (overallTrackerText) overallTrackerText.textContent = `${checkedItems} of ${totalItems} items packed`;
    if (progressBarFill) progressBarFill.style.width = `${percentage}%`;
    if (percentageText) percentageText.textContent = `${percentage}%`;

    checkboxes.forEach(checkbox => {
      const label = checkbox.nextElementSibling; 
      if (label) {
        if (checkbox.checked) {
          label.classList.add('crossed-out');
        } else {
          label.classList.remove('crossed-out');
        }
      }
    });

    const sections = document.querySelectorAll('.category-card');
    sections.forEach(section => {
      const sectionCheckboxes = section.querySelectorAll('input[type="checkbox"]');
      const sectionTotal = sectionCheckboxes.length;
      const sectionChecked = section.querySelectorAll('input[type="checkbox"]:checked').length;
      const sectionTracker = section.querySelector('.card-header span');
      
      if (sectionTracker) {
        sectionTracker.style.setProperty('display', 'inline-block', 'important');
        sectionTracker.style.setProperty('visibility', 'visible', 'important');
        sectionTracker.textContent = `${sectionChecked}/${sectionTotal}`;
        
        if (sectionChecked === sectionTotal && sectionTotal > 0) {
          sectionTracker.style.color = '#3c6e3d';
          sectionTracker.style.fontWeight = 'bold';
        } else {
          sectionTracker.style.color = '';
          sectionTracker.style.fontWeight = 'normal';
        }
      }
    });

    if (successBanner) {
      if (checkedItems === totalItems && totalItems > 0) {
        successBanner.style.display = 'block';
      } else {
        successBanner.style.display = 'none';
      }
    }
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
  });

  updateProgress();
});