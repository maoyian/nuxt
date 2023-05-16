import data from './products.json'
// export default defineEventHandler(() => {
//     return {
//         data
//     }
// })
export default defineEventHandler(async () =>{
    return new Promise<any>((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 3000);
    })
})