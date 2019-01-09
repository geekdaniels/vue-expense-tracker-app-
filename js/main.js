new Vue({
    el: "#expense_app",
    data: {
        expense: '',  // Add this line
        category: 'Feeding',
        time: 'Morning',
        price: '',
        categories: [
            { name: 'Feeding' },
            { name: 'Transportation' },
            { name: 'Mobilization' },
            { name: 'Miscellaneous' }
        ],

        times: [
            { when: 'Morning' },
            { when: 'Afternoon' },
            { when: 'Evening' },
            { when: 'Night-Time' }
        ],

        expenses: [
            { key: 'Feeding', category: 'Cat_name', time : '', price : '' },
        ],
        
       


    },
    methods: {
        addExpense() {
            this.expenses.push({ key: this.expense, category: this.category, time : this.time, price : this.price });
            this.expense = '';
            this.price = '';

            console.log(this.category + " " + this.time + " " + this.price); // Add this
        }
    },
})
