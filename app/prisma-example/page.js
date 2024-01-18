import prisma from "@/utils/db";

const prismaHandlers = async()=>{
  await prisma.task.create({
    data: {
      content: "walk dog",
    },
  });
  const allTasks = await prisma.task.findMany({
    orderBy:{
      createdAt: 'desc'
    }
  })
  return allTasks
}

const Prisma = () => {
  // const tasks = awa 
  return <div className="text-7xl">Prisma</div>;
};

export default Prisma;
