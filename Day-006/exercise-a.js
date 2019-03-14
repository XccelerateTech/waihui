var asia = {
    countries: {
        India: {
            Mumbai: {
                population: 18.5
            },
        },
        China: {
            Beijing: {
                population: 21.5
            },
            "Hong Kong": {
                population: 7.3
            },
        },
    },
}

// access Mumbai's population
const mumbai = asia["countries"]["India"]["Mumbai"]["population"];
console.log(mumbai);

// access Beiging's population
const beijing = asia["countries"]["China"]["Beijing"]["population"];
console.log(beijing);

// access Hong Kong's population
const hongkong = asia["countries"]["China"]["Hong Kong"]["population"];
console.log(hongkong);


var familyBankValues = {
    familyMembers: {
        Mother: {
            "account number": 8096291,
            accountBalance: 10000000,
        },
        Father: {
            "account number": 8096292,
            accountBalance: 9999999,
        },
        Sister: {
            "account number": 8096293,
            accountBalance: 10000,
        },
        "Step Brother": {
            "account number": 8096294,
            accountBalance: 15000
        },
    },
}

// access mother information
const motherResult = [];
motherResult.push(familyBankValues["familyMembers"]["Mother"]["account number"]);
motherResult.push(familyBankValues["familyMembers"]["Mother"]["accountBalance"]);
console.log(motherResult);

// access father information
const fatherResult = [];
fatherResult.push(familyBankValues["familyMembers"]["Father"]["account number"]);
fatherResult.push(familyBankValues["familyMembers"]["Father"]["accountBalance"]);
console.log(fatherResult);

// access sister information
const sisterResult = [];
sisterResult.push(familyBankValues["familyMembers"]["Sister"]["account number"]);
sisterResult.push(familyBankValues["familyMembers"]["Sister"]["accountBalance"]);
console.log(sisterResult);

// access step brother information
const stepBrotherResult = [];
stepBrotherResult.push(familyBankValues["familyMembers"]["Step Brother"]["account number"]);
stepBrotherResult.push(familyBankValues["familyMembers"]["Step Brother"]["accountBalance"]);
console.log(stepBrotherResult);