```javascript
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('nav ul');

toggleButton.addEventListener('click', (e) => {
    e.preventDefault();
    navbarLinks.classList.toggle('active');
});
```
