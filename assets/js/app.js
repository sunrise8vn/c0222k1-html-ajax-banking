class App {

    static SweetAlert = class {

        static showAlertSuccess(t) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: t,
                showConfirmButton: false,
                timer: 2500
            })
        }

        static showAlertError(t) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: t,
                showConfirmButton: false,
                timer: 2500
            })
        }

        static showConfirmDelete() {
            return Swal.fire({
                title: 'Are you sure to deactive the selected customer ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, deactive it!'
            });
        }

    }
}


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

class Sender extends Customer {
    constructor() {
        super();
    }
}

class Recipient extends Customer {
    constructor() {
        super();
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