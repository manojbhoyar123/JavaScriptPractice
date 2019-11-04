var john = {
    Fname: 'johnM',
    bills: [124,48,264,180,42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
// tip calculation
        for(var i = 0; i < this.bills.length; i++)
        {
            var prcnt;
            var bill = this.bills[i];
            if (bill < 50)
            {prcnt = 0.2;}
            else if (bill >= 50 && bill <= 200)
            {prcnt = 0.15;            }
            else
            {prcnt = 0.1;}
            // adding result in array
            this.tips[i] = prcnt * bill;
            this.finalValues[i] = bill + bill*prcnt;
        }
    }
};
//console.log(john.calcTips()); this will give undefined
john.calcTips();
console.log(john);
