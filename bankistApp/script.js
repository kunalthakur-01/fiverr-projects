'use strict';

let loggedIn = document.getElementById('loggedIn');
let loginForm = document.getElementById('loginForm');
let user = document.getElementById('user');
let pin  = document.getElementById('pin');
let data = document.getElementById('data');
let rate = document.querySelectorAll('#rate');
let totalAmount = document.getElementById('totalAmount');
let parentelement = document.getElementById('parent');
let inAmount = document.getElementById('in');
let outAmount = document.getElementById('out');
let interestAmount = document.getElementById('interest');
let closeForm = document.querySelector('.closeForm');
let requestForm = document.querySelector('.requestForm');
let confirmUser = document.getElementById('confirmUser');
let confirmPin = document.getElementById('confirmPin');
let requestLoan = document.querySelector('#requestLoan');
let date = document.getElementById('date');
let time = document.getElementById('time');
let topHeading = document.getElementById('topHeading');
let transferForm = document.querySelector('.transferForm');
let transferTo = document.querySelector('#transferTo');
let ammount = document.querySelector('#ammount');
let loggedOut = document.getElementById('loggedOut');
let sort = document.getElementById('sort');
let currentAccount;
let stop;
let min;
let sec;

let account1 = {
    user: 'js',
    pin: 1234,

    // movements: [100.000,-50.000,500.000,-200.500,2000.000,-199.500,-50.000,200.000,132.700,132.700],
    movements: [100,200,300,-400,-500,600,-700,800,-900,10000],

    dates: ['Mon feb 07 2022 12:33:31',
            'Mon feb 14 2022 12:33:31',
            'Mon feb 20 2022 12:33:31',
            'Mon feb 25 2022 12:33:31',
            'Mon feb 28 2022 12:33:31',
            'Mon Mar 02 2022 12:33:31',
            'Mon Mar 04 2022 12:33:31',
            'Mon Mar 06 2022 12:33:31',
            'Mon Mar 07 2022 12:33:31',
            'Mon Mar 08 2022 12:33:31'],

    currency: '&#8377'
}

let account2 = {
    user: 'jd',
    pin: 4321,

    // movements: [500.000,-150.000,500.000,300.000,-440.000,-260.000,700.000,12.300],
    movements: [400,2000,-450,-200,500,-100,600,200],

    dates: ['Mon feb 07 2022 12:33:31',
            'Mon feb 14 2022 12:33:31',
            'Mon feb 20 2022 12:33:31',
            'Mon feb 25 2022 12:33:31',
            'Mon feb 28 2022 12:33:31',
            'Mon Mar 02 2022 12:33:31',
            'Mon Mar 04 2022 12:33:31',
            'Mon Mar 06 2022 12:33:31',
            'Mon Mar 07 2022 12:33:31',
            'Mon Mar 08 2022 12:33:31'],
            
    currency: '&#8377'
}
let allAccounts = [account1,account2];

let addMovements = function(obj,movements){
    parentelement.innerHTML = '';
    movements.forEach((mov,i) => {
        let type = mov > 0 ? 'deposite' : 'withdrawal';
        
        let html = `<li>
                        <span class ="deposites type--${type}">${i + 1} ${type}</span>
                        <p>${new Date(obj.dates[i]).getDate()}/${new Date(obj.dates[i]).getMonth() + 1}/${new Date(obj.dates[i]).getFullYear()}</p>
                        <h4>${obj.currency} <span id="rate">${mov}</span></h4>
                    </li>`;
        parentelement.insertAdjacentHTML("afterbegin",html); 
    });
};
 

                            // login form
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    currentAccount =  allAccounts.find((acc)=>{
        return acc.user === user.value;
    });

    if(currentAccount.user === user.value && currentAccount.pin === Number(pin.value)){
        data.style.opacity = '1';
        addMovements(currentAccount,currentAccount.movements);
        date.innerText = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
        
        // new Date().getHours() < 10 || new Date().getMinutes() < 10 ? time.innerText = `,  0${new Date().getHours()}:0${new Date().getMinutes()}` : time.innerText = `,  ${new Date().getHours()}:${new Date().getMinutes()}`;
        // time.innerText = `,  ${new Date().getHours()}:${new Date().getMinutes()}`;
        if( new Date().getHours() < 10){
            time.innerText = `,  0${new Date().getHours()}:${new Date().getMinutes()}`
        }
        else{
            time.innerText = `,  ${new Date().getHours()}:${new Date().getMinutes()}`
        }
        if( new Date().getMinutes() < 10){
            time.innerText = `,  ${new Date().getHours()}:0${new Date().getMinutes()}`
        }
        else{
            time.innerText = `,  ${new Date().getHours()}:${new Date().getMinutes()}`
        }

        topHeading.innerText = 'Welcome back...';
        calcTotalAmt(currentAccount);
        calcSummary(currentAccount);
        clearInterval(stop);
        min = 4;
        sec = 60;
        stop = setInterval(logout, 1000);

                                // logout after 5 min
        setTimeout(() => {
            data.style.opacity = '0';
            document.getElementById('topHeading').innerText = 'Login to get started';
        }, 300000);
    }
    else{
        alert('Invalid credentials');
    }
    user.value = pin.value = '';
    pin.blur();
});


                            //    calculate total amount
