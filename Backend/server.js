import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors"
import dotenv from "dotenv";
import { sql } from "./config/db.js";
import publicRoutes from "./routes/publicRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";


dotenv.config()

const port = process.env.PORT || 3000;

const app = express();

app.use(helmet({crossOriginResourcePolicy: false}
    
));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/uploads", express.static("uploads"));



// app.use("/api/wallpaper", pictureRoute);

const adminAuth = (req, res, next)=>{
    const key = req.headers["x-admin-key"];

    if(key!==process.env.ADMIN_SECRET){
        return res.status(403).json({
            success: false,
            message:"Not authorized"
        });
    }
    next();

};
app.use("/api/public/wallpaper", publicRoutes);
app.use("/api/admin/wallpaper", adminAuth, adminRoutes);


async function initDb() {
    try {

        await sql`
            CREATE TABLE IF NOT EXISTS pictures(
            id SERIAL  PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image_url VARCHAR NOT NULL,
            description TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `

    } catch (error) {
        console.log("Error Initializing Database")
    }
}


app.get("/", (req, res) => {
  res.send("Backend is running");
});
initDb().then(() => {
    app.listen(port, () => {
        console.log(`server is running on this ${port}`);
    });

})
