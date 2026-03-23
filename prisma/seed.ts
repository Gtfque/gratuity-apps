import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding...')

  // Очистка
  await prisma.transaction.deleteMany({})
  await prisma.employee.deleteMany({})
  await prisma.user.deleteMany({})
  await prisma.business.deleteMany({})

  // Создаем бизнес
  const business = await prisma.business.create({
    data: {
      name: 'Кофе Хаус',
      address: 'ул. Примерная, 123',
      phone: '+7 (999) 123-45-67',
    },
  })
  console.log('✅ Business created')

  // Создаем владельца
  const owner = await prisma.user.create({
    data: {
      email: 'owner@coffee.ru',
      password: 'password123',
      name: 'Иван Петров',
      role: 'owner',
      businessId: business.id,
    },
  })
  console.log('✅ Owner created')

  // Создаем сотрудников
  const employees = [
    { name: 'Анна Константинова', email: 'anna@coffee.ru', position: 'Старший бариста', goal: 'Поездка в Италию' },
    { name: 'Михаил Соколов', email: 'mikhail@coffee.ru', position: 'Шеф-повар', goal: 'Профессиональный нож' },
    { name: 'Елена Волкова', email: 'elena@coffee.ru', position: 'Администратор', goal: 'Курсы английского' },
  ]

  for (const emp of employees) {
    const user = await prisma.user.create({
      data: {
        email: emp.email,
        password: 'password123',
        name: emp.name,
        role: 'employee',
        businessId: business.id,
      },
    })

    await prisma.employee.create({
      data: {
        userId: user.id,
        name: emp.name,
        email: emp.email,
        businessId: business.id,
        position: emp.position,
        goal: emp.goal,
      },
    })
    console.log(`✅ Employee: ${emp.name}`)
  }

  // Создаем транзакции
  await prisma.transaction.createMany({
    data: [
      { businessId: business.id, amount: 150, type: 'common', status: 'completed', paymentMethod: 'card', customerName: 'Дмитрий', completedAt: new Date() },
      { businessId: business.id, amount: 300, type: 'personal', status: 'completed', paymentMethod: 'sbp', customerName: 'Мария', completedAt: new Date() },
      { businessId: business.id, amount: 200, type: 'common', status: 'completed', paymentMethod: 'card', customerName: 'Алексей', completedAt: new Date() },
    ],
  })
  console.log('✅ Transactions created')

  console.log('✨ Seeding done!')
  console.log('\n🔑 Test credentials:')
  console.log('   Owner: owner@coffee.ru / password123')
  console.log('   Employee: anna@coffee.ru / password123')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
