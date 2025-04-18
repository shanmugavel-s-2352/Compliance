// JavaScript for Compliance Website

// Region Selection Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all region buttons and content sections
    const regionButtons = document.querySelectorAll('.region-btn');
    const regionContents = document.querySelectorAll('.region-content');
    
    // Add click event listeners to region buttons
    regionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the region from data attribute
            const region = this.getAttribute('data-region');
            
            // Remove active class from all buttons and add to clicked button
            regionButtons.forEach(btn => btn.classList.remove('btn-primary'));
            regionButtons.forEach(btn => btn.classList.add('btn-outline-primary'));
            this.classList.remove('btn-outline-primary');
            this.classList.add('btn-primary');
            
            // Hide all region content sections
            regionContents.forEach(content => content.classList.remove('active'));
            
            // Show the selected region content
            document.getElementById(`${region}-content`).classList.add('active');
        });
    });
    
    // Framework filter functionality (if exists on page)
    const frameworkFilters = document.querySelectorAll('.framework-filter');
    if (frameworkFilters.length > 0) {
        frameworkFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Remove active class from all filters and add to clicked filter
                frameworkFilters.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                
                // Show/hide frameworks based on category
                const frameworks = document.querySelectorAll('.framework-item');
                frameworks.forEach(framework => {
                    if (category === 'all' || framework.getAttribute('data-category') === category) {
                        framework.style.display = 'block';
                    } else {
                        framework.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
    
    // Dynamic data loading based on region selection
    const regionSelectors = document.querySelectorAll('.region-selector');
    if (regionSelectors.length > 0) {
        regionSelectors.forEach(selector => {
            selector.addEventListener('change', function() {
                const selectedRegion = this.value;
                const dataContainers = document.querySelectorAll('[data-region]');
                
                dataContainers.forEach(container => {
                    if (container.getAttribute('data-region') === selectedRegion || container.getAttribute('data-region') === 'all') {
                        container.style.display = 'block';
                    } else {
                        container.style.display = 'none';
                    }
                });
            });
        });
    }
});
