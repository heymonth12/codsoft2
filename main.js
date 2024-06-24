document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('.text', {
        strings: ['facility 1 ', 'feature 2', 'service 3', 'facility4'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    var navItems = document.querySelectorAll('.nav ul li');
    var contentItems = document.querySelectorAll('.content-item');

    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navItems.forEach(function(nav) {
                nav.classList.remove('active');
            });
            item.classList.add('active');

            var contentId = item.getAttribute('data-content');
            contentItems.forEach(function(content) {
                if (content.id === contentId) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    // Set default active content
    document.querySelector('.nav ul li[data-content="content1"]').click();
});
