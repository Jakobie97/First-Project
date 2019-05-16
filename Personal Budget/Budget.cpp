/* 
Name: Jacob Stockwell
Date: 05/16/19

Description: this project is designed to be a budget app of expences 

*/

#include <iostream>

using namespace std;

//calcs 20% of paycheck to put in savings account
double savings(double a) {
    
    double result;

    result = a * .20; 
    
    return result;
}

//adds up all expenses and subs from check 
double bills(double b) {
    double result; 

    double spotify = 5;
    double netflix = 12;
    double gas = 20;
    double hairAndEybrows = 30 

    result = spotify + netflix + gas + hairAndEybrows;

    return result;
}

int main () {

    //prompt vars  
    string name;
    double amount;

    //promt 
    cout << "please enter your Name and paycheck amount: ";
    cin >> name;
    cin >> amount;

    cout << endl; 

    cout << "hi, " << name << endl;
    cout << "your Check: " << "$" << amount << endl; 

    cout << endl;

    //claculations 
    double afterBills = amount - bills(amount);
    double putAway = savings(amount)

    //outputs
    cout << "Amount to put in savings $" << putAway << endl;
    cout << "After bills are paid you have: " << "$"<< afterBills << endl;
    cout << endl;

    return 0;
}

