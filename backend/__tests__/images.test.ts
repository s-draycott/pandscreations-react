import request from "supertest";

import { app } from "../src/index"

describe("GET /api/images", () => {
    it("should return 200 and a JSON object", async () => {
        const rest = await request(app).get("/api/images");
        expect(rest.statusCode).toBe(200);
        expect(typeof rest.body).toBe("object")
    })
})

describe("CORS headers", () => {
  it("should allow requests from the frontend URL", async () => {
    const res = await request(app)
      .get("/api/images")
      .set("Origin", process.env.FRONTEND_URL!);

    expect(res.headers['access-control-allow-origin']).toBe(process.env.FRONTEND_URL);
  });

  it("should not allow requests from other origins", async () => {
    const res = await request(app)
      .get("/api/images")
      .set("Origin", "http://malicious.com");

    // depending on CORS library version/config, could be undefined or error
    expect(res.headers['access-control-allow-origin']).not.toBe("http://malicious.com");
  });
});
