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


async function locate() {
    try {
        await prismadb.location.createMany({
            data: [
                { name: "Ayeduase New-Site" },
                { name: "Boadi" },
                { name: "Kotei" },
                { name: "Bomso" },
                { name: "Ayeduase, North-Side " },
                { name: "Emena" },
                { name: "Ayigya" },
                { name: "Kentikrono" },
                { name: "Ahinsan" },
                { name: "Gaza" },
                { name: "Maxima" },
                { name: "Ayeduase, South-Side" },
                { name: "Gyinase" }                   
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

locate();