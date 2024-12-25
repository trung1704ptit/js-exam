class BankAccount {
  private balance: number;

  constructor(initBalance: number) {
    this.balance = initBalance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  public getBalance(): number {
    return this.balance;
  }
}

// Usage
const account = new BankAccount(1000)
account.deposit(1000)

account.withdraw(200)

/**
 * 
 * Ý nghĩa: Các thuộc tính nhạy cảm như balance được ẩn đi và chỉ có thể truy cập qua các phương thức deposit, withdraw và getBalance.
 */