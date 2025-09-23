document.addEventListener('DOMContentLoaded', () => {
    const amountButtons = document.querySelectorAll('.amount-btn');
    const frequencyButtons = document.querySelectorAll('.frequency-btn');
    const customAmountInput = document.getElementById('custom-amount');
    const donationForm = document.getElementById('donation-form');

    let selectedAmount = 100;
    let selectedFrequency = 'one-time';

    amountButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentActive = document.querySelector('.amount-btn.active');
            if(currentActive){
                currentActive.classList.remove('active');
            }
            button.classList.add('active');
            selectedAmount = Number(button.dataset.amount);
            customAmountInput.value = '';
        });
    });

    customAmountInput.addEventListener('input', () => {
        const currentActive = document.querySelector('.amount-btn.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        selectedAmount = Number(customAmountInput.value);
    });

    frequencyButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.frequency-btn.active').classList.remove('active');
            button.classList.add('active');
            selectedFrequency = button.dataset.frequency;
        });
    });

    donationForm.addEventListener('submit', e => {
        e.preventDefault();

        // This is where you would call a Cloud Function to create a Stripe Checkout session.
        // The Cloud Function would use the Stripe secret key.
        // For demonstration, we'll just log the details.
        console.log('Donation details:', {
            amount: selectedAmount,
            frequency: selectedFrequency
        });

        alert(`Thank you for your interest in donating $${selectedAmount} ${selectedFrequency}! To fully enable payments, you'll need to follow the instructions to add your Stripe API keys.`);

        // Example of what the call to a Cloud Function might look like
        /*
        fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: selectedAmount,
                frequency: selectedFrequency
            }),
        })
        .then(response => response.json())
        .then(session => {
            return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(result => {
            if (result.error) {
                alert(result.error.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
        */
    });
});
