import { db } from 'src/lib/db'

export function frameworks() {
  return db.framework.findMany()
}

export function framework({ id }) {
  return db.framework.findOne({
    where: { id },
  })
}

export async function clapFramework({ id }) {
  let framework = await db.framework.findOne({
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
