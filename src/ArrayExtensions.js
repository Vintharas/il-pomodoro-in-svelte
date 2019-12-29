/**
 * Returns a new array without the item passed as an argument
 */
Array.prototype.remove = function (item) {
    const index = this.indexOf(item);
    return [...this.slice(0, index), ...this.slice(index+1)];
}
