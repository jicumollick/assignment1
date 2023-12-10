{
    class Cat {
        name: string;
        color: string;
        constructor(name: string, color: string) {
            this.color = color;
            this.name = name;

        }
    }

    const cat = new Cat("magi", 'gray');


    function isCat(T: Cat) {

        if (T instanceof Cat) {
            console.log('its cat');

        } else {
            console.log('not a cat');

        }


    }

    isCat({ name: '', color: '' });
}