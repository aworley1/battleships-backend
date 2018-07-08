var chakram = require('chakram'),
    expect = chakram.expect;

describe("create a new game", function () {
    it("should create a new game", function () {
        var response = chakram.post("http://localhost:8080/games");
        expect(response).to.have.status(200);
        expect(response).to.have.header("content-type", "application/json");
        expect(response).to.comprise.of.json({
            id: "1"
        });
        return chakram.wait();
    });
});