var faker = require('faker');

var database = {
    sentiment: [],
    classification: [],
    entities: [],
    concepts: [],
    summarize: []
};

for (var i = 1; i <= 20; i++) {
    database.sentiment.push(
        { id: i, polarity: faker.commerce.productName(), subjectivity: faker.commerce.productName(), text: faker.lorem.sentences(), polarity_confidence: faker.random.number(), subjectivity_confidence: faker.random.number() }
    );
    database.classification.push(
        { id: i, code: faker.random.number(), confidence: faker.random.number() }
    );
    database.entities.push(
        { id: i, location: faker.commerce.productName(), organization: faker.lorem.sentences() }
    );
    database.concepts.push(
        { id: i, string: faker.commerce.productName(), score: faker.random.number() }
    );
    database.summarize.push(
        { id: i, summary: faker.lorem.sentences() }
    );
}

console.log(JSON.stringify(database));