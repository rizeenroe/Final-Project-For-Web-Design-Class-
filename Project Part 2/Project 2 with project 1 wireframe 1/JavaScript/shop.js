document.addEventListener('DOMContentLoaded', function() {
    function $(selector) {
        return document.querySelector(selector);
    }

    const form = $('#shop');
    const paymentError = $('#payment');
    const saleError = $('#sale');
    const orderComplete = $('#orderComplete'); // Select the h2 element

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked');
        const selectedSaleItems = document.querySelectorAll('input[type="checkbox"]:checked');

        if (!selectedPayment) {
            paymentError.style.display = 'block';
        } else {
            paymentError.style.display = 'none';
        }

        if (selectedSaleItems.length === 0) {
            saleError.style.display = 'block';
        } else {
            saleError.style.display = 'none';
        }

        const name = $('#buyerName').value.trim();
        const email = $('#buyerEmail').value.trim();
        const phoneNumber = $('#buyerPhoneNumber').value.trim();
        const address = $('#buyerAddress').value.trim();

        const nameError = $('#name');
        const emailError = $('#email');
        const phoneNumberError = $('#phoneNumber');
        const addressError = $('#address');

        nameError.style.display = name ? 'none' : 'block';
        emailError.style.display = email ? 'none' : 'block';
        phoneNumberError.style.display = phoneNumber ? 'none' : 'block';
        addressError.style.display = address ? 'none' : 'block';

        if (!name || !phoneNumber || !address || !email || !selectedPayment || selectedSaleItems.length === 0) {
            // If any field is empty, hide the order complete message
            orderComplete.style.display = 'none';
            return;
        }

        // If all fields are filled, display the order complete message
        orderComplete.style.display = 'block';

        $('#buyerEmail').value = email;
        $('#buyerName').value = name;
        $('#buyerPhoneNumber').value = phoneNumber;
        $('#buyerAddress').value = address;

        form.submit();
    });

    // Event listeners for input fields to check and update on input change
    $('#buyerName').addEventListener('input', function() {
        $('#name').style.display = $('#buyerName').value.trim() ? 'none' : 'block';
    });

    $('#buyerEmail').addEventListener('input', function() {
        $('#email').style.display = $('#buyerEmail').value.trim() ? 'none' : 'block';
    });

    $('#buyerPhoneNumber').addEventListener('input', function() {
        $('#phoneNumber').style.display = $('#buyerPhoneNumber').value.trim() ? 'none' : 'block';
    });

    $('#buyerAddress').addEventListener('input', function() {
        $('#address').style.display = $('#buyerAddress').value.trim() ? 'none' : 'block';
    });
});
