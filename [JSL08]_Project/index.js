// Define a variable to hold the singleton instance
// This variable will store the one and only instance of the `BankBranch` class.
let bankBranchInstance = null;

// Define the Singleton class for BankBranch
class BankBranch {
    constructor(branchInfo) {
        // When a new instance of `BankBranch` is created, it checks if an instance already exists.
        // If an instance is found (bankBranchInstance is not null), it returns the existing instance.
        // If no instance exists, it sets up the new instance and saves it in `bankBranchInstance`.
        if (!bankBranchInstance) {
            this.branchInfo = branchInfo;
            bankBranchInstance = this;
        }
        // Return the single instance of `BankBranch`, whether it was just created or already existed.
        return bankBranchInstance;
    }

    // This method returns the branch information for the singleton instance.
    getBranchInfo() {
        return this.branchInfo;
    }

    // Additional methods for branch management can be added here.
}

// Usage

// Create the first instance of `BankBranch` with branch information.
const branchA = new BankBranch("Shop 10, Rustenburg Mall, Swartruggens Rd, Rustenburg, 2999");
console.log(branchA.getBranchInfo()); // Outputs the branch information: "Shop 10, Rustenburg Mall, Swartruggens Rd, Rustenburg, 2999"

// Create another instance of `BankBranch`, but because of the singleton pattern, it will not create a new instance.
const branchB = new BankBranch("FNB Rustenburg Square, Von Wielligh St, Rustenburg, 2999");
console.log(branchB.getBranchInfo()); // Outputs the same branch information as `branchA`: "Shop 10, Rustenburg Mall, Swartruggens Rd, Rustenburg, 2999"

// Check if `branchA` and `branchB` are the same instance.
// Since `BankBranch` is a singleton, they both should refer to the same instance.
console.log(branchA === branchB); // true, confirming that both variables point to the same instance.

// NOTES:
// This example demonstrates the Singleton pattern through the `BankBranch` class, ensuring only one instance of the branch exists across the application.

// - The `BankBranch` class represents bank branch information and uses the Singleton pattern to manage a single instance.
// - The static variable `bankBranchInstance` holds the sole instance of `BankBranch`.
// - When a new `BankBranch` instance is requested, the code checks whether `bankBranchInstance` already exists. If it does, the existing instance is returned; otherwise, a new one is created.
// - The `getBranchInfo` method retrieves the branch information from the singleton instance.
// - We test the Singleton pattern by creating two variables (`branchA` and `branchB`) referencing `BankBranch` instances. Both variables point to the same instance, confirming the single instance nature of the class.
