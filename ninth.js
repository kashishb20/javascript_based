const student = {
    name :" kashish ",
    printMarks : function () {
        console.log("marks = ", this.marks);
    },
};

const employee = {
    calcTax1 (){
        console.log("tax rate is   10 % ");
    },
};
const karanArjun = {
    salary :100000 ,
};

karanArjun.__proto__ = employee;