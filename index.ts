{
    //
    function formatString(input: string, toUpper?: boolean): string {

        if (toUpper === false) {
            return input.toLowerCase();
        } else {
            return input.toUpperCase();
        }
    }
    //
}

{
    //
    function filterByRating(items: { title: string; rating: number }[])
        : { title: string; rating: number }[] {
        return items.filter(item => item.rating > 4);
    }
    //
}

{
    //
    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.reduce((acc, current) => acc.concat(current), []);
    }
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
    //
}