import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

}

main()
	.catch(err => {
		console.error(err.message);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});