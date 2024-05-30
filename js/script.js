document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const scrollLink of scrollLinks) {
      scrollLink.addEventListener("click", function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const yOffset = -60; // Sesuaikan dengan offset yang diinginkan
          const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({top: y, behavior: 'smooth'});
        }
      });
    }
  });
  