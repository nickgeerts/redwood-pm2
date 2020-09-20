/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it). For example:
  //
  //   const existing = await db.user.findMany({ where: { email: 'admin@email.com' }})
  //   if (!existing.length) {
  //     await db.user.create({ data: { name: 'Admin', email: 'admin@email.com' }})
  //   }

  const count = await db.framework.count()
  if (count === 0) {
    await db.framework.create({ data: { name: 'Redwood.js', claps: 9001 } })
    await db.framework.create({ data: { name: 'Next.js', claps: 4230 } })
    await db.framework.create({ data: { name: 'Blitz.js', claps: 242 } })
    await db.framework.create({ data: { name: 'Ruby on Rails', claps: 1000 } })
    await db.framework.create({ data: { name: 'Django', claps: 423 } })
    await db.framework.create({ data: { name: 'Nest.js', claps: 543 } })
    await db.framework.create({ data: { name: 'Adonis.js', claps: 377 } })
    await db.framework.create({ data: { name: 'Sails.js', claps: 21 } })
    await db.framework.create({ data: { name: 'Java Spring', claps: 0 } })
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
