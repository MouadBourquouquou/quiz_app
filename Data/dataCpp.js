export const dataCpp = [
    {
        "question": "What is encapsulation in C++?",
        "answers": [
            ["Creating multiple objects of a class", false],
            ["Inheriting properties from another class", false],
            ["Hiding the internal details of an object and exposing only necessary functions", true],
            ["The process of deleting objects", false]
        ]
    },
    {
        "question": "What is inheritance in C++?",
        "answers": [
            ["Encapsulating data within a class", false],
            ["The ability to derive new classes from existing ones", true],
            ["Defining the data types in a class", false],
            ["The process of eliminating unused variables", false]
        ]
    },
    {
        "question": "What is polymorphism in C++?",
        "answers": [
            ["Creating multiple copies of the same object", false],
            ["The process of converting one type into another", false],
            ["Hiding implementation details of a class", false],
            ["The ability to use the same function name but different implementations", true]
        ]
    },
    {
        "question": "Which of the following is used to create a new object in C++?",
        "answers": [
            ["new", true],
            ["malloc", false],
            ["create", false],
            ["initialize", false]
        ]
    },
    {
        "question": "What is a constructor in C++?",
        "answers": [
            ["A function that destroys an object", false],
            ["A special function used to initialize an object", true],
            ["A function that returns a value", false],
            ["A type of pointer used for object creation", false]
        ]
    },
    {
        "question": "What does the 'this' pointer refer to in C++?",
        "answers": [
            ["It refers to the current object", true],
            ["It refers to the base class", false],
            ["It refers to the parent function", false],
            ["It refers to the last created object", false]
        ]
    },
    {
        "question": "What is the purpose of the 'virtual' keyword in C++?",
        "answers": [
            ["To declare an abstract class", false],
            ["To define an interface", false],
            ["To enable dynamic polymorphism (runtime polymorphism)", true],
            ["To indicate a static function", false]
        ]
    },
    {
        "question": "What is abstraction in C++?",
        "answers": [
            ["The process of creating new classes from existing ones", false],
            ["The ability to create multiple objects of a class", false],
            ["The process of defining multiple methods with the same name", false],
            ["Hiding complex implementation details and exposing only necessary parts", true]
        ]
    },
    {
        "question": "Which of the following is NOT a feature of OOP?",
        "answers": [
            ["Structured programming", true],
            ["Encapsulation", false],
            ["Inheritance", false],
            ["Polymorphism", false]
        ]
    },
    {
        "question": "What is the difference between 'public', 'private', and 'protected' access modifiers?",
        "answers": [
            ["They specify the data type of the variables", false],
            ["They control the visibility of class members", true],
            ["They define the return type of functions", false],
            ["They are used to define constructors", false]
        ]
    },
    {
        "question": "What does the 'delete' keyword do in C++?",
        "answers": [
            ["Deletes a variable permanently", false],
            ["Removes an element from an array", false],
            ["Deallocates memory allocated with 'new'", true],
            ["Deletes an entire class", false]
        ]
    },
    {
        "question": "What is the use of the 'new' operator in C++?",
        "answers": [
            ["Declares a new class", false],
            ["Allocates memory dynamically", true],
            ["Creates a new thread", false],
            ["Assigns a value to a variable", false]
        ]
    },
    {
        "question": "Which keyword is used to create an abstract class in C++?",
        "answers": [
            ["static", false],
            ["override", false],
            ["final", false],
            ["virtual", true]
        ]
    },
    {
        "question": "What does 'namespace' do in C++?",
        "answers": [
            ["Declares a new class", false],
            ["Prevents naming conflicts in large projects", true],
            ["Defines the main function", false],
            ["Assigns a scope to variables", false]
        ]
    },
    {
        "question": "Which header file is required for input/output operations in C++?",
        "answers": [
            ["iostream", true],
            ["stdio.h", false],
            ["fstream", false],
            ["conio.h", false]
        ]
    },
    {
        "question": "What is the purpose of the 'friend' keyword in C++?",
        "answers": [
            ["Allows a function to access private and protected members of another class", true],
            ["Creates a reference to a private variable", false],
            ["Declares a static function", false],
            ["Defines a virtual function", false]
        ]
    },
    {
        "question": "What does the 'typedef' keyword do in C++?",
        "answers": [
            ["Defines a function", false],
            ["Creates an alias for a data type", true],
            ["Declares a constant", false],
            ["Specifies the return type of a function", false]
        ]
    },
    {
        "question": "Which of the following is NOT a fundamental data type in C++?",
        "answers": [
            ["int", false],
            ["float", false],
            ["double", false],
            ["string", true]
        ]
    },
    {
        "question": "What does the 'continue' keyword do in C++?",
        "answers": [
            ["Terminates the program", false],
            ["Exits the current loop", false],
            ["Pauses the execution of a loop", false],
            ["Skips the rest of the loop iteration and continues with the next iteration", true]
        ]
    },
    {
        "question": "What is a pure virtual function in C++?",
        "answers": [
            ["A function that has no implementation", false],
            ["A function that is static", false],
            ["A function declared in a base class that must be overridden in a derived class", true],
            ["A function that cannot be inherited", false]
        ]
    },
    {
        "question": "What is the default access specifier for class members in C++?",
        "answers": [
            ["private", true],
            ["public", false],
            ["protected", false],
            ["static", false]
        ]
    },
    {
        "question": "What does the 'static' keyword signify in C++?",
        "answers": [
            ["The variable or function is accessible outside the class", false],
            ["The variable or function belongs to the class rather than an object", true],
            ["The variable is dynamically allocated", false],
            ["The variable cannot change its value", false]
        ]
    },
    {
        "question": "Which of the following is a valid function declaration in C++?",
        "answers": [
            ["int add(int a, int b);", true],
            ["int add(a, b);", false],
            ["add(int a, int b);", false],
            ["add(a, b);", false]
        ]
    },
    {
        "question": "What is the purpose of the 'return' keyword in C++?",
        "answers": [
            ["Returns the flow of control to the beginning of a loop", false],
            ["Terminates the program", false],
            ["Calls another function", false],
            ["Exits from a function and optionally returns a value", true]
        ]
    },
    {
        "question": "What is the difference between 'struct' and 'class' in C++?",
        "answers": [
            ["Members of a 'struct' are private by default, whereas members of a 'class' are public by default", false],
            ["A 'struct' cannot have member functions, while a 'class' can", false],
            ["Members of a 'struct' are public by default, whereas members of a 'class' are private by default", true],
            ["A 'struct' is used only for POD (Plain Old Data)", false]
        ]
    },
    {
        "question": "What does the 'virtual destructor' ensure in C++?",
        "answers": [
            ["Proper destruction of derived class objects when deleted through a base class pointer", true],
            ["Overriding of base class methods", false],
            ["Allocation of memory for the destructor", false],
            ["Prevention of inheritance", false]
        ]
    },
    {
        "question": "What is an inline function in C++?",
        "answers": [
            ["A function that is called within a class", false],
            ["A function defined with the 'inline' keyword, allowing faster execution by avoiding function call overhead", true],
            ["A function that can only be used in the same file", false],
            ["A function that returns multiple values", false]
        ]
    },
    {
        "question": "What is the purpose of the 'const' keyword in C++?",
        "answers": [
            ["Defines a constant pointer", false],
            ["Indicates that a variable’s value cannot be modified", true],
            ["Restricts access to a variable", false],
            ["Enforces memory allocation", false]
        ]
    },
    {
        "question": "What is the role of the 'main' function in a C++ program?",
        "answers": [
            ["It defines the program's global variables", false],
            ["It initializes all classes", false],
            ["It serves as the entry point of the program", true],
            ["It ends the program execution", false]
        ]
    },
    {
        "question": "Which of the following is NOT a valid loop structure in C++?",
        "answers": [
            ["for", false],
            ["while", false],
            ["do-while", false],
            ["repeat-until", true]
        ]
    },
    {
        "question": "What is the purpose of a constructor in C++?",
        "answers": [
            ["To destroy an object when it is no longer needed", false],
            ["To initialize an object when it is created", true],
            ["To overload a function", false],
            ["To create a class", false]
        ]
    },
    {
        "question": "What does the 'new' operator return in C++?",
        "answers": [
            ["A pointer to the allocated memory", true],
            ["The address of the object", false],
            ["A reference to the object", false],
            ["A value of type int", false]
        ]
    },
    {
        "question": "What is the difference between '++i' and 'i++' in C++?",
        "answers": [
            ["There is no difference", false],
            ["'++i' is only used in for loops", false],
            ["'i++' increments i before using it", false],
            ["'++i' increments i before using it, 'i++' increments after", true]
        ]
    },
    {
        "question": "Which of the following is used to check if a pointer is NULL in C++?",
        "answers": [
            ["if (pointer != NULL)", false],
            ["if (pointer == 0)", false],
            ["if (pointer == NULL)", true],
            ["if (pointer != 0)", false]
        ]
    },
    {
        "question": "What is the result of dividing an integer by zero in C++?",
        "answers": [
            ["It causes undefined behavior", true],
            ["It results in zero", false],
            ["It throws an exception", false],
            ["It returns infinity", false]
        ]
    },
    {
        "question": "What is the 'const' keyword used for in C++?",
        "answers": [
            ["To declare a function that can be called by other functions", false],
            ["To define a constant value that cannot be changed", true],
            ["To restrict access to a variable", false],
            ["To allocate memory for a variable", false]
        ]
    },
    {
        "question": "What is a template in C++?",
        "answers": [
            ["A tool for creating macros", false],
            ["A class that cannot be inherited", false],
            ["A type of function pointer", false],
            ["A way to define generic classes or functions", true]
        ]
    },
    {
        "question": "What does the 'break' keyword do in C++?",
        "answers": [
            ["Exits the current loop or switch statement", true],
            ["Pauses the current iteration of a loop", false],
            ["Moves to the next iteration of a loop", false],
            ["Ends the current function", false]
        ]
    },
    {
        "question": "What does the 'sizeof' operator do in C++?",
        "answers": [
            ["Returns the number of elements in an array", false],
            ["Returns the size of a data type or object in bytes", true],
            ["Allocates memory for a variable", false],
            ["Checks if a data type is valid", false]
        ]
    },
    {
        "question": "What is the difference between 'malloc' and 'new' in C++?",
        "answers": [
            ["'malloc' is used for object creation, 'new' is used for arrays", false],
            ["'malloc' allocates memory for objects, 'new' allocates for primitive types", false],
            ["'new' initializes the memory, while 'malloc' does not", true],
            ["There is no difference", false]
        ]
    },
    {
        "question": "What is the purpose of the 'static' keyword in C++?",
        "answers": [
            ["It restricts a variable's scope to the function in which it is declared", false],
            ["It makes the variable or function shared by all instances of the class", true],
            ["It indicates that a function is virtual", false],
            ["It defines a global variable", false]
        ]
    },
    {
        "question": "Which of the following is true about the 'new' keyword in C++?",
        "answers": [
            ["It allocates memory dynamically", true],
            ["It allocates memory statically", false],
            ["It deallocates memory", false],
            ["It is used for array initialization", false]
        ]
    },
    {
        "question": "What does 'cin' do in C++?",
        "answers": [
            ["It outputs data to the console", false],
            ["It is used to take input from the user", true],
            ["It initializes variables", false],
            ["It creates a new instance of a class", false]
        ]
    },
    {
        "question": "Which of the following is true about a 'class' in C++?",
        "answers": [
            ["A class is a type of function", false],
            ["A class is a predefined variable", false],
            ["A class is a blueprint for creating objects", true],
            ["A class is used for memory allocation", false]
        ]
    },
    {
        "question": "What is the result of using 'delete' on a pointer in C++?",
        "answers": [
            ["It reallocates memory for the pointer", false],
            ["It deallocates the memory pointed to by the pointer", true],
            ["It initializes the pointer to null", false],
            ["It prints the value of the pointer", false]
        ]
    },
    {
        "question": "What does the 'sizeof' operator do in C++?",
        "answers": [
            ["It returns the size of a data type or object", true],
            ["It allocates memory", false],
            ["It declares a variable", false],
            ["It initializes an object", false]
        ]
    },
    {
        "question": "What is the difference between '++i' and 'i++' in C++?",
        "answers": [
            ["'++i' increments i before returning its value, 'i++' increments i after returning its value", true],
            ["There is no difference", false],
            ["'i++' is used for float values, while '++i' is used for integers", false],
            ["'i++' increments i before returning its value", false]
        ]
    },
    {
        "question": "Which of the following best describes the 'new' operator in C++?",
        "answers": [
            ["It frees allocated memory", false],
            ["It initializes variables to zero", false],
            ["It prints values to the console", false],
            ["It allocates memory dynamically for a variable or array", true]
        ]
    },
    {
        "question": "What does the 'break' statement do in C++?",
        "answers": [
            ["It pauses the program execution", false],
            ["It terminates the nearest loop or switch statement", true],
            ["It continues the next iteration of the loop", false],
            ["It exits the function", false]
        ]
    },
    {
        "question": "Which of the following is true about a 'constructor' in C++?",
        "answers": [
            ["It is used to delete an object", false],
            ["It is a type of operator", false],
            ["It is a special function that is called when an object is created", true],
            ["It is used to store data", false]
        ]
    }
]