// //stripecontroller

// export const handleCheckoutSession = async (session) => {
//   const customer = await stripe.customers.retrieve(session.customer);

//   const user = await prisma.user.findUnique({
//     where: { email: customer.email },
//   });
//   if (!user) {
//     return;
//   }
//   const guide = await prisma.guide.findUnique({
//     where: { id: session.metadata.guideId },
//   });
//   if (!guide) {
//     return;
//   }
//   await prisma.booking.create({
//     data: {
//       guideId: guide.id,
//       userId: user.id,
//       date: new Date(session.metadata.date),
//       status: 'paid',
//     },
//   });
// };
// //stripecontroller
