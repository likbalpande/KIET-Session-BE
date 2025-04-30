import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.listen(2800, function onSuccess() {
    console.log("--------------Started----------");
});

app.post("/expenses", function temp(request, response) {
    console.log(request.body);
});

// http://localhost:2800/
