# [JSL08]: BankBranch Singleton Project

This project implements a Singleton class for managing a bank branch. The Singleton pattern ensures that only one instance of the `BankBranch` class is created during the lifetime of the application. This single instance is used to manage the bank branch information.

### Contents

- [Project Description](#project-description)
- [Usage](#usage)
- [How It Works](#how-it-works)

### Project Description

The project defines a `BankBranch` class with a Singleton pattern. The class maintains a single instance of the bank branch. The instance stores branch information such as the branch's location. New instances of the class will return the same instance, ensuring that the bank branch data remains consistent throughout the application.

### Usage

To use the `BankBranch` Singleton class:

1. Create a new instance of the `BankBranch` class by passing the branch information as an argument:
    ```javascript
    const branchA = new BankBranch("Shop 10, Rustenburg Mall, Swartruggens Rd, Rustenburg, 2999");
    ```

2. Access branch information using the `getBranchInfo` method:
    ```javascript
    console.log(branchA.getBranchInfo());
    ```

3. Attempting to create another instance of the `BankBranch` class will return the same instance as before:
    ```javascript
    const branchB = new BankBranch("FNB Rustenburg Square, Von Wielligh St, Rustenburg, 2999");
    console.log(branchB.getBranchInfo()); // Outputs the same information as branchA
    ```

4. You can check if two variables point to the same instance:
    ```javascript
    console.log(branchA === branchB); // true, both variables point to the same instance
    ```

### How It Works

- When you create a new `BankBranch` instance with a branch information argument, the constructor checks if an instance already exists.
- If an instance does not exist, the constructor creates a new instance and assigns the branch information to it.
- If an instance already exists, the constructor returns the existing instance instead of creating a new one.
- All subsequent calls to create a new `BankBranch` instance with new branch information will return the same instance.
- The class provides methods such as `getBranchInfo` to manage and access branch information.
