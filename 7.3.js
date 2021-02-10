const book1 = {
    bookName: "node learning",
    autor: "Natalie",
    publishdate: 2021
}

const book2 = {
    bookName: "js learning",
    autor: "Pini",
    publishdate: 2020
}

//3
bookUtil = {
    getFirstPublished: function(book1, book2) {
        let utils = book1.publishdate > book2.publishdate ? book2.bookName : book1.bookName;
        return console.log(utils);
    },

    //4
    setNewEdition: function(book, publishdate) {
        let latestEdition = publishdate;
        return console.log(latestEdition);
    },

    //5
    setLanguage: function(book1, language) {
        let languageNew = language;
        return console.log(languageNew);
    },

    //6
    setTranslation: function(book1, language, translation) {
        let translator = translation;
        return console.log(translator, language);
    },

    //7
    setPublisher: function(name, location, publisherName) {
        let publisherName = {
            name1: 'name',
            location1: 'location'
        }
        return console.log(publisherName);
    },

    //8
    getFirstPublished: function(book1, book2) {
        let isIdentical = (book1.location === book2.publilocation) && (book1.publisherName === book2.publisherName) ?
            "Same" : "different";
        return console.log(isIdentical);
    }
}

//check sent parameters again
bookUtil.getFirstPublished(book1, book2);
bookUtil.setNewEdition("book1", 2021);
bookUtil.setLanguage("book1", "finnish");
bookUtil.setTranslation("book1", "english", "someone");
bookUtil.setPublisher("book1", "Israel", "someone");
bookUtil.getFirstPublished("book1", "book2");