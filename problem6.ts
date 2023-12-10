{
    function CheckList(T: unknown): void {

        if (Array.isArray(T) && T.every(x => typeof x === 'number')) {
            let sum = 0;
            T.map(number => {
                sum += number;
            })

            console.log("Sum is", sum);

        } else {
            console.log("Not a valid list");
        }

    }

    CheckList([1, 2, 3, 4, 5]);
    CheckList("ss");
}