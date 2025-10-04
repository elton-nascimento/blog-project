// sanity/client.ts

import { createClient } from 'next-sanity'

// As variáveis de ambiente são puxadas do arquivo .env.local que o Sanity CLI criou
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-20'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // `false` se você quiser dados sempre frescos, `true` para melhor performance
} )
