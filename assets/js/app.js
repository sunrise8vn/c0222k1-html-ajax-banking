class Customer {
    constructor(id, fullName, email, phone, address, balance = 0, deleted = 0) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.balance = balance;
        this.deleted = deleted;
    }
}

class Deposit {
    constructor(id, customerId, transactionAmount, createdAt, createdBy, updatedAT, updatedBy, deleted) {
        this.id = id;
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.updatedAt = updatedAT;
        this.updatedBy = updatedBy;
        this.deleted = deleted;
    }
}