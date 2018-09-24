export class Grade {
    constructor(
        public type: string,
        public code: string,
        public title: string,
        public grade: string
    ) {}
}

const Grades: Grade[] = [
    { type: "cs", code: "COMP103", title: "Introduction to Computer Science 1", grade: "A+" },
    { type: "cs", code: "COMP104", title: "Introduction to Computer Science 2", grade: "A+" },
    { type: "cs", code: "COMP203", title: "Programming with Data Structures", grade: "A+" },
    { type: "cs", code: "COMP219", title: "Database Practice and Experience", grade: "A+" },
    { type: "cs", code: "COMP223", title: "Information Discovery", grade: "A+" },
    { type: "cs", code: "158272", title: "Programming Paradigms", grade: "A+" },
    { type: "cs", code: "158258", title: "Web Development", grade: "A+" },
    { type: "cs", code: "159352", title: "Advanced Web Development", grade: "A+" },
    { type: "fin", code: "125241", title: "Introduction to Investments", grade: "A+" },
    { type: "fin", code: "125250", title: "Spreadsheet modelling and data analysis", grade: "A" },
    { type: "fin", code: "125220", title: "Financial institutions, markets and money", grade: "A" },
    { type: "fin", code: "125350", title: "Financial risk management", grade: "A" },
    { type: "fin", code: "125320", title: "International Finance", grade: "A+" },
    { type: "fin", code: "125340", title: "Investment Analysis", grade: "A" },
    { type: "fin", code: "125330", title: "Advanced Business Finance", grade: "A+" },
    { type: "math", code: "60102", title: "Linear Mathematics", grade: "A-" },
    { type: "math", code: "160203", title: "Calculus 2", grade: "A" },
    { type: "math", code: "160204", title: "Differential equations 1", grade: "A+" },
    { type: "math", code: "160211", title: "Applied linear algebra", grade: "A+" },
    { type: "math", code: "160318", title: "Differential equations 2", grade: "A+" },
    { type: "math", code: "160317", title: "Methods of Mathematical Physics", grade: "A+" }
];

export default Grades;