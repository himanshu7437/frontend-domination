// interview question - 3

// ques - deep copy and shallow copy

// Shallow Copy - shallow copy jab hota hain jab kisi object ko copy karein with object.assign or using spread operator(...), in dono cases main top level prop to copy hojatio hai par kisi bhi nested object ki props copy hone ki jagah firse refrence pass kar deti hai

var obj = {
    name: "himanshu",
    standard: "B.tech",
    college: {
        name: "vaish college of engineeriing",
        location: "rohtak",
        affilated: "yes",
        courses: [
            {
                name: "BCA",
                year : 3,
            },
            {
                name: "BBA",
                year : 3,
            },
            {
                name: "B.TECH",
                year : 4,
            },
        ]
    }
}

// var obj2 = {...obj} // shallow copy 
// console.log(obj2);

// now suppose we change first course - bca to mca

// obj2.college.courses[0].name = "MCA";

// console.log(obj.college.courses[0].name); // MCA - orginal value also changed
// console.log(obj2.college.courses[0].name); // MCA 


// --------------------------------------------------------------------------------------


// deep copy - when we completely copy the whole object including all the nested ibject also.

// now lets try to make a deep copy of obj. 

// solution - 1 (Eassy one)

// var obj3 = JSON.parse(JSON.stringify(obj));  // deep copy
// obj3.college.courses[0].name = "MCA";

// console.log(obj.college.courses[0].name); // BCA - orginal value not changed
// console.log(obj3.college.courses[0].name); // MCA 


// solution - 2 (Lengthy One)

// function makedeepcopy(obj) {
//     if(typeof obj !== "object" || obj === null) {
//         return obj;
//     } 

//     var copiedVal = Array.isArray(obj)? [] : {};
//     var keys = Object.keys(obj);

//     for (var i = 0; i < keys.length; i++) {
//         copiedVal[keys[i]] = makedeepcopy(obj[keys[i]]);
//     }

//     return copiedVal;

// }

// var obj4 = makedeepcopy(obj);

// obj4.college.courses[0].name = "MCA"; // deep copy

// console.log(obj.college.courses[0].name); // BCA - orginal value not changed
// console.log(obj4.college.courses[0].name); // MCA 

