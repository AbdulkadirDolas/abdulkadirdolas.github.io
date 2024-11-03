document.addEventListener("DOMContentLoaded", () => {
    // Skill cards ve Experience sections için açılır kapanır etkileşim
    const skillCards = document.querySelectorAll('.skill-card');
    const experienceItems = document.querySelectorAll('#experience li');

    skillCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(30px)";
        setTimeout(() => {
            card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 200);
    });

    experienceItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = "translateY(30px)";
        setTimeout(() => {
            item.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, index * 300);
    });

    // Yetenekler bölümü için açılır kapanır etkileşim
    skillCards.forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
            const description = document.createElement('p');
            description.textContent = "Bu beceri hakkında daha fazla bilgi. (Burada açıklama metni yer alacak.)";
            if (card.classList.contains('expanded')) {
                card.appendChild(description);
            } else {
                card.removeChild(card.lastChild);
            }
        });
    });
});


