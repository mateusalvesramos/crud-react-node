import express from "express";
// Importando nossa rota raiz.
import userRoutes from "./Routes/users.js";
import cors from "cors";

const app = express();

// Utlizando json para POST e PUT.
app.use(express.json());

app.use(cors());

app.use("/", userRoutes);

// Abrindo um porta e escutando ela.
app.listen(8800);