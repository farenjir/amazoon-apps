const configs = {
  default: {
    output: {
      mode: 'tags-split',
      target: '../generated/api.ts',
      schemas: '../generated/schemas.ts',
      client: 'react-query',
      mock: true,
      override: {
        mutator: {
          path: './axios.config.ts',
          name: 'customAxios',
        },
        // query: {
        //   useQuery: true,
        //   useInfinite: true,
        //   useInfiniteQueryParam: 'nextId',
        //   options: {
        //     staleTime: 10000,
        //   },
        // },
      },
    },
    input: {
      target: './services/index.yaml',
    },
  },
};

export default configs