console.log('utils.js IS RUNNING!');

export const square = (x) => x*x;
export const add = (a, b) => a+b;

// const subtract = (a, b) => a -b;
// export default subtract;
export default (a, b) => a -b; // 這個有效

// export { square, add, subtract as default };

////----------錯誤示範
// export default const subtract = (a, b) => a -b;