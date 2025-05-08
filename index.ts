{
    //
    function formatString(input: string, toUpper?: boolean): string {

        if (toUpper === false) {
            return input.toLowerCase();
        } else {
            return input.toUpperCase();
        }
    }
    // console.log(formatString("helLO"));
    //
}

{
    //
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];

    function filterByRating(items: { title: string; rating: number }[])
        : { title: string; rating: number }[] {
        return items.filter(item => item.rating > 4);
    }


    // console.log(filterByRating(books));

    //
}

{
    //
    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.reduce((acc, current) => acc.concat(current), []);
    }
    const a = concatenateArrays(["a", "b"], ["c"]);
    const b = concatenateArrays([1, 2], [3, 4], [5]);
    // console.log(a,b);

    //
}

{
    //
    class Vehicle {
        private make: string;
        year: number
        constructor(make: string, year: number) {
            this.make = make;
            this.year = year
        }
        getInfo() {
            return `Make :${this.make},Year :${this.year}`
        }
    }
    class car extends Vehicle {
        private model: string
        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model
        }
        getModel() {
            return `Model :${this.model}`
        }
    }
    const myVehicle = new Vehicle("Toyota", 2015);
    const myCar = new car("Toyota", 2015, "Camry");
    const data = myVehicle.getInfo()
    const data2 = myCar.getModel()
    // console.log(data2);

    //
}

{
    //
    function processValue(value: string | number): number {
        if (typeof value === 'string') {
            return value.length
        }
        else(typeof value === 'number') ;{
            return value * 2
        }
    }
    // console.log(processValue('dfghj'));

    //
}

{
    //
    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
            return null;
        } else {
            return products.reduce((mostExpensive, currentProduct) => {
                return currentProduct.price >
                    mostExpensive.price ? currentProduct : mostExpensive
            }, products[0]);
        }
    }
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];

    // console.log(getMostExpensiveProduct(products));

    // Output: { name: "Bag", price: 50 }

    //
}

{
    //
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        if (day == Day.Saturday || day == Day.Sunday) {
            return 'Weekend'
        } else {
            return 'Weekday'
        }
    }

    // console.log(getDayType(Day.Monday));
    // console.log(getDayType(Day.Sunday));

    //
}

{
    //

    async function squareAsync(n: number): Promise<number> {
        if(n>0){
            return new Promise((res)=>{
                setTimeout(() =>res(n*n),1000)
            })
        }else{
            return Promise.reject('Error: Negative number not allowed')
        }
    }
    // squareAsync(4).then(console.log)
    // squareAsync(-3).catch(console.error)
    
    

    //
}