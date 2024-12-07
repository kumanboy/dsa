// 1. Raqamni stringgaylantirish
//
// 2. Stringni massivga aylantirish
//
// 3. massiveni teskari aylantirish
//
// 4. Massivni stringg qaytarish
//
// 5. Stringni raqamga aylantirish.
//
// 6. Raqamni  return qilish

const reverseInt = (n) => {
    const reversed = n.toString().split("").reverse().join("");
    const reversedNumber = parseInt(reversed);

    // raqamning ishorasini aniqlash
    if (n < 0) {
        return -reversedNumber;
    } else {
        return reversedNumber;
    }
};

console.log(reverseInt(-123)); // Natija: -321