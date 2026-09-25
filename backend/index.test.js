const request = require("supertest");
const server = require("./index");

describe("GET /", () => {
  // Hapus blok afterAll sepenuhnya

  it("seharusnya merespon HTTP 200 dan pesan yang benar", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("Hello from Secure Backend!");
  });
});
