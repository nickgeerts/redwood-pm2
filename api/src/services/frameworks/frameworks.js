import { db } from 'src/lib/db'

export function frameworks() {
  return db.framework.findMany({ orderBy: { createdAt: 'asc' } })
}

export function framework({ id }) {
  return db.framework.findUnique({
    where: { id },
  })
}

export async function clapFramework({ id }) {
  let framework = await db.framework.findUnique({
    where: { id },
  })
  if (framework) {
    framework = await db.framework.update({
      where: { id },
      data: { claps: framework.claps + 1 },
    })
  }
  return framework
}

export function beforeResolver(rules) {
  rules.skip()
}
