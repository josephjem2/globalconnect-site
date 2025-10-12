
document.addEventListener('DOMContentLoaded', () => {
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.querySelector('.custom-amount-input');

    amountButtons.forEach(button => {
        button.addEventListener('click', () => {
            amountButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            customAmountInput.value = ''; 
        });
    });

    customAmountInput.addEventListener('input', () => {
        amountButtons.forEach(btn => btn.classList.remove('selected'));
    });

    const ctx = document.getElementById('donationBreakdownChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Programs', 'Admin', 'Fundraising'],
                datasets: [{
                    data: [85, 10, 5],
                    backgroundColor: ['#103A71', '#0D2C54', '#F4B942'],
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
});
