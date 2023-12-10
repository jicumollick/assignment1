{
    interface Car {
        make: string;
        model: string;
        year: number;

    }

    interface Driver {
        name: string;
        license: string;
    }

    const car: Car = {
        make: 'japan',
        model: "Naga 2023",
        year: 2122
    }
    const driver: Driver = {
        name: "jiku mollick",
        license: 'mama licesce'
    }

    function combinedTypes(T: Car, Q: Driver) {

        return { T, Q };

    }



    console.log(combinedTypes(car, driver));

}