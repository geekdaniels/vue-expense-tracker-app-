new Vue({
    el : "#expense_app",
    data : {
        expense: '',  // Add this line
        category : '',
        categories : [
            {name : 'Feeding'},
            {name : 'Transportation'},
            {name : 'Mobilization'},
            {name : 'Miscellaneous'}
            ],

            times : [
                {when : 'Morning'},
                {when : 'Afternoon'},
                {when : 'Evening'},
                {when : 'Night-Time'}
                ],

        expenses : [
            {key : 'Feeding', category: 'Cat_name'},
            ],
     
        cat_capture : 'he',
        name: 'she',
        time : ''
            
        
    },
    methods: {
        addExpense(){
            this.expenses.push({key: this.expense, category: this.category,});
            this.expense = '';
                   
            console.log(this.category); // Add this
        }
    },
    })