let calcTotalAmt = (obj) => {
    let calc = obj.movements.reduce( (acc,mov) => {
        return acc + mov;
    });
    totalAmount.innerText = calc;
}

                        //    calculate summary
let calcSummary = (obj) => {
    let totalDeposite =  obj.movements.filter( (mov) => mov > 0).reduce( (acc,mov) => acc + mov);
    inAmount.innerText = Math.abs(totalDeposite);

    let totalWithdrawal =  obj.movements.filter( (mov) => mov < 0).reduce( (acc,mov) => acc + mov);
    outAmount.innerText = Math.abs(totalWithdrawal);

    let totalInterest = obj.movements.filter( (mov) => mov > 0).map( deposite => deposite * 1.2/100).reduce( (acc, int) => acc + int);
    interestAmount.innerText = totalInterest;
}




                            //   Transfer money
transferForm.addEventListener('submit', (e) => {
    e.preventDefault();
    allAccounts.forEach( (all)=>{
        if (all.user === transferTo.value && transferTo.value != currentAccount.user) {
            all.movements.push(Number(ammount.value));
            all.dates.push(new Date());

            if (currentAccount.user != all.user) {
                currentAccount.movements.push(-Number(ammount.value));
                currentAccount.dates.push(new Date());
            }
            addMovements(currentAccount,currentAccount.movements);
            calcTotalAmt(currentAccount);
            calcSummary(currentAccount);
        }
    });
    transferTo.value = ammount.value = '';
    ammount.blur();
});



                            //    close account
closeForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(confirmUser.value === currentAccount.user && Number(confirmPin.value) === currentAccount.pin){
        data.style.opacity = '0';
        topHeading.innerText = 'Login to get started';
        clearInterval(stop);
    }
    confirmUser.value = confirmPin.value = ''; 
    confirmPin.blur();
});

                            // request for loan
requestForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    allAccounts.forEach((all)=>{
        if (currentAccount.user === all.user) {
            all.movements.push(Number(requestLoan.value));
            currentAccount.dates.push(new Date());
                    // let html2 = `<li>
                    //     <span class ="deposites type--deposite">${all.movements.length} deposite</span>
                    //     <p>${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}</p>
                    //     <h4>${all.currency} <span id="rate">${requestLoan.value}</span></h4>
                    // </li>`; 
            setTimeout(() => {
                // parentelement.insertAdjacentHTML("afterbegin",html2);
                addMovements(currentAccount,currentAccount.movements);
                calcTotalAmt(currentAccount);
                calcSummary(currentAccount);
            }, 2000);    
        }
    })
    requestLoan.value = '';
});



                //    log out

const logout = () => {
    sec--;
    if (sec < 0) {
        min--;
        sec = 59;
    }
    if (min < 0) {
        clearInterval(stop);
    }

    sec < 10 ? loggedOut.innerText = `0${min}:0${sec}` : loggedOut.innerText = `0${min}:${sec}`;
}