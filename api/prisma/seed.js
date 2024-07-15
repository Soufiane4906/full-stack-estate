import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Seed countries
    const countries = [
      { name: 'Morocco' },
      { name: 'Italie' },
      { name: 'France' },
      { name: 'Germany' }, // Nouveau pays
      // Ajoutez plus de pays si nécessaire
    ];

    for (const country of countries) {
      try {
        await prisma.country.create({
          data: country,
        });
      } catch (error) {
        if (error.code !== 'P2002') {
          console.error(`Failed to create country: ${country.name}`, error);
        }
      }
    }

    // Fetch countries to get their IDs
    const usa = await prisma.country.findUnique({ where: { name: 'USA' } });
    const canada = await prisma.country.findUnique({ where: { name: 'Canada' } });
    const france = await prisma.country.findUnique({ where: { name: 'France' } });
    const germany = await prisma.country.findUnique({ where: { name: 'Germany' } }); // Nouveau pays
debugger
    // Seed cities
    const cities = [
      { name: 'New York', countryId: usa.id },
      { name: 'Toronto', countryId: canada.id },
      { name: 'Paris', countryId: france.id },
      { name: 'Berlin', countryId: germany.id }, // Nouvelle ville
      // Ajoutez plus de villes si nécessaire
    ];

    for (const city of cities) {
      try {
        await prisma.city.create({
          data: city,
        });
      } catch (error) {
        if (error.code !== 'P2002') {
          console.error(`Failed to create city: ${city.name}`, error);
        }
      }
    }

    // Seed languages
    const languages = [
      { name: 'English' },
      { name: 'French' },
      { name: 'Spanish' },
      { name: 'German' }, // Nouvelle langue
      // Ajoutez plus de langues si nécessaire
    ];

    for (const language of languages) {
      try {
        await prisma.language.create({
          data: language,
        });
      } catch (error) {
        if (error.code !== 'P2002') {
          console.error(`Failed to create language: ${language.name}`, error);
        }
      }
    }

    // Fetch cities to get their IDs
    const newYork = await prisma.city.findUnique({ where: { name: 'New York' } });
    const toronto = await prisma.city.findUnique({ where: { name: 'Toronto' } });
    const paris = await prisma.city.findUnique({ where: { name: 'Paris' } });
    const berlin = await prisma.city.findUnique({ where: { name: 'Berlin' } }); // Nouvelle ville

    // Seed points of interest
    const pointsOfInterest = [
      { name: 'Statue of Liberty', cityId: newYork.id },
      { name: 'CN Tower', cityId: toronto.id },
      { name: 'Eiffel Tower', cityId: paris.id },
      { name: 'Brandenburg Gate', cityId: berlin.id }, // Nouveau point d'intérêt
      // Ajoutez plus de points d'intérêt si nécessaire
    ];

    for (const point of pointsOfInterest) {
      try {
        await prisma.pointOfInterest.create({
          data: point,
        });
      } catch (error) {
        if (error.code !== 'P2002') {
          console.error(`Failed to create point of interest: ${point.name}`, error);
        }
      }
    }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });