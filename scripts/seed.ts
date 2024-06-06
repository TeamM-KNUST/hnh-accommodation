const { PrismaClient } = require("@prisma/client")

const prismadb = new PrismaClient();

async function main(){
    try {
        await prismadb.category.createMany({
            data: [
                { name: "Hostel" },
                { name: "Homestel" },
            ]
        })
        console.log("Seeding successful")
    } catch (error) {
        console.log("Error seeding the database:", error)
    } finally {
        await prismadb.$disconnect();
    }
}

main();


async function location() {
    try {
        await prismadb.area.createMany({
            data: [
                { name: "Ayeduase" },
                {name: "Boadi"},
            ]
        })
        console.log("Sucess")
    }
    catch (error) {
        console.log("Failed to seeding area", error)
    }
    finally {
        await prismadb.$disconnect();
    }
}

location();