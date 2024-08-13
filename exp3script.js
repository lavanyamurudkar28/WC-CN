document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Form Validation
    var forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Real-time Input Validation
    document.querySelectorAll('form').forEach(function (form) {
        form.addEventListener('input', function (event) {
            var target = event.target;
            if (target.classList.contains('form-control') || target.classList.contains('form-select')) {
                if (target.value.trim() !== '') {
                    target.classList.remove('is-invalid');
                    target.classList.add('is-valid');
                } else {
                    target.classList.remove('is-valid');
                    target.classList.add('is-invalid');
                }
            }
        });
    });

    // Handling Form Data on Submission
    document.querySelectorAll('form').forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity()) {
                var formData = new FormData(form);
                var data = {};
                formData.forEach(function (value, key) {
                    data[key] = value;
                });
                console.log('Form Data Submitted:', data);
            }
        });
    });
});
