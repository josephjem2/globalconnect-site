document.addEventListener('DOMContentLoaded', () => {
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.querySelector('.custom-amount-input');
    const selectedAmountInput = document.getElementById('selected-amount');

    amountButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const amount = button.dataset.amount;
            amountButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            customAmountInput.value = ''; 
            selectedAmountInput.value = amount;
            console.log(selectedAmountInput.value);
        });
    });

    customAmountInput.addEventListener('input', () => {
        amountButtons.forEach(btn => btn.classList.remove('selected'));
        selectedAmountInput.value = customAmountInput.value;
        console.log(selectedAmountInput.value);
    });
    
    // Set initial value
    const initialSelected = document.querySelector('.amount-btn.selected');
    if(initialSelected){
        selectedAmountInput.value = initialSelected.dataset.amount;
        console.log(selectedAmountInput.value)
    }


    const ctx = document.getElementById('donationBreakdownChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Programs', 'Admin', 'Fundraising'],
                datasets: [{
                    data: [85, 10, 5],
                    backgroundColor: ['#00509E', '#003A70', '#E85A4F'],
                    borderColor: '#f8f9fa',
                    borderWidth: 4,
                    hoverBorderWidth: 4,
                    hoverBorderColor: '#f8f9fa',

                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: true,
                    }
                }
            }
        });
    }
});
