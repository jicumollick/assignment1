

{
    function checkType(x: string | number) {
        if (typeof x === 'string') {
            return x.length;

        } else {
            return x * x;

        }
    }

    console.log(checkType("jiku"));
}