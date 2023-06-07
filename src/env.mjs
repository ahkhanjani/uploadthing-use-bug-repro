import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
    UPLOADTHING_SECRET: z.string(),
  },

  client: {},

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
