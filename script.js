```javascript
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const text = document.getElementById("message").value;

    if (name === "" || email === "" || text === "") {
        message.textContent = "⚠ Барлық жолдарды толтырыңыз.";
        return;
    }

    message.textContent = "✓ Хабарламаңыз қабылданды! Рақмет.";

    form.reset();
});
```
