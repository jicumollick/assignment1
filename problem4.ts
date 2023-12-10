{
    const mixedData = [1, 'two', 3, 'four', 5];

    function CheckList2(T: (number | string)[]): number {

        let total = 0;

        T.map(item => {
            if (typeof item === 'number') {
                total += item;
            }
        })
        return total;
    }
    console.log(CheckList2(mixedData));
}