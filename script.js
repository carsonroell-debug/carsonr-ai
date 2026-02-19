document.addEventListener('DOMContentLoaded', function () {

    // ── Contact form validation + submit ──
    var form = document.getElementById('contactForm');
    if (!form) return;

    var fields = {
        name:    { el: form.querySelector('#name'),    error: form.querySelector('#name-error') },
        email:   { el: form.querySelector('#email'),   error: form.querySelector('#email-error') },
        topic:   { el: form.querySelector('#topic'),   error: form.querySelector('#topic-error') },
        message: { el: form.querySelector('#message'), error: form.querySelector('#message-error') },
    };

    var successMsg = form.querySelector('#formSuccess');
    var submitBtn  = form.querySelector('.form-submit-button');

    function isValidEmail(val) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
    }

    function setError(field, msg) {
        field.el.classList.toggle('invalid', Boolean(msg));
        field.error.textContent = msg;
    }

    function validateAll() {
        var valid = true;

        if (!fields.name.el.value.trim()) {
            setError(fields.name, 'Name is required.');
            valid = false;
        } else {
            setError(fields.name, '');
        }

        var emailVal = fields.email.el.value.trim();
        if (!emailVal) {
            setError(fields.email, 'Email is required.');
            valid = false;
        } else if (!isValidEmail(emailVal)) {
            setError(fields.email, 'Please enter a valid email.');
            valid = false;
        } else {
            setError(fields.email, '');
        }

        if (!fields.topic.el.value) {
            setError(fields.topic, 'Please pick a topic.');
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

    // Inline validation on blur
    Object.values(fields).forEach(function (field) {
        field.el.addEventListener('blur', validateAll);
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!validateAll()) {
            var firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        var payload = {
            name:        fields.name.el.value.trim(),
            email:       fields.email.el.value.trim(),
            topic:       fields.topic.el.value,
            message:     fields.message.el.value.trim(),
            submittedAt: new Date().toISOString(),
        };

        console.log('[Contact Form] Submission:', payload);

        submitBtn.hidden = true;
        successMsg.hidden = false;

        form.reset();
        Object.values(fields).forEach(function (field) {
            field.el.classList.remove('invalid');
        });
    });

    // ── Service CTA links → preselect dropdown + scroll to #contact ──
    // Triggered by any [data-service] anchor (e.g. "Ask about coverage →")
    document.querySelectorAll('[data-service]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Preselect the dropdown
            var service = this.dataset.service;
            var topicEl = document.getElementById('topic');
            if (topicEl) topicEl.value = service;

            // Smooth-scroll to the contact section
            var contactEl = document.getElementById('contact');
            if (contactEl) {
                contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // Focus the message field so the user can start typing
            var messageEl = document.getElementById('message');
            if (messageEl) {
                // Slight delay lets scroll finish before focus
                setTimeout(function () { messageEl.focus(); }, 400);
            }
        });
    });

});
