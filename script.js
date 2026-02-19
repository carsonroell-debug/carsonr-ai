document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const fields = {
        name:    { el: form.querySelector('#name'),    error: form.querySelector('#name-error') },
        email:   { el: form.querySelector('#email'),   error: form.querySelector('#email-error') },
        topic:   { el: form.querySelector('#topic'),   error: form.querySelector('#topic-error') },
        message: { el: form.querySelector('#message'), error: form.querySelector('#message-error') },
    };

    const successMsg = form.querySelector('#formSuccess');
    const submitBtn  = form.querySelector('.form-submit-button');

    function isValidEmail(val) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
    }

    function setError(field, msg) {
        field.el.classList.toggle('invalid', Boolean(msg));
        field.error.textContent = msg;
    }

    function validateAll() {
        let valid = true;

        if (!fields.name.el.value.trim()) {
            setError(fields.name, 'Full name is required.');
            valid = false;
        } else {
            setError(fields.name, '');
        }

        const emailVal = fields.email.el.value.trim();
        if (!emailVal) {
            setError(fields.email, 'Email is required.');
            valid = false;
        } else if (!isValidEmail(emailVal)) {
            setError(fields.email, 'Please enter a valid email address.');
            valid = false;
        } else {
            setError(fields.email, '');
        }

        if (!fields.topic.el.value) {
            setError(fields.topic, 'Please select a topic.');
            valid = false;
        } else {
            setError(fields.topic, '');
        }

        if (!fields.message.el.value.trim()) {
            setError(fields.message, 'Message is required.');
            valid = false;
        } else {
            setError(fields.message, '');
        }

        return valid;
    }

    // Validate on blur for inline feedback
    Object.values(fields).forEach(function (field) {
        field.el.addEventListener('blur', validateAll);
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!validateAll()) {
            // Focus first invalid field
            const firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        const payload = {
            name:        fields.name.el.value.trim(),
            email:       fields.email.el.value.trim(),
            phone:       form.querySelector('#phone').value.trim() || null,
            topic:       fields.topic.el.value,
            message:     fields.message.el.value.trim(),
            submittedAt: new Date().toISOString(),
        };

        console.log('[Contact Form] Submission:', payload);

        // Show success state
        submitBtn.hidden = true;
        successMsg.hidden = false;

        // Reset form values and error states
        form.reset();
        Object.values(fields).forEach(function (field) {
            field.el.classList.remove('invalid');
        });
    });
});
