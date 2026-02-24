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

    // 🔥 Cloudinary URL
    const image_url = req.file.path;

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
    const { id } = req.params;

    const picture = await sql`
      SELECT * FROM pictures WHERE id = ${id}
    `;

    if (picture.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Wallpaper not found"
      });
    }

    res.status(200).json({
      success: true,
      data: picture[0]
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server issue"
    });
  }
};
export const updatePicture = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const updated = await sql`
      UPDATE pictures
      SET
        name = COALESCE(${name}, name),
        description = COALESCE(${description}, description)
      WHERE id = ${id}
      RETURNING *
    `;

    if (updated.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Wallpaper not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Updated successfully",
      data: updated[0]
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server issue"
    });
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