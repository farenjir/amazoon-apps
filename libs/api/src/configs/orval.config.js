const configs = {
  default: {
    output: {
      target: '../generated/api',
      schemas: '../generated/schemas',
      client: 'react-query',
      prettier: true,
      override: {
        mutator: {
          path: './axios.config.ts',
          name: 'customAxios',
        },
        query: {
          useQuery: true,
          useInfinite: true,
          useSuspense: true,
          useInfiniteQueryParam: 'nextId',
          options: {
            staleTime: 10000,
          },
          staleTime: 5 * 60 * 1000,
          cacheTime: 10 * 60 * 1000,
          retry: 1,
          refetchOnWindowFocus: false,
        },
        mutation: {
          retry: false,
        },
      },
    },
    input: {
      target: '../services/index.yaml',
    },
  },
};

export default configs;
