const request = require("supertest");
const app = require("../src/server");

describe("Backend API", () => {

    test("Status endpoint should respond successfully", async () => {

        const response = await request(app)
            .get("/api/status");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("UP");

    });

});