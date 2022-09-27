import {useSWR} from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
	const {data, error} = useSWR("/me", fetcher);

	return {
		user: data,
		isLoading: !data && !error,
		isError: error,
	};
};

export const usePosts = () => {
	const {data, error} = useSWR("/posts", fetcher);

	return {
		posts: data || [],
		isLoading: !data && !error,
		isError: error,
	};
};