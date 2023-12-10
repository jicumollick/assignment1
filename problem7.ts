

{
    function findFirstOccurence(T: any[], Q: any): number {

        let firstOccurence = -1;
        for (let i = 0; i < T.length; i++) {
            if (T[i] === Q) {
                firstOccurence = i;
                break;
            }
        }
        return firstOccurence;

    }
    console.log(findFirstOccurence([1, 23, 3, 4, 5, 5, 6, 6, 6], 5))
}