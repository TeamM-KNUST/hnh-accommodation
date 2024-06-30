import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
    try {
        await prisma.category.createMany({
           data: [
                { name: "Hostel" },
                { name: "Homestel" },
            ]
       })
        console.log("Seeding successful")
    } catch (error) {
        console.log("Error seeding the database:", error)
    } finally {
        await prisma.$disconnect();
    }
}

main();


async function locate() {
    try {
        await prisma.location.createMany({
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
        await prisma.$disconnect();
    }
}

locate();