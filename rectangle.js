const rectangle = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    callback(new Error('incorrect values'));
  } else {
    setTimeout(() => {
      callback(null, {
        perimeter: () => 2 * (x + y),
        area: () => x * y
      }),
        2000;
    });
  }
};

export default rectangle;

// //Named export and import
// export const name = 'Jason'
// import { name } from './file'

// //Default export and immport
// export default 'some value'
// //or
// export default someVariable
// import someValue from './file'

// //renamed export and import
// export {something as renamedSomething}
// import { value as renamedValue } from './file'

// //multiple exports and imports
//  export { name, someFunction}
// import { name, someFunction } from './file'
