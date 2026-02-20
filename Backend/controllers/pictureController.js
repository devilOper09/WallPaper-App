import { sql } from "../config/db.js";

export const getAllPictures = async (req, res) => {
    try {
        const pictures = await sql`

        SELECT * FROM pictures ORDER BY created_at DESC
        `
        res.status(200).json({success: true, data:pictures});
    } catch (error) {

        res.status(500).json({ message: "internal server issue" });

    }

};
export const postAPicture = async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image file required"
            });
        }

        const image_url = `/uploads/${req.file.filename}`;

        const uploadData = await sql`
            INSERT INTO pictures(name, image_url, description)
            VALUES(${name}, ${image_url}, ${description})
            RETURNING *
        `;

        res.status(201).json({
            success: true,
            data: uploadData
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server issue"
        });
    }
};

export const getPicture = async (req, res) => {

    try {
        const getImage = await sql`
        SELECT image_url FROM pictures ORDER BY created_at DESC
        `
        res.status(200).json({
            success: true,
            data: getImage
        });
        console.log("request hit successfully")
    } catch (error) {
        res.status(500).json({ success: false, message: "internal server issue" })

    }

};
export const updatePicture = async (req, res) => {

    try {
        const {id} = req.params;
        const {image_url} = req.body;

        const update = await sql `
        UPDATE pictures SET image_url = ${image_url} WHERE id = ${id}
        RETURNING *
        `
        res.status(200).json({success: true, message:"data fetched successfully",  data: update});
    } catch (error) {
        res.status(500).json({success: false, message:"Internal server issue"});
        
    }


};
export const deletePicture = async (req, res) => {

    try {
        const { id } = req.params;
        const deleteImage = await sql 
        `
        DELETE FROM pictures WHERE id = ${id} RETURNING *;
        `
        res.status(200).json({
            success: true,
            data: deleteImage
        });
    } catch (error) {
        res.status(500).json({success:false, message: "Internal server issue"})
        
    }


};