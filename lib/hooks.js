import useSWR from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
	const {data, error} = useSWR("/me", fetcher);

	return {
		user: data,
		isLoading: !data && !error,
		isError: error,
	}
};

export const usePost = () => {
	const {data, error} = useSWR("/post", fetcher);

	return {
		posts: data,
		isLoading: !data && !error,
		isError: error,
	}
};