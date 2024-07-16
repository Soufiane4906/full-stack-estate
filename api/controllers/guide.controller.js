import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

// Backend route to fetch guides
export const getGuides = async (req, res) => {
  const query = req.query;

  try {
    const posts = await prisma.user.findMany({
      where: {
        country: query.country,
        state: query.stateName,
        city: query.cityName,
        pointsOfInterest: {
          has: query.pointsOfInterest // Assuming pointsOfInterest is an array
        }
      }
    });

    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};


export const getGuide = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
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

    const token = req.cookies?.token;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (!err) {
          const saved = await prisma.savedPost.findUnique({
            where: {
              userId_postId: {
                postId: id,
                userId: payload.id,
              },
            },
          });
          res.status(200).json({ ...post, isSaved: saved ? true : false });
        }
      });
    }
    res.status(200).json({ ...post, isSaved: false });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get post" });
  }
};
