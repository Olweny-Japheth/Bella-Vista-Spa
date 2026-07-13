/**
 * Bell Vista Parlour — Architectural JavaScript Layer
 * Focus: High-performance state management, clean UX interactions, and local booking processing.
 */

document.addEventListener("DOMContentLoaded", () => {
    // --- GLOBAL STATE ANCHORS ---
    const navbar = document.querySelector("nav");
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    
    // --- 1. PERSISTENT GLASS NAVIGATION BLENDING ---
    const handleNavbarScroll = () => {
        if (window.scrollY > 20) {
            navbar.classList.add("shadow-md", "bg-white/95");
            navbar.classList.remove("bg-white/85");
        } else {
            navbar.classList.remove("shadow-md", "bg-white/95");
            navbar.classList.add("bg-white/85");
        }
    };

    window.addEventListener("scroll", handleNavbarScroll, { passive: true });
    handleNavbarScroll(); // Initial execution context tick

    // --- 2. RESPONSIVE MOBILE ACCORDION OVERLAY MECHANICS ---
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle("hidden");
        });

        // Close mobile layout automatically when clicking outside the navbar container boundary
        document.addEventListener("click", (e) => {
            if (!navbar.contains(e.target)) {
                mobileMenu.classList.add("hidden");
            }
        });
    }

    // --- 3. DYNAMIC ALGORITHM FILTER FOR SERVICES MENU ---
    const filterButtons = document.querySelectorAll(".filter-btn");
    const serviceCards = document.querySelectorAll(".dynamic-service-item");

    if (filterButtons.length > 0 && serviceCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                const targetFilter = button.getAttribute("data-filter");

                // Clear prior active styles and reset tailwind states across choices
                filterButtons.forEach(btn => {
                    btn.classList.remove("bg-brand-800", "text-white", "shadow-md");
                    btn.classList.add("text-slate-600", "hover:text-slate-900");
                });

                // Apply prominent active color configurations to current choice
                button.classList.remove("text-slate-600", "hover:text-slate-900");
                button.classList.add("bg-brand-800", "text-white", "shadow-md");

                // Structural evaluation loop for item presentation toggle matching category
                serviceCards.forEach(card => {
                    const cardCategory = card.getAttribute("data-category");

                    if (targetFilter === "all" || cardCategory === targetFilter) {
                        card.style.display = "flex"; // Restores bento-grid flex properties
                        // Gentle immediate visual presentation entry
                        setTimeout(() => {
                            card.style.opacity = "1";
                            card.style.transform = "scale(1)";
                        }, 10);
                    } else {
                        card.style.opacity = "0";
                        card.style.transform = "scale(0.97)";
                        card.style.display = "none";
                    }
                });
            });
        });
    }

    // --- 4. FORM TRANSACTION PROCESSOR (CONTACT ENGINE INTERACTION) ---
    const appointmentForm = document.getElementById("appointment-form");
    
    if (appointmentForm) {
        appointmentForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Locate submit button element to communicate background transition during pipeline execution
            const submitBtn = appointmentForm.querySelector("button[type='submit']");
            const originalButtonText = submitBtn.innerText;

            // Visual feedback transition state simulation
            submitBtn.disabled = true;
            submitBtn.innerText = "Processing Reservation Context...";
            submitBtn.classList.remove("bg-brand-800");
            submitBtn.classList.add("bg-brand-600");

            setTimeout(() => {
                // Return interface to baseline state
                submitBtn.innerText = "Transmission Completed Successfully";
                submitBtn.classList.remove("bg-brand-600");
                submitBtn.classList.add("bg-green-600");

                // Complete reset sequence after validation notification
                setTimeout(() => {
                    appointmentForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalButtonText;
                    submitBtn.classList.remove("bg-green-600");
                    submitBtn.classList.add("bg-brand-800");
                }, 2500);

            }, 1200); // Typical latency footprint simulator
        });
    }
});