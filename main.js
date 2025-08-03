
      // Mobile menu toggle
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
      });

      // Language switcher
      const langBtns = document.querySelectorAll(".lang-btn");
      const langContents = document.querySelectorAll(".lang-content");

      langBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const lang = btn.dataset.lang;

          // Update active button
          langBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          // Show/hide content
          langContents.forEach((content) => {
            if (content.dataset.lang === lang) {
              content.classList.add("active");
            } else {
              content.classList.remove("active");
            }
          });
        });
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });

          // Close mobile menu if open
          if (navLinks.classList.contains("active")) {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
          }
        });
      });

      // Scroll to top button
      const scrollTopBtn = document.querySelector(".scroll-top");

      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          scrollTopBtn.classList.add("active");
        } else {
          scrollTopBtn.classList.remove("active");
        }
      });

      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      // Add animation on scroll
      const observerOptions = {
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      }, observerOptions);

      document
        .querySelectorAll(
          ".service-card, .pricing-card, .step, .detail-card, .gallery-item"
        )
        .forEach((el) => {
          observer.observe(el);
        });
