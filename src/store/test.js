// var hello = (text: string) => {
//     return 'hello ${text}';
// }
// hello('word');
// let arrayNumbers: number[] = [1, 2, 3]
// let arrayNumbers: [number | string, string, number] = ['1', '2', 3]
// interface user {
//     id: number;
//     name: string;
//     age: number;
// }
// let test: user = {
//     id: 1,
//     name: 'test',
//     age: 10
// }
function add(x, y, z) {
    if (typeof z === 'number') {
        return x + y + z;
    }
    return x + y;
}
add(0, 3, '1');
