const { PrismaClient } = require('@prisma/client');
const prismadb = new PrismaClient();

async function main() {
    try {
        await prismadb.category.createMany({
           data: [
                { name: "Hostel" },
                { name: "Homestel" },
            ]
       });
        console.log("Seeding categories successful");
    } catch (error) {
        console.error("Error seeding categories:", error);
    } finally {
        await prismadb.$disconnect();
    }
}

async function locate() {
    try {
        await prismadb.location.createMany({
            data: [
                { name: "Ayeduase New-Site" },
                { name: "Boadi" },
                { name: "Kotei" },
                { name: "Bomso" },
                { name: "Ayeduase, North-Side" },
                { name: "Emena" },
                { name: "Ayigya" },
                { name: "Kentikrono" },
                { name: "Ahinsan" },
                { name: "Gaza" },
                { name: "Maxima" },
                { name: "Ayeduase, South-Side" },
                { name: "Gyinase" }                   
            ]
        });
        console.log("Seeding locations successful");
    } catch (error) {
        console.error("Error seeding locations:", error);
    } finally {
        await prismadb.$disconnect();
    }
}

async function seedDatabase() {
    await main();
    await locate();
}

seedDatabase();
