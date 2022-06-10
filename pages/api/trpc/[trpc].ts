import * as trpc from '@trpc/server';
import { TRPCError } from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';
import { createContext, createRouter } from '../../../server/context';
import { ping } from '../../../server/handlers';

export const appRouter = createRouter()
  .query('ping', {
    resolve() {
      return ping();
    },
  })
  .query('protected', {
    resolve({ ctx }) {
      if (!ctx.session?.user?.name) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
      }

      return {
        greeting: `hello ${ctx.session?.user?.name}`,
      };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
