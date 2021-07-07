import AboutMe from "@/comp/content/AboutMe";
import FavouriteAnimeComp from "@/comp/content/FavouriteAnime";
import FavouriteSongsComp from "@/comp/content/FavouriteSongs";
import Layout from "@/comp/layout";
import Twemoji from "@/comp/utils/Twemoji";
import { API_ROUTE } from "@/conf/globals";
import { Heading, Text } from "@chakra-ui/react";
import { FavouriteAnime, TopSongs } from "@pxseu-dot-com/web";
import { InferGetStaticPropsType } from "next";
import React, { FC } from "react";

export const getStaticProps = async () => {
	const [topSongsRes, topAnimeRes] = await Promise.all([
		fetch(`${API_ROUTE}/v2/spotify/topSongs`),
		fetch(`${API_ROUTE}/v2/anilist/favourites`),
	]);

	const [topSongs, favouriteAnime] = (await Promise.all([topSongsRes, topAnimeRes]).then((resArr) =>
		Promise.all(resArr.map((res) => res.json())),
	)) as [TopSongs, FavouriteAnime];

	return {
		props: {
			topSongs,
			favouriteAnime,
		},
		revalidate: 60,
	};
};

const About: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ favouriteAnime, topSongs }) => (
	<Layout display="flex" flexDirection="column" alignItems="center">
		<Heading>
			About me <Twemoji emoji="📝" />
		</Heading>

		<AboutMe mt={3} />

		<Text py={2} fontSize="xl" textAlign="center">
			Here are some of my favourite songs:
		</Text>

		<FavouriteSongsComp songs={topSongs} />

		<Text py={2} fontSize="xl" textAlign="center">
			Here are some of my favourite anime:
		</Text>
		<FavouriteAnimeComp anime={favouriteAnime} />
	</Layout>
);

export default About;
