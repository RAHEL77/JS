const candyStore = {
    candies: [{ name: "mint gum", id: "as12f", price: 2, amount: 2 },
        { name: "twix", id: "5hd7y", price: 5, amount: 4 },
    ],
    cashRegister: 200
};
let candy;

function getCandy(candyStore, id) {
    candy = candyStore.candies.find((element) => {
        return element.id === id;
    });
    console.log(candy);
    return candy || "not found";
}
getCandy(candyStore, "as12f");

function getPrice(candyStore, id) {
    candy = candyStore.candies.find((element) => {
        return element.id === id;
    });
    console.log(candy.price);
    return candy.price || "not found";
}
getPrice(candyStore, "as12f");

function addCandy(candyStore, id, name, price) {
    const candy = getCandy(candyStore, id);
    console.log(candy);
    const candObj = {
        name: name,
        id: id,
        price: price,
        amount: 1,
    }
    candyStore.candies.push(candObj);
    console.log(candyStore);
}
addCandy(candyStore, "8768", "kola", 12);

function buy(candyStore, id) {
    const candy = getCandy(candyStore, id).price;
    candyStore.cashRegister += candy.price;
    candy.amount--;
}

buy(candyStore, "as12f")