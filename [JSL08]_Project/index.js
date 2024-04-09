// Define a variable to hold the singleton instance
let bankBranchInstance = null;

// Define the Singleton class for BankBranch
class BankBranch {
  constructor(branchInfo) {
    // Check if the instance already exists; if yes, return it; otherwise, create a new instance
    if (!bankBranchInstance) {
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    }
    return bankBranchInstance;
  }

  // Define methods to manage branch information
  getBranchInfo() {
    return this.branchInfo;
  }
  
  // Other methods related to branch management can be added here.
}

// Usage
const branchA = new BankBranch("Main Street Branch");
console.log(branchA.getBranchInfo()); // Outputs: Main Street Branch

const branchB = new BankBranch("Second Street Branch");
console.log(branchB.getBranchInfo()); // Still outputs: Main Street Branch, because it's a singleton

console.log(branchA === branchB); // true, both variables point to the same instance

// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
