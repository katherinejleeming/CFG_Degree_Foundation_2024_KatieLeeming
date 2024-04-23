function costCalculator() {
    items = [{name: 'Laptop', price: 1000},
    {name: 'Headphones', price: 200},
    {name: 'Mouse', price: 50}];
    
    let subtotal = items.reduce((acc, item) =>
    acc + item.price, 0);
    
    const TAX_RATE = 0.1;
    const DISCOUNT = 0.2;
    
    let tax = subtotal * TAX_RATE;
    let discount = subtotal * DISCOUNT;
    
    let total = subtotal + tax - discount;
    
    console.log("Total cost: $" + total.toFixed(2));

};

costCalculator();

// Improvements to code:
// 1. Consitent use of semi-colons after expressions
// 2. Using console.log to output answer clearly
// 3. Place the code block inside a function for clarity and reuse.