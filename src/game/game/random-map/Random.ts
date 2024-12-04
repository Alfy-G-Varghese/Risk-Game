export default class Random {
    static next(minimum: number, maximum: number): number {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }
}