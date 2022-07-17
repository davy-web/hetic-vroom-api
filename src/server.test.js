const request = require("supertest");
const app = require("./app");

describe("GET / ", () => {
  test("It should respond with an array", async () => {
    const response = await request(app).get("/");
    expect(response.body).toEqual({"message" : "Vroom API"});
    expect(response.statusCode).toBe(200);
  });
});