function add(a:number,b?:number,c?:number):number{
    return a+(b||0)+(c||0);
}
console.log(add(4,7,5));