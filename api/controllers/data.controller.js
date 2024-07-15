import prisma from "../lib/prisma.js";

export const getCountries = async (req, res) => {
  try {
    const countries = await prisma.country.findMany();
    res.json(countries);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get countries!" });
  }
};

export const getCitiesbycountry = async (req, res) => {
    const { countryId } = req.query;
    try {
      const cities = await prisma.city.findMany({ where: { countryId: Number(countryId) } });
      res.json(cities);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to get cities!" });
    }
  };

  

export const getCities = async (req, res) => {
  const { countryId } = req.query;
  try {
    const cities = await prisma.city.findMany({ where: { countryId } });
    res.json(cities);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get cities!" });
  }
};

export const getLanguages = async (req, res) => {
  try {
    const languages = await prisma.language.findMany();
    res.json(languages);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get languages!" });
  }
};

export const getPointsOfInterest = async (req, res) => {
  const { cityId } = req.query;
  try {
    const pointsOfInterest = await prisma.pointOfInterest.findMany({ where: { cityId } });
    res.json(pointsOfInterest);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get points of interest!" });
  }
};