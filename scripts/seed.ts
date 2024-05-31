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