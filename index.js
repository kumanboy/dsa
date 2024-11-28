// const studentDb = ['husan', 'aslbek','kamila','lola','bobur']
//
// function findStudents(allStudents, studentName) {
//     for (let i = 0; i < allStudents.length; i++) {
//         if (allStudents[i] === studentName) {
//             console.log(`Found ${studentName}`)
//         }
//     }
// }
//
// findStudents(studentDb, 'kamol')


// BIG O = O(n)

const products = ['tuxum','non','qulupnay','sut','banan']

const kerakliMaxsulotIzlash = (maxsulot) =>{
    for (let i = 0; i < products.length; i++) {
        if (products[i] === maxsulot) {
            console.log(`Topilgan maxsulot: ${maxsulot}`)
        }
    }
}

kerakliMaxsulotIzlash('sut')


//0010101
//0123456789ABCDEF
