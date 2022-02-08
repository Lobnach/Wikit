import request from 'supertest';
import app from "../app.js";
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

jest.setTimeout(60000);

let mongo;
beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();
  await mongoose.connection.close();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

beforeEach(async () => {
  const tweetsCollection = await mongoose.connection.db.collection('tweets');
  await tweetsCollection.deleteMany({})
})

it("Should fetch all tweets",async () => {
  const { body } = await request(app)
    .get(`/tweets`)
    .send()
    .expect(200);
  expect(body.length).toEqual(0);
});

it("Should fetch a tweet by id",async () => {
  const creationResponse = await request(app)
    .post(`/tweets`)
    .send({
      "authorName":"Author",
      "content":"Test tweet"
    })
  const id = creationResponse.body._id
  const { body } = await request(app)
    .get(`/tweets/`+id)
    .send({
      "authorName":"Author",
      "content":"Test tweet"
    })
    .expect(200);
  expect(body.authorName).toEqual("Author");
  expect(body.content).toEqual("Test tweet");
});

it("Should create a new tweet and return it", async () => {
  const { body } = await request(app)
    .post(`/tweets`)
    .send({
      "authorName":"Author",
      "content":"Test tweet"
    })
    .expect(200);
  expect(body.authorName).toEqual("Author");
  expect(body.content).toEqual("Test tweet");

  const checkResponse = await request(app)
    .get(`/tweets`)
    .send()
    .expect(200);
  expect(checkResponse.body.length).toEqual(1);
});

afterAll(async () =>  {
  await mongo.stop();
  await mongoose.connection.close();
})
