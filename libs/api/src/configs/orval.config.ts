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
          useInfiniteQueryParam: 'nextId',
          options: {
            staleTime: 10000,
          },
        },
      },
    },
    input: {
      target: '../services/index.json',
    },
  },
};

export default configs