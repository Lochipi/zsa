"use server"

import z from "zod"
import { createServerAction } from "zsa"

export const produceNewMessage = createServerAction()
  .input(
    z.object({
      name: z.string().min(5),
    }),
    {
      type: "state",
    }
  )
  .handler(async ({ input }) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return "Hello, " + input.name
  })
