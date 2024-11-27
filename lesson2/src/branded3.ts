type UserId = number & {__brand: 'UID'};
type OrderId = number & {__brand: 'OID'};

function createUser(id:number) : UserId {
    return id as UserId;
}

function processUserId(id: UserId) {
    //
}

const userId = createUser(42);
const orderId = 453 as OrderId;
processUserId(userId); // works
processUserId(orderId); // fails

