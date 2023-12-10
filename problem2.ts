{

    interface Address {
        city: string;
        state: string;
    }

    interface Person {
        address?: Address,
        phone?: number;
    }

    const person: Person = {
        address: {
            city: 'São Paulo',
            state: 'SP'
        },
        phone: 1234567890
    }



    function getAddressCity(T: Person) {

        return T?.address?.city;

    }

    console.log(getAddressCity(person))
}