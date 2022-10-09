import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
	const post = await prisma.post.create({
		data: {
			title: "Fetch The Bolt Cutters",
			subtitle: "Passionate modern songwriting",
			score: 8.9,
			content: "This album is awesome. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus dictum at tempor commodo ullamcorper a lacus. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Phasellus egestas tellus rutrum tellus. Ante metus dictum at tempor commodo ullamcorper. Fringilla phasellus faucibus scelerisque eleifend. Aliquet risus feugiat in ante metus dictum at. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Sem viverra aliquet eget sit. Risus feugiat in ante metus. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Tempus quam pellentesque nec nam aliquam sem et tortor. Augue interdum velit euismod in pellentesque massa. Sed cras ornare arcu dui vivamus arcu felis bibendum. Justo eget magna fermentum iaculis eu. Condimentum vitae sapien pellentesque habitant morbi. Pulvinar neque laoreet suspendisse interdum consectetur libero. Sociis natoque penatibus et magnis dis parturient montes nascetur. Sed vulputate mi sit amet mauris. Est ante in nibh mauris cursus mattis molestie. Cras sed felis eget velit aliquet. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Ridiculus mus mauris vitae ultricies leo. Erat nam at lectus urna duis. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Non consectetur a erat nam at lectus urna. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Ut tellus elementum sagittis vitae et leo duis ut diam. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Quam elementum pulvinar etiam non quam. Pellentesque habitant morbi tristique senectus. Ante in nibh mauris cursus. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sit amet aliquam id diam. Morbi tincidunt augue interdum velit euismod in pellentesque massa.",
			music: {
				create: {
					title: "Fetch The Bolt Cutters",
					artist: "Fiona Apple",
					year: 2020,
					artwork: "https://upload.wikimedia.org/wikipedia/en/0/00/Fiona_Apple_-_Fetch_the_Bolt_Cutters.png"
				}
			}
		}
	});

	// const posts = await prisma.post.findMany({
	// 	include: {
	// 		music: true,
	// 	}
	// });

	console.log(post);
}

main()
	.catch(err => {
		console.error(err.message);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});