import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

// Backend route to fetch guides
// guideController.js
// guideController.js
// guideController.js
export const getGuides = async (req, res) => {
  const { country, stateName, cityName, pointsOfInterest } = req.query;

  // Log the query parameters for debugging
  console.log("Query Parameters:", req.query);

  // Verify the value of country
  if (!country) {
    return res.status(400).json({ message: "Country is required" });
  }

  try {
    const posts = await prisma.user.findMany({
      where: {
        country: country || undefined,
         state: stateName || undefined,
         city: cityName || undefined,
        // pointsOfInterest: pointsOfInterest ? {
        //   hasEvery: pointsOfInterest.split(",") // Split the string into an array
        // } : undefined
      }
    });

    res.status(200).json(posts);
  } catch (err) {
    console.error("Error fetching guides:", err);
    res.status(500).json({ message: "Failed to fetch guides" });
  }
};



export const getGuide = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.user.findUnique({
      where: { id },
      include: {

        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });


    res.status(200).json({ ...post, });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get post" });
  }
};
