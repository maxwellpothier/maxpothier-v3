const {PrismaClient} = require("@prisma/client");
const bcrypt = require("bcrypt");
const {postsData} = require("./postsData");

const prisma = new PrismaClient();

const run = async () => {
	await Promise.all(postsData.map(async (post) => {
		return prisma.post.upsert({
			where: {title: post.title},
			update: {},
			create: {
				title: post.title,
				subtitle: post.subtitle,
				album: {
					create: {
						title: post.album.title,
						artist: post.album.artist,
						year: post.album.year,
						artwork: post.album.artwork,
					}
				}
			},
		})
	}));

	const salt = bcrypt.genSaltSync();
	const user = await prisma.user.upsert({
		where: {username: "max@whatsturning.com"},
		update: {},
		create: {
			username: "max@whatsturning.com",
			password: bcrypt.hashSync("password", salt),
			firstName: "Max",
			lastName: "Pothier",
		},
	});

	const albums = await prisma.album.findMany({});
	await prisma.listenLater.create({
		data: {
			name: "Listen List",
			user: {
				connect: {id: user.id}
			},
			albums: {
				connect: albums.map((album) => ({
					id: album.id,
				})),
			}
		}
	})
};

run()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect()
	});