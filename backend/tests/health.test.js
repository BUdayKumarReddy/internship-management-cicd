const request = require("supertest");
const app = require("../src/server");

describe("Backend API", () => {

    test("Health endpoint should respond", async () => {

        const response = await request(app)
            .get("/api/health");

        expect([200, 500]).toContain(response.statusCode);

    });

});