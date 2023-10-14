export let right = 10;
export const increment = () => {
    right += 30;
    console.log("right: " + right);
}
export const reset = () => {
    right = 10;
    console.log("right: " + right);
}
