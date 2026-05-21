const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Get all the cards on the page in a simple list
    const cards = document.querySelectorAll('.card-container section');

    // 2. Get your 3 bottom buttons
    const greenBtn = document.querySelector('.btn-green');
    const orangeBtn = document.querySelector('.btn-orange');
    const blackBtn = document.querySelector('.btn-black') || document.querySelector('.btn-dark');

    // Helper function to remove glow from all cards and add it to just ONE
    function applyGlow(targetCard) {
        if (!targetCard) return;
        
        // Remove glow from every card first
        cards.forEach(c => c.classList.remove('pop-green-animation'));
        
        // Restart the animation on the targeted card
        void targetCard.offsetWidth;
        targetCard.classList.add('pop-green-animation');
    }

    
    // Green Button -> Activates the LAST card (Card 6, which is index 5)
    if (greenBtn) {
        greenBtn.addEventListener('click', () => applyGlow(cards[5]));
    }

    // Orange Button -> Activates the FIFTH card (Card 5, which is index 4)
    if (orangeBtn) {
        orangeBtn.addEventListener('click', () => applyGlow(cards[4]));
    }

    // Black Button -> Activates the SECOND card (Card 2, which is index 1)
    if (blackBtn) {
        blackBtn.addEventListener('click', () => applyGlow(cards[1]));
    }

    
    const learnMoreBtns = document.querySelectorAll('.card-container section button');
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Stops conflicts
            const currentCard = this.closest('section');
            applyGlow(currentCard);
        });
    });

});

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});
